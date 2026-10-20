# Concurso editable

Programa de concurso de preguntas y respuestas con tablero, dos equipos, errores, pulsadores por teclado y un conductor virtual que lee en voz alta las preguntas y las respuestas (con subtítulos en pantalla).

Funciona directamente en el navegador, sin instalar nada.

## Cómo usarlo

- **En línea:** abre la página publicada con GitHub Pages (el enlace está en la sección *About* del repositorio).
- **En tu computadora:** descarga este repositorio y abre `index.html` con Edge o Chrome.

## Controles

| Tecla | Acción |
|---|---|
| Espacio | Revelar la siguiente respuesta |
| 1–8 | Revelar una respuesta específica |
| X | Marcar error |
| L | Leer la pregunta en voz alta |
| → | Siguiente pregunta |
| Q / P | Pulsadores de los equipos 1 y 2 (configurables) |
| R | Habilitar otra vez los pulsadores |
| F | Pantalla completa |
| M | Menú de administración |
| Esc | Cerrar el menú |

## Menú de administración (tecla M)

- Crear, editar, duplicar y eliminar preguntas (hasta 8 respuestas, con aviso si hay puntos inválidos).
- Elegir la voz en español, su velocidad, o apagarla.
- Cambiar el título y el mensaje de la marquesina.
- Asignar la tecla de cada pulsador.

Los cambios se guardan en el navegador de cada equipo.

## Voz

La voz usa las voces en español que tenga instaladas tu sistema o navegador. En Windows, Microsoft Edge suele ofrecer las más naturales.

## Hoja de ruta

- [x] Tablero, equipos, errores y pulsadores
- [x] Editor de preguntas y conductor virtual con voz
- [ ] Importar y exportar preguntas (JSON/CSV)
- [ ] Sonidos personalizables (WAV/MP3)
- [ ] Temas visuales y logotipo propio
- [ ] Versión de escritorio para Windows (Python + PySide6) con instalador

## Identidad propia

Usa nombre, logotipo, sonidos e imágenes propios o con licencia adecuada. No copies materiales protegidos de programas de televisión existentes.

## Licencia

MIT. Consulta el archivo `LICENSE`.

## Ejecutable para Windows (7, 10 y 11)

El juego se empaqueta con Electron 22, la última versión compatible con Windows 7. El flujo de GitHub Actions (`.github/workflows/build.yml`) genera:

- `Concurso Editable-1.0.0-x64.exe` y `-ia32.exe`: instaladores con acceso directo y desinstalador.
- Versiones *portable* (`.exe` que se ejecuta sin instalar), también en 64 y 32 bits.

La versión de 32 bits (`ia32`) funciona en cualquier Windows. Windows 7 necesita el Service Pack 1.

### Cómo generarlo

1. Entra a la pestaña **Actions** del repositorio.
2. Elige **Construir ejecutable de Windows** y pulsa **Run workflow**.
3. Cuando termine (unos minutos), descarga los `.exe` de la sección **Artifacts**.

Para publicarlos como versión descargable, crea una etiqueta `v1.0.0` y los `.exe` aparecerán en **Releases**.

### Probar en tu computadora (opcional)

```
npm install
npm start
```
