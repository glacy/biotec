---
title: 'Fluidos reales: viscosidad, turbulencia y aplicaciones'
subtitle: Semana 10
subject: Semana 10
session:
  number: 10
  duration: TBD
  modality: Presencial
course: Física para Biotecnología
authors:
- name: Escuela de Física
keywords:
- Fluidos
- 'reales:'
- viscosidad,
- turbulencia
- aplicaciones
learning_objectives:
- Describir la viscosidad de un fluido real
- Describir el comportamiento de un fluido viscoso con base en la Ley de Poiseuille.
activities: Debate sobre fluidos No-Newtonianos en la industria alimentaria y biológica
  (e.g., moco, citoplasma).
evaluation:
- type: Sumativa
  description: 'Reporte de Laboratorio: Determinación de viscosidad experimental.'
references:
- text: '[3] Ortuño, M. (2019). Física para las ciencias de la vida. Editorial Tébar
    Flores. https://elibro.net/es/lc/itcr/titulos/124788'
  pages: Secciones 8.3 a 8.4, pág. 123-128
---

![](https://img.shields.io/badge/-Fluidos_reales:_viscosidad,_turbulencia_y_aplicaciones-lightgrey) ![](https://img.shields.io/badge/-viscosidad-lightgrey) ![](https://img.shields.io/badge/-viscosidad_aparente-lightgrey) ![](https://img.shields.io/badge/-comportamiento_reológico-lightgrey) ![](https://img.shields.io/badge/-fluidos_newtonianos_y_no_newtonianos-lightgrey) ![](https://img.shields.io/badge/-Ley_de_Poiseuille-lightgrey)

:::{note} Objetivos
Al completar esta lección, serás capaz de:
1. Describir la viscosidad de un fluido real
2. Describir el comportamiento de un fluido viscoso con base en la Ley de Poiseuille.
:::

## Introducción

En el mundo real, los fluidos tienen "fricción interna". La miel fluye más lento que el agua. Esta resistencia a fluir se llama **viscosidad**. En biotecnología, controlar la viscosidad es crucial para bombear medios de cultivo densos o entender por qué la sangre se espesa en ciertas condiciones.

## Viscosidad ($\eta$)

Medida de la resistencia de un fluido a deformarse bajo esfuerzo cortante.
*   Unidad SI: $\text{Pa} \cdot \text{s}$.
*   Común: **Poise (P)** o centiPoise (cP). $1 \text{ cP} \approx 1 \text{ mPa} \cdot \text{s}$ (viscosidad del agua a 20°C).

### Fluidos newtonianos vs no newtonianos
*   **Newtonianos**: Viscosidad constante (Agua, aire, medios de cultivo simples).
*   **No newtonianos**: $\eta$ cambia con la fuerza aplicada.
    *   *Pseudoplásticos (Shear-thinning)*: Se adelgazan al agitarse. Ejemplo: Sangre, pintura, salsa de tomate.
    *   **Biotech**: Al bombear un cultivo celular sensible, la viscosidad puede cambiar en las tuberías debido al esfuerzo de corte.

## Ley de Poiseuille

Describe el caudal ($Q$) de un fluido viscoso en un tubo cilíndrico (flujo laminar).

$$ Q = \frac{\pi r^4 (P_1 - P_2)}{8 \eta L} $$

*   $r$: Radio del tubo.
*   $\Delta P$: Diferencia de presión.
*   $\eta$: Viscosidad.
*   $L$: Longitud.

:::{important} El Poder de r^4
El caudal es proporcional a la **cuarta potencia** del radio.
Si una arteria se reduce un poco (ej: 10%, radio pasa a 0.9), el flujo decae drásticamente ($0.9^4 \approx 0.65$, cae al 65%).
Para mantener el flujo, el corazón debe aumentar enormemente la presión ($\Delta P$).
:::

## Resistencia hidrodinámica

Análoga a la resistencia eléctrica ($R$).
$$ \Delta P = Q \cdot R $$
$$ R = \frac{8 \eta L}{\pi r^4} $$

Esto nos permite modelar sistemas de tuberías o vasos sanguíneos como circuitos en serie o paralelo.

---

## 🔬 Aplicación: Filtración y microfluídica

En la filtración tangencial (TFF) o en chips de microfluídica, los canales son muy estrechos ($r$ pequeño).
Según Poiseuille, la resistencia es enorme.

:::{note} Filtración de fluidos viscosos
```{include} ../examples/10-ley-poiseuille-jeringa.md
```
:::
*   Para pasar líquido por un microcanal, se requieren bombas de alta presión o jeringas muy precisas.
*   La viscosidad del fluido ($\eta$) limita qué tan rápido podemos procesar una muestra sin generar presiones que rompan el chip o las células.

## ✍️ Ejercicios propuestos

```{include} ../exercises/10-transfusion-poiseuille.md
```



## 🧪 Actividades

Debate sobre fluidos no newtonianos en la industria alimentaria y biológica (e.g., moco, citoplasma).


👉 [Ir a la actividad](../activities/10-debate-fluidos-no-newtonianos.md)

## 📝 Evaluación

- **Sumativa**: Reporte de Laboratorio: Determinación de viscosidad experimental.


👉 [Ir a la evaluación](../evaluations/10-sumativa-reporte-viscosidad.md)

## 📚 Referencias

- [3] Ortuño, M. (2019). Física para las ciencias de la vida. Editorial Tébar Flores. https://elibro.net/es/lc/itcr/titulos/124788, Secciones 8.3 a 8.4, pág. 123-128

