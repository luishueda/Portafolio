from django.contrib.auth import get_user_model
from django.core.cache import cache
from django.test import TestCase, override_settings
from rest_framework import status
from rest_framework.test import APIClient
from unittest.mock import patch

from .models import Message
from .views import ContactCreateThrottle


@override_settings(SECURE_SSL_REDIRECT=False)
class ContactApiSecurityTests(TestCase):
    def setUp(self):
        self.client = APIClient()
        self.message = Message.objects.create(
            name='Visitante',
            email='visitante@example.com',
            content='Mensaje privado',
        )
        self.payload = {
            'name': 'Nuevo visitante',
            'email': 'nuevo@example.com',
            'content': 'Quiero información sobre un proyecto.',
        }

    def tearDown(self):
        cache.clear()

    def test_anonymous_visitors_cannot_list_or_retrieve_messages(self):
        self.assertEqual(self.client.get('/api/contact/').status_code, status.HTTP_403_FORBIDDEN)
        self.assertEqual(
            self.client.get(f'/api/contact/{self.message.pk}/').status_code,
            status.HTTP_403_FORBIDDEN,
        )

    def test_anonymous_visitors_cannot_update_or_delete_messages(self):
        self.assertEqual(
            self.client.patch(
                f'/api/contact/{self.message.pk}/', {'is_read': True}, format='json'
            ).status_code,
            status.HTTP_403_FORBIDDEN,
        )
        self.assertEqual(
            self.client.delete(f'/api/contact/{self.message.pk}/').status_code,
            status.HTTP_403_FORBIDDEN,
        )
        self.message.refresh_from_db()
        self.assertFalse(self.message.is_read)

    @override_settings(EMAIL_BACKEND='django.core.mail.backends.locmem.EmailBackend')
    def test_anonymous_visitor_can_submit_only_public_fields(self):
        response = self.client.post('/api/contact/', self.payload, format='json')

        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(set(response.data), {'name', 'email', 'content'})
        self.assertTrue(Message.objects.filter(email=self.payload['email']).exists())

    def test_staff_administrator_can_manage_messages(self):
        admin = get_user_model().objects.create_user(
            username='admin', password='safe-test-password', is_staff=True
        )
        self.client.force_authenticate(user=admin)

        response = self.client.get('/api/contact/')

        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data[0]['id'], self.message.pk)
        self.assertIn('is_read', response.data[0])

    @patch.object(ContactCreateThrottle, 'THROTTLE_RATES', {'contact': '1/day'})
    def test_contact_submission_is_rate_limited(self):
        cache.clear()
        self.assertEqual(
            self.client.post('/api/contact/', self.payload, format='json').status_code,
            status.HTTP_201_CREATED,
        )
        second_payload = {**self.payload, 'email': 'second@example.com'}
        self.assertEqual(
            self.client.post('/api/contact/', second_payload, format='json').status_code,
            status.HTTP_429_TOO_MANY_REQUESTS,
        )
