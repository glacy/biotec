---
title: Electricidad
subtitle: Semana 13
subject: Semana 13
session:
  number: 13
  duration: TBD
  modality: Presencial
course: Física para Biotecnología
authors:
- name: Escuela de Física
keywords:
- Electricidad
learning_objectives:
- Analizar circuitos eléctricos básicos utilizando la Ley de Ohm.
- Relacionar los circuitos RC con la membrana celular y el transporte de iones.
- Describir el modelo eléctrico equivalente de una membrana biológica.
activities: 'Hackeando el Potencial de Acción: Uso de simuladores neuronales (e.g.,
  Neurona de Hodgkin-Huxley simplificada) para manipular canales iónicos (resistencias)
  y ver el efecto en el voltaje de membrana.'
evaluation:
- type: Sumativa
  description: 'Taller Evaluado: Análisis de circuitos equivalentes de membrana.'
references:
- text: '[2] Jou Mirabent, D. (2009). Física para ciencias de la vida (2.ª ed.). McGraw-Hill
    España. https://elibro.net/es/lc/itcr/titulos/50165'
  pages: Secciones 6.6 a 6.8, pág. 281-297
- text: '[3] Ortuño, M. (2019). Física para las ciencias de la vida. Editorial Tébar
    Flores. https://elibro.net/es/lc/itcr/titulos/124788'
  pages: Secciones 14.1 a 14.4, pág. 253-259
---

![](https://img.shields.io/badge/-Electricidad-lightgrey) ![](https://img.shields.io/badge/-Circuitos_complicados_(ejemplo_biológico)-lightgrey) ![](https://img.shields.io/badge/-Descarga_de_condensador-lightgrey) ![](https://img.shields.io/badge/-Circuito_eléctrico_equivalente_a_la_membrana-lightgrey) ![](https://img.shields.io/badge/-Transporte_de_iones_a_través_de_membrana-lightgrey)

:::{note} Objetivos
Al completar esta lección, serás capaz de:
1. Analizar circuitos eléctricos básicos utilizando la Ley de Ohm.
2. Relacionar los circuitos RC con la membrana celular y el transporte de iones.
3. Describir el modelo eléctrico equivalente de una membrana biológica.
:::

## Introducción

Para un biotecnólogo, un circuito no es solo cables y baterías. El sistema nervioso es un circuito complejo. Los biosensores que detectan glucosa son circuitos. Aprender a analizar voltajes y corrientes es fundamental para entender la electrofisiología y la instrumentación biomédica.

## Ley de Ohm y resistencia

En muchos materiales, la corriente ($I$) es proporcional al voltaje ($V$).

$$ V = I \cdot R $$

*   **Corriente ($I$)**: Flujo de carga. (Amperes, A). En biología: flujo de iones ($Na^+, K^+, Cl^-$).
*   **Resistencia ($R$)**: Oposición al flujo. (Ohms, $\Omega$). Canales iónicos cerrados = Resistencia infinita.

### Potencia eléctrica
$$ P = V \cdot I = I^2 R $$
El efecto Joule explica por qué se calientan los equipos de electroforesis (y por qué necesitamos sistemas de enfriamiento).

## Circuitos en serie y paralelo

*   **Serie**: La corriente es la misma. $R_{eq} = R_1 + R_2$.
*   **Paralelo**: El voltaje es el mismo. $\frac{1}{R_{eq}} = \frac{1}{R_1} + \frac{1}{R_2}$.

:::{important} Canales Iónicos en Paralelo
La membrana celular tiene miles de canales iónicos. Cada canal actúa como una resistencia en paralelo. Abrir más canales (disminuir $R$) aumenta masivamente la conductancia total de la membrana.
:::

## El circuito RC y la membrana

La membrana celular se comporta como un circuito **Resistor-Capacitor (RC)**:
*   **Capacitor ($C_m$)**: La bicapa lipídica (acumula carga).
*   **Resistor ($R_m$)**: Los canales iónicos (permiten fugas).

### Constante de Tiempo ($\tau$)
Cuando se inyecta corriente, el voltaje no cambia instantáneamente; sube exponencialmente.
$$ \tau = R \cdot C $$
Esto determina qué tan rápido puede responder una neurona a un estímulo.

## Transporte de iones y Nernst

El movimiento de iones a través de la membrana depende de dos fuerzas ("Gradiente Electroquímico"):
1.  **Difusión**: Diferencia de concentración.
2.  **Eléctrica**: Diferencia de potencial.

El **Potencial de Nernst** es el voltaje donde estas dos fuerzas se equilibran para un ion específico.
$$ V_{eq} = \frac{RT}{zF} \ln\left(\frac{[Ion]_{ext}}{[Ion]_{int}}\right) $$

:::{note} Cálculo Potencial de Nernst (K+)
```{include} ../examples/13-potencial-nernst.md
```
:::

## ✍️ Ejercicios propuestos

```{include} ../exercises/13-patch-clamp.md
```



## 🧪 Actividades

Hackeando el Potencial de Acción: Uso de simuladores neuronales (e.g., Neurona de Hodgkin-Huxley simplificada) para manipular canales iónicos (resistencias) y ver el efecto en el voltaje de membrana.


👉 [Ir a la actividad](../activities/13-hackeando-potencial-accion.md)

## 📝 Evaluación

- **Sumativa**: Taller Evaluado: Análisis de circuitos equivalentes de membrana.


👉 [Ir a la evaluación](../evaluations/13-sumativa-taller-circuitos.md)

## 📚 Referencias

- [2] Jou Mirabent, D. (2009). Física para ciencias de la vida (2.ª ed.). McGraw-Hill España. https://elibro.net/es/lc/itcr/titulos/50165, Secciones 6.6 a 6.8, pág. 281-297
- [3] Ortuño, M. (2019). Física para las ciencias de la vida. Editorial Tébar Flores. https://elibro.net/es/lc/itcr/titulos/124788, Secciones 14.1 a 14.4, pág. 253-259

