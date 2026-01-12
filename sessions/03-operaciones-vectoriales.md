---
title: Operaciones vectoriales
subtitle: Semana 3
subject: Semana 3
session:
  number: 3
  duration: TBD
  modality: Presencial
course: Física para Biotecnología
authors:
- name: Escuela de Física
keywords:
- Operaciones
- vectoriales
learning_objectives:
- Descomponer un vector en sus componentes
- Realizar operaciones vectoriales (suma, resta, producto por escalar).
activities: 'Caza del tesoro vectorial: El estudiantado sigue instrucciones vectoriales
  (pasos y ángulos) para encontrar ''muestras'' ocultas en el campus.'
evaluation:
- type: Formativa
  description: 'Hoja de trabajo: Descomposición vectorial aplicada a fuerzas musculares.'
references:
- text: '[1] Wilson, J., Buffa, A., & Lou, B. (2007). Física (6.ª ed.). Pearson-Prentice
    Hall.'
  pages: Sección 3.2, pág. 73-80
---

![](https://img.shields.io/badge/-Operaciones_vectoriales-lightgrey) ![](https://img.shields.io/badge/-componentes_vectoriales-lightgrey) ![](https://img.shields.io/badge/-suma_vectorial-lightgrey) ![](https://img.shields.io/badge/-resta_vectorial-lightgrey) ![](https://img.shields.io/badge/-producto_vectorial-lightgrey)

:::{note} Objetivos
Al completar esta lección, serás capaz de:
1. Descomponer un vector en sus componentes
2. Realizar operaciones vectoriales (suma, resta, producto por escalar).
:::

## Introducción

En biología y biotecnología, rara vez los fenómenos ocurren en una sola dimensión. Las fuerzas electrostáticas entre moléculas, el movimiento de bacterias en un fluido o la configuración de una proteína plegada involucran direcciones y magnitudes espaciales. Para describir estos fenómenos, necesitamos herramientas matemáticas que vayan más allá de los simples números: **los vectores**.

## Cantidades escalares vs. vectoriales

*   **Escalar**: Cantidad definida solo por su magnitud (número + unidad).
    *   *Ejemplos biológicos*: Temperatura de incubación ($37^\circ C$), concentración de sustrato ($5 \text{ mM}$), masa de una muestra ($2 \text{ g}$), pH.
*   **Vector**: Cantidad definida por magnitud **y dirección**.
    *   *Ejemplos biológicos*: Velocidad de flujo sanguíneo (magnitud y hacia dónde fluye), fuerza de un enlace, campo eléctrico en una membrana.

:::{important} Notación
Los vectores se denotan con una flecha sobre la letra ($\vec{A}$) o en negrita ($\mathbf{A}$). Su magnitud se denota como $|\vec{A}|$ o simplemente $A$.
:::

## Descomposición y operaciones vectoriales

Cualquier vector en un plano puede descomponerse en sus componentes rectangulares ($x$ e $y$). Esto es crucial para analizar sistemas complejos, como las fuerzas que actúan sobre una articulación o sobre una partícula en sedimentación.

### Componentes de un vector

Dado un vector $\vec{F}$ con magnitud $F$ y ángulo $\theta$ respecto al eje $x$:

$$
F_x = F \cos(\theta)
$$
$$
F_y = F \sin(\theta)
$$

### Magnitud y Dirección desde Componentes

$$
F = \sqrt{F_x^2 + F_y^2}
$$
$$
\theta = \tan^{-1}\left(\frac{F_y}{F_x}\right)
$$

### Suma vectorial (fuerza neta)

Para encontrar el efecto combinado de múltiples vectores (como varias fuerzas actuando sobre una célula), sumamos sus componentes:

$$
\vec{R} = \vec{A} + \vec{B} \implies \begin{cases} R_x = A_x + B_x \\ R_y = A_y + B_y \end{cases}
$$

:::{tip} Aplicación: Migración Celular
Si una célula es atraída quimiotácticamente hacia una fuente de nutrientes (Fuerza A) pero arrastrada por el flujo del medio (Fuerza B), su movimiento real seguirá la dirección del vector suma ($\vec{R} = \vec{A} + \vec{B}$).
:::

## Concepto de fuerza

Una **fuerza** es una interacción que, si no es contrarrestada, cambia el movimiento de un objeto. En el SI se mide en **Newtons (N)**.

$$ 1 \text{ N} = 1 \text{ kg} \cdot \text{m/s}^2 $$

En biotecnología, a menudo trabajamos en escalas microscópicas donde el Newton es una unidad muy grande. Es común usar **picoNewtons (pN)**.
*   $1 \text{ pN} = 10^{-12} \text{ N}$
*   *Referencia*: La fuerza generada por un motor molecular de miosina es de aprox. 3-5 pN.

### Principio de superposición

Cuando actúan varias fuerzas sobre un cuerpo, el efecto neto es igual a la suma vectorial de todas ellas:

$$ \vec{F}_{neta} = \sum \vec{F} = \vec{F}_1 + \vec{F}_2 + \dots $$

---

## 🔬 Ejemplo aplicado: Fuerzas en una proteína

:::{note} Análisis de fuerzas en proteína
```{include} ../examples/03-fuerzas-proteina.md
```
:::



## 🧪 Actividades

Caza del tesoro vectorial: El estudiantado sigue instrucciones vectoriales (pasos y ángulos) para encontrar 'muestras' ocultas en el campus.


👉 [Ir a la actividad](../activities/03-caza-del-tesoro-vectorial.md)

## 📝 Evaluación

- **Formativa**: Hoja de trabajo: Descomposición vectorial aplicada a fuerzas musculares.


👉 [Ir a la evaluación](../evaluations/03-formativa-vectores.md)

## 📚 Referencias

- [1] Wilson, J., Buffa, A., & Lou, B. (2007). Física (6.ª ed.). Pearson-Prentice Hall., Sección 3.2, pág. 73-80

