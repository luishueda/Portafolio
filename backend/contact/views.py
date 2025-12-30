from rest_framework import viewsets
from .models import Message
from .serializers import MessageSerializer
from django.core.mail import send_mail
from django.conf import settings

class ContactViewSet(viewsets.ModelViewSet):
    queryset = Message.objects.all().order_by('-created_at')
    serializer_class = MessageSerializer
    authentication_classes = [] 
    permission_classes = []

    def perform_create(self, serializer):
        # Primero guardamos en la base de datos
        instance = serializer.save()

        # Luego enviamos el correo
        try:
           # Ejemplo de cómo debería estar en tu views.py
        
            send_mail(
                subject=f"Nuevo mensaje de {data['name']}",
                message=data['message'],
                from_email=settings.EMAIL_HOST_USER,
                recipient_list=[settings.EMAIL_HOST_USER],
                fail_silently=False, # Ponlo en False para ver errores en los logs de Render
            )
            print("✅ Correo enviado con éxito")
        except Exception as e:
            print(f"❌ Error al enviar correo: {e}")