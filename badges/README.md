# badges/

Insignias oficiales de las certificaciones que integra la Licenciatura en
Ingeniería de Software Full Stack. Se muestran en el carrusel de
`certifications.html`.

## La tarjeta es siempre blanca

`.badge-img` fija `background: #ffffff` **a propósito**. Los emisores entregan
los badges en formatos impredecibles: unos con fondo transparente, otros en
JPEG con fondo blanco y texto oscuro (Swift, ATC). Con la tarjeta blanca
cualquiera de los dos encaja sin tratamiento especial.

No añadas clases ni variantes por badge: si uno se ve mal, la solución es
cambiar el archivo, no el CSS.

## Convención

- PNG o JPEG, tal como lo entregue el emisor. Fondo transparente o blanco, da igual.
- ~400 px por lado, menos de 100 KB. Se muestran a 110 × 110 px.
- Deben leerse **sobre blanco**.
- Nombres en minúsculas, sin espacios ni acentos, separados por guiones.
  Renombrar un archivo rompe la imagen: el `src` del HTML debe coincidir.

## Al añadir o quitar un badge

El carrusel necesita **dos sets idénticos** de slides, porque la animación
`badgeScroll` desplaza `-50%` para lograr el bucle infinito. Si editas la lista,
actualiza ambos sets o el bucle dará un salto visible. El segundo set lleva
`aria-hidden="true"` para que los lectores de pantalla no anuncien las
certificaciones dos veces.

## Contenido

19 badges, todos aplicados:

- **14 de la Licenciatura** → carrusel animado en `certifications.html`
- **5 de la Maestría** (`pcep`, `azure-*`, `certnexus-*`) → rejilla estática en
  `maestria-ejecutiva.html`. Con tan pocos no se usa carrusel: caben todos a la vista.

Inventario completo en [`../BADGES.md`](../BADGES.md).
