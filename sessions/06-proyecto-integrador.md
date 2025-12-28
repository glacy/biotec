---
title: "Proyecto integrador"
subtitle: "Síntesis práctica y producción de artefactos reproducibles"
subject: "Sesión 6"
session:
  number: 6
  type: assessment
  duration: "1.5 horas"
learning_objectives:
  - "Integrar frontmatter, configuración global y estructura de tabla de contenidos en un sistema coherente"
  - "Producir un artefacto académico reproducible y semánticamente correcto"
keywords:
  - arquitectura
  - metadatos
  - _toc.yml
  - diseño
  - validación
---

Esta sesión no introduce nuevos conceptos técnicos.

Su propósito es integrar, aplicar y evaluar todo lo trabajado durante el curso.

El proyecto integrador funciona como:

- evidencia de aprendizaje,
- instrumento de evaluación,
- modelo reutilizable para contextos reales.

Aquí se evalúa pensamiento estructural, no memorización.

### Enunciado del proyecto

#### Objetivo general

Diseñar la **arquitectura documental** de un mini-curso o módulo académico que demuestre:

- una estructura pedagógica sólida declarada en `_toc.yml`;
- coherencia semántica en los metadatos (frontmatter);
- un sistema de configuración global (`_config.yml`) alineado con el contenido.

> **Nota:** No se requiere la compilación final del sitio web (HTML). El entregable es la estructura fuente válida y lógicamente consistente.

#### Alcance mínimo

El proyecto debe incluir una estructura de directorios funcional con:

- **Archivo global `_config.yml`**: Que defina los metadatos académicos del curso (título, autor, licencia).
- **Archivo de estructura `_toc.yml`**: Que refleje una intención pedagógica clara (no solo una lista de archivos).
- **Contenido (mínimo 3 documentos)**:
  - Archivos `.md` o `.ipynb`.
  - Cada uno con frontmatter completo y herencia lógica (si aplica).
  - No se evalúa la extensión del texto, sino la corrección de los metadatos.

### Criterios de diseño esperados

#### 1. Semántica documental (frontmatter)

Se espera que el sistema de metadatos:

- **Validación**: Sea sintácticamente correcto (YAML válido).
- **Consistencia**: Use los mismos nombres de variables para conceptos iguales (ej. no mezclar `author` con `autor` arbitrariamente).
- **Vocabularios controlados**: Si define categorías (ej. `type: lecture`), estas deben respetarse en todos los archivos.

#### 2. Coherencia pedagógica (`_toc.yml`)

La tabla de contenidos debe mostrar una narrativa:

- ¿El orden de los archivos tiene sentido didáctico?
- ¿Los títulos y secciones en el `toc` reflejan una progresión?
- Uso correcto de `parts`, `chapters` y `sections` para agrupar contenido.

#### 3. Configuración global (`_config.yml`)

- Definición correcta de metadatos a nivel de libro.
- Ausencia de configuración innecesaria o "basura" generada automáticamente.

### Validación del sistema

El estudiante debe entregar un sistema que, teóricamente, **podría** ser compilado sin errores, pero la evaluación se centrará en:

- **Auditoría estructural**: Revisión de que los archivos referenciados en `_toc.yml` existen.
- **Auditoría semántica**: Revisión de que los metadatos permiten responder preguntas sobre el curso (ej. "¿Cuántas horas dura el módulo?", "¿Cuáles son los objetivos de aprendizaje?").

### Entregables

1. **Carpeta del proyecto**: Conteniendo todos los archivos fuente (`.yml`, `.md`).
2. **Documento de diseño (racional)**:
   - Un breve archivo (`README.md` o similar) que explique las decisiones tomadas.
   - Justificación de por qué se eligió esa estructura en el `_toc`.
   - Explicación del sistema de metadatos elegido.

### Rúbrica de evaluación (resumen)

| Criterio | Peso | Descripción |
|----------|------|-------------|
| **Integridad estructural** | 40% | `_toc.yml` válido, archivos existentes, `_config.yml` correcto. |
| **Diseño semántico** | 40% | Frontmatter consistente, uso de vocabularios controlados, sin redundancia. |
| **Racionalidad** | 20% | Justificación clara de las decisiones de diseño en el documento explicativo. |

### Actividad en sesión

Durante la sesión se realizará una **auditoría cruzada**:

1. Intercambio de repositorios/carpetas entre pares.
2. Análisis de la estructura ajena: ¿Se entiende el curso solo viendo el `_toc.yml` y los metadatos?
3. Retroalimentación sobre la claridad de la "arquitectura" propuesta.

### Proyección

Este ejercicio entrena la capacidad de pensar en **documentación como código**: estructuras mantenibles, legibles por máquina y semánticamente ricas, independientemente de la herramienta final de visualización.

