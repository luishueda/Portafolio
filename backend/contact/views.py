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

    # OJO: Nota el espacio a la izquierda (tabulación). 
    # Debe estar DENTRO de la clase, alineado con 'queryset'.
    def perform_create(self, serializer):
        # 1. Guardamos el mensaje en la base de datos
        instance = serializer.save() 
        
        # 2. Enviamos el correo usando los datos de la instancia guardada
        try:
            send_mail(
                subject=f"Nuevo mensaje de: {instance.name}", 
                message=f"Correo: {instance.email}\n\nMensaje:\n{instance.content}",
                from_email=settings.EMAIL_HOST_USER,
                recipient_list=[settings.EMAIL_HOST_USER], # Se envía a ti mismo
                fail_silently=False,
            )
        except Exception as e:
            print(f"❌ Error al enviar correo: {e}")
            #terminado