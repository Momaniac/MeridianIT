# Badges de certificación

Estado de las insignias del sitio. **Los 19 badges están aplicados**; no queda ninguno pendiente.

## Licenciatura — 14 certificaciones

Carrusel animado en `certifications.html`. También aparecen como chips de texto
en `index.html` y en la tarjeta de `programs.html`.

| # | Archivo | Certificación |
|---|---|---|
| 1 | `aws-certified-cloud-practitioner.png` | AWS Certified Cloud Practitioner |
| 2 | `it-specialist-python.png` | IT Specialist – Python |
| 3 | `java-certified-foundations-associate.png` | Java Certified Foundations Associate |
| 4 | `angular-developer.png` | Angular Developer |
| 5 | `app-development-swift-associate.png` | App Development with Swift Associate |
| 6 | `flutter-certified-application-developer.jpg` | Flutter Certified Application Developer |
| 7 | `ai-professional-certificate.png` | Artificial Intelligence Professional Certificate |
| 8 | `it-specialist-computational-thinking.png` | IT Specialist – Computational Thinking |
| 9 | `scrum-foundation-professional.png` | Scrum Foundation Professional Certification |
| 10 | `scrum-master-professional.png` | Scrum Master Professional Certificate |
| 11 | `user-stories-foundation-certificate.png` | User Stories Foundation Certificate |
| 12 | `devops-foundation-professional.png` | DevOps Foundation Professional Certification |
| 13 | `project-management-ready.png` | Project Management Ready |
| 14 | `remote-work-professional-certificate.png` | Remote Work Professional Certificate |

Son 14 porque Scrum aporta dos niveles: Foundation y Master.

La insignia de ATC (Advanced Training Consultants) es **genérica para todos sus
certificados de Android**: el título específico solo aparece en el documento
oficial. Por eso la imagen del badge de Flutter muestra "Android".

## Maestría Ejecutiva — 5 certificaciones

Rejilla estática en `maestria-ejecutiva.html`, después de "El Programa en Cifras".
No es carrusel: con 5 badges caben todos a la vista. El detalle formal (emisores,
alcance de módulos) sigue en la sección 9 de la Propuesta Integral.

| # | Archivo | Certificación | Emisor |
|---|---|---|---|
| 1 | `pcep.png` | PCEP – Certified Entry-Level Python Programmer | OpenEDG Python Institute |
| 2 | `azure-data-fundamentals-dp900.png` | Azure Data Fundamentals (DP-900) | Microsoft |
| 3 | `azure-ai-fundamentals-ai900.png` | Azure AI Fundamentals (AI-900) | Microsoft |
| 4 | `certnexus-caip.png` | Certified Artificial Intelligence Practitioner | CertNexus |
| 5 | `certnexus-aibiz.png` | AIBIZ – AI for Business Professionals | CertNexus |

## Para añadir badges nuevos

**La tarjeta es siempre blanca**, así que sirve cualquier badge oficial tal como
lo entregue el emisor. No hay que editarlos ni pedirlos en un formato concreto.

| Requisito | Valor |
|---|---|
| Formato | PNG o JPEG, como venga del emisor |
| Fondo | Transparente **o** blanco — los dos funcionan |
| Tamaño | ~400 px por lado (se muestran a 110 × 110) |
| Peso | Menos de 100 KB |
| Contraste | Deben leerse **sobre blanco** |

Lo único que hay que evitar es un badge blanco sobre transparente y sin bordes,
porque desaparecería sobre la tarjeta. Es un caso raro: los emisores entregan
badges a color.

Déjalos en la raíz del proyecto con el nombre que traigan y se organizan desde ahí.
Los nombres finales van en minúsculas, sin espacios ni acentos: los espacios y el
guion largo (`–`) obligan a codificar la URL y rompen enlaces en algunos servidores.

## Antes de publicidad impresa o campañas: revisar permisos de uso

Los badges son marcas registradas de cada emisor y suelen otorgarse a la
**persona** que aprueba el examen. Que una institución los use para promocionar
sus programas normalmente requiere ser socio de formación autorizado. Conviene
confirmarlo con cada emisor, sobre todo porque el sitio afirma que la
preparación y los vouchers están incluidos en la colegiatura.

---

## Pendiente aparte: logos de empresas en `careers.html`

La sección "Nuestros Egresados Trabajan En" sigue usando `assets/logo-aws.png`,
`logo-google.png`, `logo-microsoft.png`, `logo-oracle.png` y `logo-cisco.png`.

Esos archivos **no son logotipos reales**: son íconos genéricos blancos, y
`logo-oracle.png` y `logo-cisco.png` son el mismo archivo byte a byte. Ya se
retiraron del inicio.

Antes de conseguir logotipos oficiales hay que decidir el fondo del asunto:
afirmar que los egresados trabajan en esas empresas debe ser verificable.

1. **Confirmar la afirmación** y usar logotipos oficiales (requiere permiso de cada empresa).
2. **Cambiar el encabezado** por algo verificable, p. ej. "Tecnologías que dominamos".
3. **Quitar la sección** hasta tener egresados y datos que la respalden.
