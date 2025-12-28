---
title: "Estructura pedagógica con _toc.yml"
subject: "Sesión 5"
session:
  number: 5
  type: lecture
  duration: "1.5 horas"
learning_objectives:
  - "Comprender el rol de _toc.yml como estructura pedagógica explícita."
  - "Declarar estructuras curriculares mediante `_toc.yml`"
  - "Diseñar progresiones didácticas navegables"
keywords:
  - estructura
  - pedagogía
  - navegación
  - _toc.yml
---


En sistemas tradicionales, la tabla de contenidos es principalmente decorativa.
En Jupyter Book, `_toc.yml` cumple una función mucho más profunda:

Define la estructura cognitiva y pedagógica del curso.

No es solo un índice, sino una declaración explícita de secuencia didáctica, jerarquía conceptual y progresión evaluable.

## ¿Qué es realmente `_toc.yml`?

### Rol técnico

Desde el punto de vista técnico, `_toc.yml`:

- indica qué archivos se construyen;
- define el orden de navegación;
- establece jerarquías entre documentos.

Pero esta visión es insuficiente para contextos educativos.

### Rol pedagógico

Desde el punto de vista académico, `_toc.yml`:

- hace explícito el diseño curricular;
- comunica la progresión de dificultad;
- refleja decisiones didácticas intencionales.

Por ello, debe diseñarse con el mismo cuidado que un programa de curso.

## Estructura jerárquica y aprendizaje


Un curso típico puede estructurarse en:

- portada / introducción general;
- bloques temáticos;
- sesiones individuales;
- actividades o evaluaciones.

Cada nivel responde a una función cognitiva distinta:

- orientación,
- construcción conceptual,
- práctica,
- evaluación.

### Jerarquía como narrativa

El orden de `_toc.yml` cuenta una historia:

- qué se aprende primero;
- qué depende de qué;
- dónde se espera síntesis o evaluación.

Una mala jerarquía produce:

- desorientación,
- redundancia,
- sobrecarga cognitiva.

### Jerarquía de agrupación: Parts, Chapters y Sections

Para implementar esta narrativa, `_toc.yml` ofrece tres niveles de agrupación que deben usarse con intención pedagógica:|

#### Parts (bloques temáticos)

Agrupan múltiples sesiones bajo una temática mayor. 
- **Uso pedagógico:** Marcar cambios de "Unidad" o "Módulo". Ayudan a que el estudiante no vea el curso como una lista interminable de archivos, sino como hitos logrables.
- **Ejemplo:** "Fundamentos", "Caso de Estudio", "Evaluación".

#### Chapters (capítulos / sesiones)

Son los archivos individuales (`.md` o `.ipynb`) referenciados en el `toc`.
- **Uso pedagógico:** Representan la "unidad atómica" de aprendizaje (ej. una clase de 1.5 horas).
- **Carga Cognitiva:** Si un capítulo es demasiado largo, el estudiante pierde el foco. Si es muy corto, la navegación se vuelve tediosa.

#### Sections (secciones)

Son los subtítulos dentro de un archivo (`##`, `###`).
- **Uso pedagógico:** Estructuran el contenido *dentro* de la sesión.
- **Diferencia clave:** Si un tema requiere su propia navegación o evaluación independiente, debería promoverse a *Chapter*, no quedarse como *Section*.

### Ejemplo concreto de `_toc.yml` pedagógico

A continuación, un ejemplo alineado con este curso:

```yaml
format: jb-book
root: index

parts:
  - caption: "Fundamentos"
    chapters:
      - file: sessions/01-introduccion-frontmatter
      - file: sessions/02-frontmatter-academico

  - caption: "Diseño semántico"
    chapters:
      - file: sessions/03-diseno-semantico-metadatos
      - file: sessions/04-herencia-frontmatter

  - caption: "Integración y evaluación"
    chapters:
      - file: sessions/05-toc-estructura-pedagogica
      - file: sessions/06-proyecto-integrador

```

Lectura pedagógica del ejemplo

Este `_toc.yml` comunica explícitamente que:

- el curso progresa de fundamentos a diseño;
- la semántica precede a la implementación;
- la evaluación aparece al final como integración.

No es una decisión técnica, es una postura didáctica.

### Relación entre `_toc.yml` y evaluación

Cuando `_toc.yml` está bien diseñado:

- cada sesión tiene un rol claro;
- los productos parciales preparan el proyecto final;
- la evaluación es acumulativa y coherente.

Esto facilita:

- rúbricas alineadas;
- seguimiento del aprendizaje;
- retroalimentación formativa.

Transparencia académica

Un `_toc.yml` claro permite que:

- estudiantes comprendan el recorrido completo;
- evaluadores externos entiendan la lógica del curso;
- el curso sea reutilizable y auditable.

Esto es especialmente importante en entornos universitarios.

## Actividad práctica

```{include} ../exercises/05-analisis-toc.md
```



## Lecturas y referencias

- [@jupyterbook]
- [@biggs1996enhancing]
- [@wiggins2005understanding]


> La navegación no es neutral: enseña tanto como el contenido.

En la Sesión 6 se integrarán todos los elementos en un proyecto final evaluable, donde frontmatter, _config.yml y `_toc.yml` funcionen como un sistema coherente.