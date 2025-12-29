from django.contrib import admin
from .models import Message

@admin.register(Message)
class MessageAdmin(admin.ModelAdmin):
    # Esto define qué columnas verás en la lista
    list_display = ('name', 'email', 'created_at')
    # Permite ordenar por fecha de llegada
    ordering = ('-created_at',)
    # Solo lectura para que no edites los mensajes de los clientes por error
    readonly_fields = ('name', 'email', 'content', 'created_at')