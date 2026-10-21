from rest_framework import viewsets
from rest_framework.permissions import AllowAny, IsAdminUser
from rest_framework.throttling import AnonRateThrottle
from .models import Message
from .serializers import AdminMessageSerializer, PublicMessageSerializer
from django.core.mail import send_mail
from django.conf import settings


class ContactCreateThrottle(AnonRateThrottle):
    scope = 'contact'


class ContactViewSet(viewsets.ModelViewSet):
    queryset = Message.objects.all().order_by('-created_at')

    def get_permissions(self):
        """Only public creation is allowed; administration requires staff access."""
        if self.action == 'create':
            return [AllowAny()]
        return [IsAdminUser()]

    def get_throttles(self):
        # Limit anonymous contact submissions without restricting the admin inbox.
        if self.action == 'create':
            return [ContactCreateThrottle()]
        return []

    def get_serializer_class(self):
        if self.action == 'create':
            return PublicMessageSerializer
        return AdminMessageSerializer

    def perform_create(self, serializer):
        instance = serializer.save()

        try:
            send_mail(
                subject=f"Nuevo mensaje de: {instance.name}",
                message=f"Correo: {instance.email}\n\nMensaje:\n{instance.content}",
                from_email=settings.EMAIL_HOST_USER,
                recipient_list=[settings.EMAIL_HOST_USER],
                fail_silently=False,
            )
        except Exception as e:
            print(f"❌ Error al enviar correo: {e}")
