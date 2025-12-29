from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static
from django.db.models.signals import post_migrate
from django.dispatch import receiver

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('projects.urls')), # <--- ¡VERIFICA ESTA COMA!
    path('api/', include('contact.urls')),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

    # Solo para crear el usuario una vez en Render
from django.contrib.auth import get_user_model
User = get_user_model()
if not User.objects.filter(username='admin').exists():
    User.objects.create_superuser('admin', 'tuemail@gmail.com', 'tu_password_aqui')