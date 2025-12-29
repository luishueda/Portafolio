import os
from django.core.wsgi import get_wsgi_application

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'core.settings')

application = get_wsgi_application()

# --- SCRIPT DE RESCATE (Ejecución al inicio) ---
try:
    from django.contrib.auth import get_user_model
    User = get_user_model()
    # Usamos un nombre muy simple para evitar errores
    if not User.objects.filter(username='master').exists():
        # Crea el usuario 'master' con contraseña 'Pass1234'
        User.objects.create_superuser('master', 'admin@test.com', 'Pass1234')
        print(">>> ¡USUARIO 'master' CREADO CON ÉXITO! <<<")
    else:
        print(">>> El usuario 'master' ya existe <<<")
except Exception as e:
    print(f">>> ERROR CREANDO USUARIO: {e}")