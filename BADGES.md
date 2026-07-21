# Badges de certificación pendientes

Lista de los archivos de imagen que faltan para completar el sitio.

## Cómo entregarlos

1. Consigue los 13 archivos de la tabla de abajo.
2. Déjalos en la **raíz del proyecto** (junto a `index.html`).
3. Avísame y yo los muevo a `badges/`, verifico nombres, los optimizo y confirmo que rendericen bien.

**Importante:** los nombres de archivo deben ser **exactamente** los de la columna "Archivo". El HTML de `certifications.html` ya los referencia con esos nombres; si difieren, la imagen seguirá rota. Si te llegan con otro nombre, no los renombres tú — pásamelos como estén y yo los ajusto.

## Especificaciones

| Requisito | Valor |
|---|---|
| Formato | PNG con **fondo transparente** |
| Tamaño mínimo | 256 × 256 px (ideal 400 × 400) |
| Proporción | Cuadrada |
| Peso | Menos de 50 KB cada uno |
| Contraste | Deben **leerse sobre fondo oscuro** (`#081127`) |

Se muestran a 110 × 110 px con `object-fit: contain`, así que el exceso de resolución solo sirve para pantallas retina. Si solo consigues SVG, también sirve — dímelo y adapto el marcado.

## Los 13 badges

| # | Archivo | Certificación oficial | Emisor |
|---|---|---|---|
| 1 | `aws-cloud-practitioner.png` | AWS Certified Cloud Practitioner (CLF-C02) | AWS / Credly |
| 2 | `aws-solutions-architect.png` | AWS Certified Solutions Architect – Associate (SAA-C03) | AWS / Credly |
| 3 | `google-associate-cloud-engineer.png` | Google Cloud Associate Cloud Engineer | Google Cloud / Credly |
| 4 | `azure-fundamentals.png` | Microsoft Certified: Azure Fundamentals (AZ-900) | Microsoft Learn |
| 5 | `azure-ai-fundamentals.png` | Microsoft Certified: Azure AI Fundamentals (AI-900) | Microsoft Learn |
| 6 | `azure-data-fundamentals.png` | Microsoft Certified: Azure Data Fundamentals (DP-900) | Microsoft Learn |
| 7 | `scrum-psm1.png` | Professional Scrum Master I (PSM I) | Scrum.org |
| 8 | `pcep.png` | PCEP – Certified Entry-Level Python Programmer | Python Institute |
| 9 | `js-institute.png` | ⚠️ **Definir cuál** (ver nota) | JS Institute |
| 10 | `certnexus-caip.png` | CertNexus Certified Artificial Intelligence Practitioner (CAIP) | CertNexus |
| 11 | `certnexus-aibiz.png` | CertNexus AIBIZ – AI for Business Professionals | CertNexus |
| 12 | `comptia-security.png` | CompTIA Security+ (SY0-701) | CompTIA / Credly |
| 13 | `github-foundations.png` | GitHub Foundations | GitHub / Credly |

### Nota sobre el #9

La etiqueta actual dice solo "JS Institute", que es el **emisor**, no una certificación. El JS Institute emite certificaciones concretas (JSE – JavaScript Essentials, JSA – JavaScript Associate). Hay que decidir cuál se ofrece realmente y corregir la etiqueta del sitio, no solo conseguir la imagen.

## Antes de publicarlos: revisar permisos de uso

Los badges de certificación son marcas registradas y cada emisor tiene sus propias reglas de uso. En general se emiten a la **persona** que aprueba el examen, y que una institución los muestre para promocionar sus programas suele requerir ser socio de formación autorizado (AWS Academy, Microsoft Learn for Educators, CompTIA Academy, etc.).

No es un impedimento — solo conviene confirmar el estatus con cada emisor antes de publicarlos, sobre todo porque el sitio afirma que la preparación y los vouchers están incluidos en la colegiatura.

---

## Aparte: logos de empresas (decisión pendiente)

Esto es un tema distinto y **no requiere badges**. En `careers.html`, la sección "Nuestros Egresados Trabajan En" usa `assets/logo-aws.png`, `logo-google.png`, `logo-microsoft.png`, `logo-oracle.png` y `logo-cisco.png`.

Esos archivos **no son logotipos reales**: son íconos genéricos blancos, y `logo-oracle.png` y `logo-cisco.png` son el mismo archivo byte a byte. Ya se retiraron del inicio.

Antes de conseguir logotipos oficiales hay que decidir el fondo del asunto: afirmar que los egresados trabajan en esas empresas debe ser verificable. Tres caminos:

1. **Confirmar la afirmación** y usar logotipos oficiales (requiere permiso de cada empresa para usar su marca).
2. **Cambiar el encabezado** por algo verificable, p. ej. "Tecnologías que dominamos" — ahí los logos son descriptivos y el uso es mucho más defendible.
3. **Quitar la sección** hasta tener egresados y datos que la respalden.

La opción 2 es la más segura mientras el instituto arranca.
