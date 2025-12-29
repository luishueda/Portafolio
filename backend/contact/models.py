from django.db import models

class Message(models.Model):
    name = models.CharField(max_length=100, verbose_name="Nombre")
    email = models.EmailField(verbose_name="Email")
    content = models.TextField(verbose_name="Mensaje")
    created_at = models.DateTimeField(auto_now_add=True, verbose_name="Fecha de envío")
    is_read = models.BooleanField(default=False, verbose_name="Leído")

    def __str__(self):
        return f"Mensaje de {self.name}"