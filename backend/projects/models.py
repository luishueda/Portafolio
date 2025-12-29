from django.db import models

class Project(models.Model):
    title = models.CharField(max_length=200, verbose_name="Título")
    description = models.TextField(verbose_name="Descripción")
    technologies = models.CharField(max_length=200, verbose_name="Tecnologías (separadas por coma)")
    image = models.ImageField(upload_to='project_images/', verbose_name="Imagen del Proyecto")
    link_github = models.URLField(blank=True, verbose_name="Enlace GitHub")
    link_live = models.URLField(blank=True, verbose_name="Enlace Demo")
    
    # --- CONTROL DE ORDEN ---
    is_main = models.BooleanField(default=False, verbose_name="¿Es Principal?") 
    order = models.IntegerField(default=0, verbose_name="Orden (1, 2, 3...)")
    # ------------------------

    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        # Esto ordena automáticamente por tu número
        ordering = ['order']

    def __str__(self):
        return self.title