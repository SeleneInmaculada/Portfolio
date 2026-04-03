# Mi Portafolio Web

Este es mi sitio web de portafolio personal, creado con HTML, CSS y JavaScript puro. Está optimizado para ser desplegado en GitHub Pages.

## 🚀 Despliegue en GitHub Pages

### Paso 1: Crear un repositorio en GitHub
1. Ve a [GitHub.com](https://github.com) y crea una nueva cuenta si no tienes una.
2. Haz clic en "New repository".
3. Nombra el repositorio con tu nombre de usuario de GitHub seguido de `.github.io` (ejemplo: `tuusuario.github.io`).
4. Marca la opción "Add a README file".
5. Haz clic en "Create repository".

### Paso 2: Subir los archivos
1. Clona el repositorio localmente:
   ```bash
   git clone https://github.com/tuusuario/tuusuario.github.io.git
   ```

2. Copia todos los archivos de este proyecto al directorio del repositorio clonado.

3. Agrega, confirma y sube los cambios:
   ```bash
   git add .
   git commit -m "Initial commit - Portfolio website"
   git push origin main
   ```

### Paso 3: Activar GitHub Pages
1. Ve a la configuración de tu repositorio (Settings).
2. Desplázate hacia abajo hasta la sección "Pages".
3. En "Source", selecciona "Deploy from a branch".
4. En "Branch", selecciona "main" y "/ (root)".
5. Haz clic en "Save".

### Paso 4: Acceder a tu sitio
Tu sitio estará disponible en `https://tuusuario.github.io` después de unos minutos.

## 📁 Estructura del Proyecto

```
portfolio/
├── index.html          # Página principal
├── css/
│   └── styles.css      # Estilos CSS
├── js/
│   └── script.js       # JavaScript para interactividad
├── images/             # Directorio para imágenes
└── README.md           # Este archivo
```

## 🎨 Personalización

### Cambiar la información personal
1. Abre `index.html` en un editor de texto.
2. Busca las secciones y actualiza:
   - Nombre en el header y hero section
   - Descripción en la sección "Sobre Mí"
   - Estadísticas (años de experiencia, proyectos, etc.)
   - Información de contacto
   - Enlaces a redes sociales

### Agregar proyectos
En la sección "proyectos", duplica una de las tarjetas `.project-card` y actualiza:
- Imagen del proyecto
- Título y descripción
- Tecnologías utilizadas
- Enlaces a GitHub y demo

### Cambiar colores
En `css/styles.css`, modifica las variables CSS en `:root`:
```css
:root {
    --primary-color: #tu-color;
    --secondary-color: #tu-color;
    --accent-color: #tu-color;
}
```

### Agregar tu foto
1. Coloca tu foto en la carpeta `images/` con el nombre `profile.jpg`.
2. Asegúrate de que tenga un tamaño razonable (máximo 500KB).

## 📱 Características

- ✅ Diseño responsivo (móvil y desktop)
- ✅ Navegación suave
- ✅ Animaciones de scroll
- ✅ Menú hamburguesa para móviles
- ✅ Formulario de contacto
- ✅ Optimizado para SEO
- ✅ Compatible con todos los navegadores modernos

## 🛠️ Tecnologías Utilizadas

- HTML5
- CSS3 (con CSS Grid y Flexbox)
- JavaScript (Vanilla)
- Google Fonts
- Font Awesome Icons

## 📞 Contacto

Si tienes alguna pregunta sobre este portafolio, no dudes en contactarme a través del formulario en el sitio web.

---

¡Gracias por visitar mi portafolio!