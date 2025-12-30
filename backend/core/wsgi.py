import os
from django.core.wsgi import get_wsgi_application
from django.core.management import call_command

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'core.settings')

application = get_wsgi_application()

# SCRIPT DE RESCATE (Ejecuta comandos al arrancar en Render)
try:
    print("Ejecutando migraciones...")
    call_command('migrate')
    
    from django.contrib.auth import get_user_model
    User = get_user_model()
    # Cambia 'admin_final' y 'Luis2025!' por lo que tú quieras
    if not User.objects.filter(username='admin_final').exists():
        User.objects.create_superuser('admin_final', 'huedaluis72@gmail.com', 'Luis2025!')
        print("Superusuario 'admin_final' creado con éxito")
except Exception as e:
    print(f"Error en script de rescate: {e}")