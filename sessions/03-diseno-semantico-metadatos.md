---
title: "Diseño semántico de metadatos"
subtitle: "Coherencia, vocabularios controlados y escalabilidad"
subject: "Sesión 3"
session:
  number: 3
  type: lecture
  duration: "1.5 horas"
learning_objectives:
  - "Comprender la diferencia entre metadatos sintácticos y metadatos semánticos."
  - "Diseñar metadatos consistentes, reutilizables y escalables."
  - "Identificar errores semánticos comunes en documentación académica."
keywords:
  - metadatos
  - semántica
  - documentación académica
  - consistencia
  - escalabilidad
---


> La coherencia semántica es clave en sistemas documentales.

Introducción

Hasta ahora se ha establecido qué es el frontmatter y qué información académica debe contener.
Sin embargo, no basta con que los metadatos existan: deben significar lo mismo en todos los documentos.

En esta sesión se introduce una idea central:

La calidad de un sistema documental no depende de documentos aislados, sino de la coherencia semántica entre ellos.

Esto es especialmente crítico en cursos, repositorios y libros digitales, donde múltiples archivos deben poder leerse como un conjunto estructurado.

## Metadatos sintácticos vs. metadatos semánticos

### Metadatos sintácticos

Son metadatos formalmente correctos, pero cuyo significado no está claramente definido ni controlado.

Ejemplos:

- palabras clave arbitrarias,
- campos usados con significados distintos en cada archivo,
- valores escritos de forma inconsistente.

Desde el punto de vista técnico, el documento funciona.
Desde el punto de vista académico, la información es ambigua.

### Metadatos semánticos

Son metadatos cuyo significado es:

- explícito,
- consistente,
- compartido por todos los documentos del sistema.

Esto implica que:

- los mismos campos siempre representan lo mismo,
- los valores siguen convenciones comunes,
- el lector (humano o máquina) puede inferir relaciones entre documentos.

### Consistencia como principio académico

#### Consistencia horizontal

La consistencia horizontal se refiere a la coherencia entre documentos del mismo nivel.

Por ejemplo:

- todas las sesiones del curso usan el mismo esquema de frontmatter;
- los campos session.number y session.duration aparecen siempre con el mismo significado.

Esto permite:

- comparar documentos,
- generar tablas o índices automáticamente,
- evaluar el curso como una unidad.

#### Consistencia vertical

La consistencia vertical se refiere a la coherencia entre niveles jerárquicos:

- libro del curso,
- capítulos,
- sesiones,
- actividades.

Cada nivel:

- hereda metadatos,
- especializa otros,
- evita duplicaciones innecesarias.

Este principio es clave en Jupyter Book y sistemas similares.

### Diseño de vocabularios controlados

¿Qué es un vocabulario controlado?

Es un conjunto limitado y explícito de valores permitidos para un campo.

Ejemplo:

- session.type: lecture, lab, workshop, assessment
- roles: author, instructor, editor
- difficulty: introductory, intermediate, advanced

El objetivo no es restringir arbitrariamente, sino evitar ambigüedad semántica.

#### Beneficios

Usar vocabularios controlados permite:

- análisis automático del contenido;
- generación de reportes;
- validación temprana de errores;
- escalabilidad del curso o repositorio.

En contextos educativos, esto facilita:

- evaluación curricular,
- acreditación,
- reutilización interinstitucional.

### Errores semánticos frecuentes

Algunos errores comunes al diseñar metadatos:

- usar sinónimos como si fueran equivalentes semánticos;
- cambiar el significado de un campo entre archivos;
- mezclar información descriptiva con organizativa;
- crear campos ad hoc para casos aislados.

Estos errores no se corrigen con sintaxis, sino con diseño conceptual.

## Ejemplo guiado

### Frontmatter semánticamente coherente

Un frontmatter bien diseñado no solo es correcto, sino predecible:

```yaml
---
title: "Diseño semántico de metadatos"
session:
  number: 3
  type: lecture
  duration: "1.5 horas"
learning_outcomes:
  - Diseñar metadatos coherentes
  - Identificar errores semánticos
keywords:
  - metadatos
  - semántica
---
```

Cualquier lector puede inferir:

- el rol del documento,
- su posición en el curso,
- su relación con otros archivos.

## Actividad práctica

```{include} ../exercises/03-auditoria-semantica.md
```



## Lecturas y referencias

- [@dublincore]
- [@coar_vocabularies]
- [@jupyterbook]



> Los metadatos no describen solo documentos, describen sistemas de significado.

En la próxima sesión se trabajará en la herencia y reutilización de frontmatter, sentando las bases para estructuras grandes y mantenibles.
