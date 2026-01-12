---
title: 'Fluidos reales: viscosidad, turbulencia y aplicaciones'
subtitle: Semana 11
subject: Semana 11
session:
  number: 11
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
- Describir los tipos de flujo laminar y turbulento, por medio del número de Reynols.
- Explicar el concepto de fuerza de arrastre y su relación con el transporte a través
  de membrana biológica
activities: 'Microfluídica en papel: Observación de flujo laminar vs turbulento mediante
  inyección de tinta en canales de diferentes tamaños.'
evaluation:
- type: Formativa
  description: 'Exposición: Importancia del Número de Reynolds en diferentes escalas
    biológicas.'
references:
- text: '[3] Ortuño, M. (2019). Física para las ciencias de la vida. Editorial Tébar
    Flores. https://elibro.net/es/lc/itcr/titulos/124788'
  pages: Secciones 8.5 a 8.7, pág. 129-133
- text: '[2] Jou Mirabent, D. (2009). Física para ciencias de la vida (2.ª ed.). McGraw-Hill
    España. https://elibro.net/es/lc/itcr/titulos/50165'
  pages: Sección 3.8, pág. 115-126
---

![](https://img.shields.io/badge/-Fluidos_reales:_viscosidad,_turbulencia_y_aplicaciones-lightgrey) ![](https://img.shields.io/badge/-Flujo_laminar_y_turbulencia-lightgrey) ![](https://img.shields.io/badge/-Número_de_Reynolds-lightgrey) ![](https://img.shields.io/badge/-Fuerza_de_arrastre-lightgrey) ![](https://img.shields.io/badge/-Transporte_a_través_de_membrana_biológica-lightgrey)

:::{note} Objetivos
Al completar esta lección, serás capaz de:
1. Describir los tipos de flujo laminar y turbulento, por medio del número de Reynols.
2. Explicar el concepto de fuerza de arrastre y su relación con el transporte a través de membrana biológica
:::

## Introducción

¿Por qué una bacteria no puede nadar como un pez? ¿Por qué es difícil mezclar reactivos en un chip microfluídico? La respuesta está en la competencia entre dos fuerzas: la inercia (que mantiene el movimiento) y la viscosidad (que frena). El **Número de Reynolds** es el juez de esta competencia.

## Número de Reynolds ($Re$)

Cantidad adimensional que predice el régimen de flujo.

$$ Re = \frac{\rho v L}{\eta} $$

*   $\rho$: Densidad.
*   $v$: Velocidad.
*   $L$: Longitud característica (diámetro del tubo, tamaño del organismo).
*   $\eta$: Viscosidad.

### Interpretación
$$ Re = \frac{\text{Fuerzas Inerciales}}{\text{Fuerzas Viscosas}} $$

*   **Re Alto (> 2000-4000)**: **Turbulento**. El caos domina. Importante para mezclar nutrientes en grandes tanques.
*   **Re Bajo (< 1)**: **Laminar**. La viscosidad domina. No hay inercia. Si dejas de empujar, te detienes instantáneamente.

## Regímenes de flujo

### Flujo laminar (capas ordenadas)
Típico en capilares, microfluídica y flujo sanguíneo normal. Las capas de fluido se deslizan unas sobre otras suavemente.

### Flujo turbulento (caos)
Típico en aorta rápida o biorreactores agitados.
*   **Ventaja**: Mezcla eficiente.
*   **Desventaja**: Daño celular (shear stress). Las células animales son frágiles y pueden romperse en turbulencia.

## Fuerza de arrastre ($F_d$)

Fuerza que un fluido ejerce sobre un objeto que se mueve en él. Depende de $Re$.

### Ley de Stokes (Para Re bajo)
Para una esfera pequeña (célula, proteína) moviéndose lento:
$$ F_d = 6 \pi \eta r v $$
*   La fuerza es proporcional a la velocidad ($v$).

### Arrastre Aerodinámico (Para Re alto)
Para un coche o un ave:
$$ F_d = \frac{1}{2} C_d \rho A v^2 $$
*   La fuerza es proporcional al cuadrado de la velocidad ($v^2$).

## 🔬 "Vida a bajo número de Reynolds"

Este famoso concepto (E.M. Purcell) explica la realidad de las bacterias ($Re \approx 10^{-5}$).
*   **Sin inercia**: Para una bacteria, el agua se siente como "miel espesa". No puede "impulsarse y deslizarse". Debe nadar constantemente.
*   **Reversibilidad**: Movimientos recíprocos (como una vieira abriendo y cerrando su concha) no generan desplazamiento neto. Por eso usan flagelos helicoidales (sacacorchos).

:::{note} Comparación de Escalas: Bacteria vs Pez
```{include} ../examples/11-numero-reynolds-comparativo.md
```
:::

## ✍️ Ejercicios propuestos

```{include} ../exercises/11-reynolds-bacteria.md
```



## 🧪 Actividades

Microfluídica en papel: Observación de flujo laminar vs turbulento mediante inyección de tinta en canales de diferentes tamaños.


👉 [Ir a la actividad](../activities/11-microfluidica-papel.md)

## 📝 Evaluación

- **Formativa**: Exposición: Importancia del Número de Reynolds en diferentes escalas biológicas.


👉 [Ir a la evaluación](../evaluations/11-formativa-exposicion-reynolds.md)

## 📚 Referencias

- [3] Ortuño, M. (2019). Física para las ciencias de la vida. Editorial Tébar Flores. https://elibro.net/es/lc/itcr/titulos/124788, Secciones 8.5 a 8.7, pág. 129-133
- [2] Jou Mirabent, D. (2009). Física para ciencias de la vida (2.ª ed.). McGraw-Hill España. https://elibro.net/es/lc/itcr/titulos/50165, Sección 3.8, pág. 115-126

