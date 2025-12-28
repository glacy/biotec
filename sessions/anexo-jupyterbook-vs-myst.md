---
title: "Anexo: Jupyter Book vs MyST"
subtitle: "Evolución, diferencias y convergencia"
subject: "Anexos"
type: reference
keywords:
  - jupyter book
  - myst
  - ecosistema
  - migración
---

Es común confundir **Jupyter Book** con **MyST (Markedly Structured Text)**. Aunque están íntimamente relacionados, son herramientas distintas que están evolucionando a ritmos diferentes.

Esta guía aclara sus diferencias y por qué a veces encontramos instrucciones contradictorias en la documentación.

## Las definiciones

### Jupyter Book (clásico)
Es una herramienta basada en Python (`pip install jupyter-book`) que utiliza **Sphinx** como motor de construcción.
- **Rol:** Orquestador. Toma tus archivos, corre Sphinx, y genera un HTML estático.
- **Configuración:** Usa `_config.yml` y `_toc.yml`.
- **Estado:** Estable, pero su arquitectura basada en Sphinx es lenta y difícil de extender.

### MyST (moderno / Estándar Abierto)
Originalmente era solo el lenguaje de marcado (Markdown con superpoderes). Hoy, **MyST** es un ecosistema completo independiente de Python y Sphinx.
- **Rol:** Estándar de ciencia abierta. Incluye su propio CLI (`myst start`) que es mucho más rápido y moderno (basado en Javascript/Node).
- **Configuración:** Usa `myst.yml`.
- **Estado:** En rápida evolución. Es el futuro de la publicación científica.

## Diferencias clave: La trampa del TOC

El punto de mayor confusión actual es la definición de la estructura.

| Característica | Jupyter Book (`_toc.yml`) | MyST CLI (`myst.yml`) |
|----------------|---------------------------|-----------------------|
| **Agrupación** | `parts`                   | No usa clave `parts`, infiere nivel por anidación |
| **Título de Grupo** | `caption: "Titulo"` | `title: "Titulo"` |
| **Contenido**  | `chapters: [...]`         | `children: [...]` |
| **Archivo raíz** | `root: index`           | Se define en `project.toc` o implícito |

### Ejemplo de Migración

**En Jupyter Book (`_toc.yml`):**
```yaml
- caption: "Fundamentos"
  chapters:
    - file: intro.md
```

**En MyST (`myst.yml`):**
```yaml
- title: "Fundamentos"
  children:
    - file: intro.md
```

## ¿Cuál usar?

- **Si usas `jb build`:** Debes usar `_toc.yml` y la sintaxis clásica.
- **Si usas `myst start`:** Debes usar `myst.yml`. MyST intenta leer `_toc.yml` para compatibilidad, pero a menudo falla con estructuras complejas (parts/captions), por lo que se recomienda tener una configuración nativa en `myst.yml`.

## Hacia el futuro

El ecosistema se está moviendo hacia **MyST** puro.
- Los documentos son más portátiles.
- La construcción es instantánea.
- La validación de metadatos es más estricta (lo cual es bueno para la ciencia).

Este curso utiliza principios agnósticos: el **Frontmatter** bien diseñado funciona en ambos sistemas.
