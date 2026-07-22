# Badges de certificación

Estado de las insignias de certificación del sitio.

## ✅ Licenciatura — 14 certificaciones (aplicadas)

Todas están en `badges/` y se muestran en el carrusel de `certifications.html`,
en los chips de `index.html` y en la tarjeta de `programs.html`.

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

### Nota sobre el badge de Flutter

La insignia de ATC (Advanced Training Consultants) es **genérica para todos sus
certificados de Android**: el título específico solo aparece en el documento
oficial. Por eso la imagen muestra "Android" y no "Flutter".

Es el único archivo que **no tiene fondo transparente** (viene en JPEG con fondo
blanco y proporción vertical 383×522). Sobre el fondo oscuro del carrusel se ve
como un bloque blanco, distinto al resto. Si en algún momento ATC entrega una
versión PNG con transparencia, se sustituye y queda uniforme.

## ⏳ Maestría Ejecutiva — 5 certificaciones (badges pendientes)

`maestria-ejecutiva.html` las nombra en la sección "Certificaciones Industriales
Integradas", pero **todavía no tienen imagen**. No se muestran badges de la
Maestría en ninguna parte hasta conseguirlos.

| Certificación | Emisor |
|---|---|
| PCEP – Certified Entry-Level Python Programmer | Python Institute |
| Microsoft Certified: Azure Data Fundamentals (DP-900) | Microsoft |
| Microsoft Certified: Azure AI Fundamentals (AI-900) | Microsoft |
| CertNexus CAIP – Certified Artificial Intelligence Practitioner | CertNexus |
| CertNexus AIBIZ – AI for Business Professionals | CertNexus |

### Especificaciones para los que faltan

| Requisito | Valor |
|---|---|
| Formato | PNG con **fondo transparente** |
| Tamaño | 400 × 400 px (se muestran a 110 × 110) |
| Proporción | Cuadrada |
| Peso | Menos de 100 KB |
| Contraste | Deben leerse sobre fondo oscuro (`#081127`) |

Déjalos en la raíz del proyecto con el nombre que traigan y yo los organizo.

## Convención de nombres

Minúsculas, sin espacios ni acentos, separado por guiones. Los espacios y el
guion largo (`–`) obligan a codificar la URL y rompen enlaces en algunos
servidores, por eso se renombraron los archivos originales.

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
