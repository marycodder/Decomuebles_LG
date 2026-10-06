# 🚀 Guía de Despliegue en GitHub y Netlify (DecoMuebles LG)

¡Tu página web ya está lista, construida con React + Vite y optimizada para producción! 

Sigue estos sencillos pasos para subirla a GitHub y publicarla en Netlify con tu dominio propio.

---

## 1. ⚙️ Personaliza tus datos y número de WhatsApp

Antes de subir la web, abre el archivo:
📁 `src/config/siteConfig.js`

Allí puedes cambiar:
- `whatsappNumber`: Tu número con código de país (ejemplo Chile: `"56912345678"`).
- `whatsappDisplay`: Tu número legible (ejemplo: `"+56 9 1234 5678"`).
- `email`: Tu correo electrónico.
- `instagram`: Tu cuenta de Instagram.
- `location`: Tu ciudad o comuna.

---

## 2. 📸 Cómo agregar tus fotos reales

1. Guarda tus fotos en la carpeta:
   📁 `public/fotos/`  
   *(Por ejemplo: `cocina-1.jpg`, `closet-1.jpg`, `vanitorio-1.jpg`)*

2. Abre el archivo:
   📁 `src/data/trabajos.js`  
   En la propiedad `imagen`, coloca la ruta correspondiente:
   ```javascript
   imagen: "/fotos/cocina-1.jpg"
   ```
3. ¡Listo! Puedes agregar o quitar todos los trabajos que quieras en ese archivo.

---

## 3. 🐙 Subir el proyecto a GitHub

Abre una terminal (PowerShell o CMD) en la carpeta del proyecto (`c:\Users\mary_\Desktop\decolmuebleslg`) y ejecuta estos comandos:

```bash
# 1. Inicializar git
git init

# 2. Agregar todos los archivos
git add .

# 3. Hacer el primer commit
git commit -m "Mi primer sitio web DecoMuebles LG"

# 4. Cambiar rama principal a 'main'
git branch -M main
```

Ahora en GitHub:
1. Ve a [github.com](https://github.com) y crea un nuevo repositorio (por ejemplo: `decolmuebleslg`).
2. Déjalo **Público** o **Privado** (ambos funcionan en Netlify). No agregues README ni .gitignore porque ya los tenemos.
3. Copia los comandos que te da GitHub y ejecútalos en tu terminal:

```bash
git remote add origin https://github.com/TU_USUARIO/decolmuebleslg.git
git push -u origin main
```

---

## 4. 🌐 Conectar y publicar en Netlify (¡Gratis en 2 minutos!)

1. Ve a [netlify.com](https://www.netlify.com) e inicia sesión con tu cuenta de GitHub.
2. Haz clic en el botón verde **"Add new site"** ➜ **"Import an existing project"**.
3. Selecciona **GitHub** y autoriza el acceso a tu repositorio `decolmuebleslg`.
4. Netlify detectará la configuración automáticamente gracias al archivo `netlify.toml` que ya dejamos preparado:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
5. Haz clic en **"Deploy decolmuebleslg"**.
6. En menos de 1 minuto tu página estará activa en internet con una dirección como `https://decolmuebleslg.netlify.app`.

---

## 5. 🏷️ Conectar tu dominio propio ya comprado

Como ya tienes tu dominio comprado (ej: `tudominio.cl` o `tudominio.com`):

1. En el panel de control de tu sitio en Netlify, ve a **"Domain management"** (o **"Site configuration" > "Domain management"**).
2. Haz clic en **"Add a custom domain"** y escribe tu dominio (ej: `decolmuebleslg.cl`).
3. Netlify te dará 2 opciones recomendadas:
   - **Opción A (Recomendada - DNS Netlify):** Cambiar los servidores DNS (Nameservers) en tu proveedor donde compraste el dominio (ej. Nic.cl, GoDaddy, Hostinger) por los 4 que te indica Netlify:
     - `dns1.p0X.nsone.net`
     - `dns2.p0X.nsone.net`
     - `dns3.p0X.nsone.net`
     - `dns4.p0X.nsone.net`
   - **Opción B (Registro CNAME / A):** En el panel de tu dominio, crear un registro `CNAME` para `www` apuntando a tu subdominio de Netlify (ej: `decolmuebleslg.netlify.app`), y un registro `A` para la raíz apuntando a la IP que te indica Netlify.
4. Netlify activará automáticamente y gratis el **Certificado SSL (HTTPS / candado verde)**.
5. ¡Felicidades! Tu página web ya estará visible en todo el mundo y lista para recibir clientes en Google y WhatsApp.
