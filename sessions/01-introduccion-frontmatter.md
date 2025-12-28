---
title: "Introducción al frontmatter"
subtitle: "Del documento tipográfico al documento semántico"
subject: "Sesión 1"
session:
  number: 1
  duration: "1.5 horas"
  modality: "magistral con discusión guiada"
course: "Diseño semántico de documentos académicos"
authors:
  - name: "Gerardo Lacy Mora"
keywords:
  - frontmatter
  - metadatos
  - documentación académica
  - publicación científica
learning_objectives:
  - Comprender el concepto de frontmatter y su función semántica
  - Distinguir entre estructura visual y estructura semántica de un documento académico.
  - Identificar las limitaciones de la estructuración puramente visual en la publicación académica
---


## Introducción

Durante décadas, la producción de documentos académicos ha estado dominada por una lógica tipográfica: el énfasis se coloca en cómo se ve un documento, más que en cómo está estructurado conceptualmente.

En los ecosistemas modernos de publicación —libros digitales, repositorios, plataformas educativas, ciencia abierta— esta aproximación resulta insuficiente. Los documentos deben ser:

- interpretables por humanos,
- procesables por máquinas,
- reutilizables en múltiples contextos,
- evaluables de forma reproducible.

El **frontmatter** surge como el mecanismo que permite satisfacer simultáneamente estos requisitos, separando de manera explícita el contenido intelectual de su presentación visual.

Esta sesión establece los fundamentos conceptuales que sostienen todo el curso.

## Conceptos clave

### Frontmatter

Se denomina frontmatter al bloque inicial de un documento que contiene metadatos estructurados, expresados típicamente en YAML, y que describen el documento antes de su contenido narrativo.

Ejemplos de información que suele incluir:

- título,
- autoría,
- afiliación institucional,
- palabras clave,
- licencia,
- objetivos de aprendizaje.

El frontmatter **no es decorativo**: define el significado formal del documento.

### Metadatos

Los metadatos son **datos sobre el documento**, no el documento mismo.
En un contexto académico, cumplen funciones críticas:

- indexación en buscadores,
- generación automática de bibliografías,
- validación curricular,
- trazabilidad de aprendizaje,
- interoperabilidad entre plataformas.

---

## Estructura visual vs estructura semántica

Un principio central del curso es la distinción entre:

- **estructura visual**: encabezados, tipografías, numeración;
- **estructura semántica**: qué representa cada parte del documento.

Dos documentos pueden verse idénticos y, sin embargo, tener estructuras semánticas radicalmente distintas.

El frontmatter pertenece exclusivamente al nivel semántico.

### Ejemplo guiado

#### Documento sin frontmatter (enfoque tradicional)

Un documento típico puede iniciar directamente con un encabezado:

```txt
# Introducción
Este documento presenta...
```

Desde el punto de vista humano, esto es legible.
Desde el punto de vista de una herramienta, no hay información formal sobre:

- quién es el autor,
- qué tipo de documento es,
- qué objetivos formativos persigue.

#### Documento con frontmatter (enfoque semántico)

El mismo documento puede iniciar con:

```yaml
---
title: "Introducción a los metadatos académicos"
author: Gerardo Lacy Mora
keywords:
  - metadatos
  - documentación académica
---

# Introducción
Este documento presenta...
```


Aquí, el contenido no cambia, pero el significado formal del documento sí.

Este es el cambio de paradigma que guía todo el curso.

---

## Actividad práctica

```{include} ../exercises/01-auditoria.md
```



## Lecturas y referencias

- [@shotton2009semantic]
- [@wilkinson2016fair]

## Cierre de la sesión

Al finalizar esta sesión, el estudiante debe haber internalizado una idea central:

> Un documento académico moderno no se define solo por lo que dice, sino por cómo declara formalmente lo que es.

Esta idea será operacionalizada en las siguientes sesiones.
