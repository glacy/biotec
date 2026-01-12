---
title: Microscopios
subtitle: Semana 16
subject: Semana 16
session:
  number: 16
  duration: TBD
  modality: Presencial
course: Física para Biotecnología
authors:
- name: Escuela de Física
keywords:
- Microscopios
learning_objectives:
- Explicar la formación de imágenes mediante lentes y el aumento angular.
- Comparar el funcionamiento y resolución del microscopio óptico frente al electrónico.
- Describir técnicas especiales de microscopía y sus aplicaciones.
activities: 'Galería virtual de Microscopía: Identificar imágenes de SEM, TEM, Confocal
  y Campo Claro.'
evaluation:
- type: Sumativa
  description: 'Proyecto final: Presentación de una técnica de microscopía avanzada
    y su principio físico.'
references:
- text: '[3] Ortuño, M. (2019). Física para las ciencias de la vida. Editorial Tébar
    Flores. https://elibro.net/es/lc/itcr/titulos/124788'
  pages: Secciones 19.1 a 19.7, pág. 339-347
---

![](https://img.shields.io/badge/-Microscopios-lightgrey) ![](https://img.shields.io/badge/-Lentes-lightgrey) ![](https://img.shields.io/badge/-Aumento_angular-lightgrey) ![](https://img.shields.io/badge/-Microscopio_óptico-lightgrey) ![](https://img.shields.io/badge/-Resolución_del_microscopio-lightgrey) ![](https://img.shields.io/badge/-Técnicas_especiales_de_microscopía_óptica-lightgrey) ![](https://img.shields.io/badge/-Microscopio_electrónico_de_transmisión-lightgrey) ![](https://img.shields.io/badge/-Microscopio_electrónico_de_barrido-lightgrey) ![](https://img.shields.io/badge/-Microscopio_de_efecto_túnel-lightgrey)

:::{note} Objetivos
Al completar esta lección, serás capaz de:
1. Explicar la formación de imágenes mediante lentes y el aumento angular.
2. Comparar el funcionamiento y resolución del microscopio óptico frente al electrónico.
3. Describir técnicas especiales de microscopía y sus aplicaciones.
:::

## Introducción

La historia de la biología celular es la historia del microscopio. Desde los lentes simples de Leeuwenhoek hasta los criomicroscopios electrónicos actuales, la capacidad de ver más allá de lo evidente depende de principios ópticos fundamentales. En esta sesión final, entenderemos los límites físicos de la visión humana y artificial.

## Lentes y formación de imágenes

*   **Lente convergente (convexa)**: Enfoca la luz en un punto. Es la base de objetivos y oculares.
*   **Aumento total ($M$)**: El producto del aumento del objetivo y del ocular.
    $$ M_{total} = M_{obj} \times M_{ocular} $$
    *   Ejemplo: Objetivo 40x $\times$ Ocular 10x = 400x.

## Resolución y límite de difracción

El aumento no tiene límites (puedes hacer zoom digital infinito). **La resolución SÍ tiene límites**.
La resolución es la distancia mínima ($d$) para distinguir dos puntos como separados.

$$ d = \frac{0.61 \lambda}{NA} $$

*   $\lambda$: Longitud de onda de la luz.
*   $NA$: Apertura Numérica (calidad del lente, máx $\approx 1.4$).

Para luz visible ($\lambda \approx 500 \text{ nm}$), el límite físico es $d \approx 200 \text{ nm}$.
*   **Consecuencia**: **Nunca** podrás ver un virus ($\approx 50 \text{ nm}$) o la hélice de ADN ($\approx 2 \text{ nm}$) con un microscopio óptico tradicional. Es físicamente imposible debido a la difracción de la luz.

:::{note} Cálculo del Límite de Resolución
```{include} ../examples/16-limite-resolucion.md
```
:::

## Microscopía electrónica

Para ver cosas más pequeñas que 200 nm, necesitamos una $\lambda$ más pequeña. Usamos **electrones** en lugar de fotones.
Según la mecánica cuántica (De Broglie), un electrón acelerado se comporta como una onda con $\lambda$ diminuta ($< 0.01 \text{ nm}$).

### Tipos
1.  **TEM (Transmisión)**: Los electrones atraviesan la muestra (debe ser ultrafina). Permite ver estructuras internas (orgánulos, capas virales).
2.  **SEM (Barrido)**: Los electrones rebotan en la superficie recubierta de metal. Crea imágenes 3D espectaculares de la superficie.

## Microscopía de super-resolución (Nobel 2014)

Nuevas técnicas (STED, PALM) usan trucos fluorescentes para "romper" el límite de difracción, permitiendo ver moléculas individuales con luz. El futuro de la biotecnología está en la nanoscopía.

## ✍️ Ejercicios propuestos

```{include} ../exercises/16-limite-fisico.md
```



## 🧪 Actividades

Galería virtual de Microscopía: Identificar imágenes de SEM, TEM, Confocal y Campo Claro.


👉 [Ir a la actividad](../activities/16-galeria-microscopia.md)

## 📝 Evaluación

- **Sumativa**: Proyecto final: Presentación de una técnica de microscopía avanzada y su principio físico.


👉 [Ir a la evaluación](../evaluations/16-sumativa-proyecto-final.md)

## 📚 Referencias

- [3] Ortuño, M. (2019). Física para las ciencias de la vida. Editorial Tébar Flores. https://elibro.net/es/lc/itcr/titulos/124788, Secciones 19.1 a 19.7, pág. 339-347

