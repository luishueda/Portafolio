# Publicar Luis Hueda.dev sin hosting de pago

Esta guía publica únicamente el portafolio estático. Django, SQLite y Render se conservan localmente como respaldo y no participan en esta publicación.

## 1. Crear el repositorio en GitHub

1. Inicia sesión o crea una cuenta en [GitHub](https://github.com/).
2. Selecciona **New repository**.
3. Usa un nombre como `portafolio-luis-hueda`.
4. Déjalo privado o público según tu preferencia. Para evitar conflictos, no marques la opción de crear README, `.gitignore` ni licencia.
5. Crea el repositorio.

Cuando el repositorio exista, se conectará este proyecto local a él. No se publicarán secretos: el catálogo, las imágenes y el formulario no requieren claves en el frontend.

## 2. Crear el sitio en Netlify

1. Crea una cuenta en [Netlify](https://www.netlify.com/) e inicia sesión con GitHub.
2. Selecciona **Add new site** → **Import an existing project** → **GitHub**.
3. Autoriza GitHub si Netlify lo solicita y elige `portafolio-luis-hueda`.
4. Netlify leerá `netlify.toml`. Comprueba estos valores antes de publicar:

   - Base directory: `frontend`
   - Build command: `npm run build`
   - Publish directory: `dist`

5. Selecciona **Deploy site**.

Al finalizar, Netlify asignará una dirección temporal con `netlify.app`. Esa URL ya puede compartirse y no necesita dominio propio.

## 3. Comprobar el portafolio publicado

En la URL temporal, revisa:

- Inicio, Servicios, Proyectos y una ruta individual como `/proyectos/gestion-botica`.
- Las imágenes del catálogo.
- Los botones de WhatsApp.
- Que los enlaces de demostraciones indiquen que están en preparación hasta que se publiquen en InfinityFree.

El archivo `_redirects` incluido permite abrir directamente las rutas de React Router sin mostrar una página 404.

## 4. Activar recepción de cotizaciones

Después del primer despliegue, Netlify detectará el formulario `cotizacion` durante la compilación.

1. En el panel de Netlify abre **Forms & submissions** y comprueba que aparezca `cotizacion`.
2. Crea una notificación de correo para ese formulario desde **Form notifications**.
3. Envía una cotización ficticia desde la web publicada y confirma que aparece en el panel y llega al correo configurado.

La versión local de Vite muestra el formulario, pero el registro real se prueba en Netlify porque la detección y recepción del formulario sucede durante su despliegue.

## 5. Activar el panel para administrar proyectos

El panel queda listo en `/admin`, pero requiere activarlo una sola vez en Netlify:

1. Ve a **Integrations** o **Identity** en el panel de tu sitio y habilita **Identity**.
2. En preferencias de registro, usa **Invite only**. No habilites registro público.
3. Habilita **Git Gateway**.
4. Invítate con tu correo y acepta el enlace recibido.
5. Abre `https://TU-SITIO.netlify.app/admin`, inicia sesión y edita el catálogo.

Cada cambio del panel actualiza `frontend/public/content/projects.json` en GitHub y activa una nueva compilación de Netlify. No cambies el identificador `id` de un proyecto ya publicado, porque su URL depende de él.

## 6. Publicar demostraciones después

Cuando publiques una demo PHP/MySQL en InfinityFree:

1. Verifica primero su URL pública y HTTPS.
2. En `/admin`, agrega esa URL en **Enlace de demo** del proyecto correspondiente.
3. Guarda y espera a que Netlify termine el nuevo despliegue.
4. Prueba el botón **Probar demo** desde el portafolio publicado.

No se deben guardar URLs `localhost` en el catálogo público.

## 7. Dominio propio más adelante

Cuando compres o recuperes un dominio, en Netlify abre **Domain management** → **Add a domain** y sigue los registros DNS que indique. El portafolio seguirá siendo el mismo; no necesitas contratar hosting web adicional para este frontend.

Para demos PHP/MySQL en InfinityFree, el mismo dominio puede usar subdominios, por ejemplo `demo.tudominio.com`, si configuras el DNS según las instrucciones de cada proveedor.
