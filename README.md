# Lidia Liao · Landing page

Landing profesional para Lidia Liao, fisioterapeuta y readaptadora deportiva. Presenta sus áreas de especialización, experiencia y vías de contacto mediante una interfaz limpia, accesible y adaptable a distintos tamaños de pantalla.

## Tecnologías

- Angular 22
- Componentes standalone
- TypeScript
- CSS nativo
- npm

El proyecto no utiliza routing, SSR, backend ni librerías visuales externas.

## Requisitos

- Node.js 24.15 o posterior dentro de la rama 24
- npm 11 o compatible

Las versiones utilizadas durante el desarrollo han sido Node.js `24.19.0` y npm `11.17.0`.

## Instalación y ejecución

Instala las dependencias:

```bash
npm install
```

Inicia el servidor de desarrollo:

```bash
npm start
```

La aplicación estará disponible en [http://localhost:4200](http://localhost:4200).

## Comandos disponibles

```bash
npm start       # Servidor de desarrollo
npm run build   # Build optimizado para producción
npm run watch   # Build de desarrollo en modo observación
npm test        # Ejecuta las pruebas configuradas por Angular
```

El resultado del build de producción se genera en:

```text
dist/lidia-liao-landing
```

## Estructura principal

```text
src/
├── app/
│   ├── about/       # Sección Sobre mí
│   ├── contact/     # Sección de contacto
│   ├── hero/        # Presentación principal
│   ├── services/    # Especialidades y servicios
│   ├── app.html     # Cabecera, navegación y footer
│   ├── app.css
│   └── app.ts
├── index.html
├── main.ts
└── styles.css       # Variables, reset y estilos compartidos
```

Cada sección principal es un componente standalone con su propio HTML y CSS. El componente raíz se encarga únicamente de componer la página y mostrar la cabecera, la navegación y el footer.

## Contenido provisional

La sección de contacto contiene datos claramente identificados como ejemplos:

- teléfono;
- correo electrónico;
- perfil de Instagram.

Estos valores deben sustituirse por los datos reales antes de publicar la web. El favicon y el símbolo tipográfico `LL` también pueden reemplazarse cuando estén disponibles los recursos definitivos de marca.

## Producción

Antes de publicar:

1. Sustituye los datos de contacto provisionales.
2. Ejecuta `npm run build` y comprueba que termina sin errores ni advertencias.
3. Publica el contenido generado en `dist/lidia-liao-landing` mediante el servicio de alojamiento elegido.
