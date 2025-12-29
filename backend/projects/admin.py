from django.contrib import admin
from .models import Project

@admin.register(Project)
class ProjectAdmin(admin.ModelAdmin):
    # 1. Columnas que se ven (El orden va primero)
    list_display = ('order', 'title', 'is_main', 'technologies')
    
    # 2. Columnas que puedes editar rápido (como un Excel)
    list_editable = ('order', 'is_main')
    
    # 3. ¡ESTA ES LA SOLUCIÓN! 
    # Le decimos que el click para entrar a editar sea en el Título, no en el Orden
    list_display_links = ('title',)

    search_fields = ('title', 'technologies')
    list_filter = ('is_main',)
    ordering = ('order',)