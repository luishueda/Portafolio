import os
from django.core.wsgi import get_wsgi_application
from django.core.management import call_command

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'core.settings')

application = get_wsgi_application()

# --- SCRIPT DE SUPERVIVENCIA PARA RENDER (SQLite) ---
# Este bloque se ejecuta cada vez que el servidor arranca.
try:
    print(">>> VERIFICANDO ESTADO DE LA BASE DE DATOS...")
    
    # 1. Crear las tablas de nuevo (si se borraron)
    call_command('migrate')
    
    # 2. Recrear el Superusuario (si se borró)
    from django.contrib.auth import get_user_model
    User = get_user_model()
    
    # Cambia 'admin_render' y 'Luis2025!' por lo que quieras usar siempre
    if not User.objects.filter(username='admin_render').exists():
        print(">>> CREANDO SUPERUSUARIO DE EMERGENCIA...")
        User.objects.create_superuser('admin_render', 'huedaluis72@gmail.com', 'Luis2025!')
        print(">>> ¡LISTO! Usuario 'admin_render' restaurado.")
    else:
        print(">>> El usuario ya existe. Todo correcto.")
        
except Exception as e:
    print(f">>> ERROR EN SCRIPT DE SUPERVIVENCIA: {e}")