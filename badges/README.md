# badges/

Insignias oficiales de las 14 certificaciones que integra la Licenciatura en
Ingeniería de Software Full Stack. Se muestran en el carrusel de
`certifications.html`.

## Convención

- **PNG con fondo transparente**, cuadrado, 400 × 400 px, menos de 100 KB.
- Deben leerse sobre fondo oscuro (`#081127`): el carrusel va en sección `dark-bg`.
- Nombres en minúsculas, sin espacios ni acentos, separados por guiones.
  Renombrar un archivo rompe la imagen en el sitio: el `src` del HTML debe coincidir.

## Al añadir o quitar un badge

El carrusel necesita **dos sets idénticos** de slides, porque la animación
`badgeScroll` desplaza `-50%` para lograr el bucle infinito. Si editas la lista,
actualiza ambos sets o el bucle dará un salto visible. El segundo set lleva
`aria-hidden="true"` para que los lectores de pantalla no anuncien las
certificaciones dos veces.

## Excepción

`flutter-certified-application-developer.jpg` es el único JPEG: viene de ATC sin
transparencia y en formato vertical. Convertirlo a PNG lo hacía pesar 6× más sin
ganar nada, así que se conserva en JPEG. Ver detalle en [`../BADGES.md`](../BADGES.md).

## Pendientes

Faltan los 5 badges de la Maestría Ejecutiva (PCEP, Azure DP-900, Azure AI-900,
CertNexus CAIP y CertNexus AIBIZ). Lista completa en [`../BADGES.md`](../BADGES.md).
