---
title: Dinámica de fluidos ideales
subtitle: Semana 9
subject: Semana 9
session:
  number: 9
  duration: TBD
  modality: Presencial
course: Física para Biotecnología
authors:
- name: Escuela de Física
keywords:
- Dinámica
- fluidos
- ideales
learning_objectives:
- Usar la ecuación de continuidad y la ecuación de Bernoulli para explicar los efectos
  comunes de flujo de fluido ideal.
activities: 'Diseño de Biorreactor: Calcular caudales y diámetros de tuberías usando
  la ecuación de continuidad.'
evaluation:
- type: Sumativa
  description: 'Proyecto de Diseño (Fase 1): Esquema básico de flujo en un biorreactor
    y cálculos asociados.'
references:
- text: '[1] Wilson, J., Buffa, A., & Lou, B. (2007). Física (6.ª ed.). Pearson-Prentice
    Hall.'
  pages: Sección 9.4, pág. 319-324
- text: '[2] Jou Mirabent, D. (2009). Física para ciencias de la vida (2.ª ed.). McGraw-Hill
    España. https://elibro.net/es/lc/itcr/titulos/50165'
  pages: Ejemplos 3.4, 3.5 y 3.6
---

![](https://img.shields.io/badge/-Dinámica_de_fluidos_ideales-lightgrey) ![](https://img.shields.io/badge/-Fluido_ideal-lightgrey) ![](https://img.shields.io/badge/-Ecuación_de_continuidad-lightgrey) ![](https://img.shields.io/badge/-Ecuación_de_Bernoulli-lightgrey)

:::{note} Objetivos
Al completar esta lección, serás capaz de:
1. Usar la ecuación de continuidad y la ecuación de Bernoulli para explicar los efectos comunes de flujo de fluido ideal.
:::

## Introducción

Cuando un fluido se mueve, las reglas cambian. Ya no solo importa la profundidad; la velocidad importa. En esta sesión asumiremos un "fluido ideal" (sin fricción ni turbulencia) para entender los principios básicos que rigen desde el flujo en una tubería industrial hasta la circulación sanguínea.

## Fluido ideal

Simplificación teórica:
1.  **Incompresible**: Densidad constante.
2.  **No viscoso**: Sin fricción interna.
3.  **Laminar**: Flujo ordenado, sin remolinos.

## Ecuación de continuidad

*Lo que entra, debe salir.* Si el fluido es incompresible, el caudal ($Q$, volumen por tiempo) se conserva a lo largo del tubo.

$$ Q = A_1 v_1 = A_2 v_2 $$

*   $A$: Área transversal.
*   $v$: Velocidad promedio.

### Consecuencia crítica
Si el tubo se estrecha ($A$ disminuye), el fluido se acelera ($v$ aumenta).

---
:::{note} Flujo sanguíneo y continuidad
```{include} ../examples/09-sistema-circulatorio.md
```
:::

## Ecuación de Bernoulli

Es la conservación de la energía aplicada a fluidos. Relaciona presión ($P$), velocidad ($v$) y altura ($y$).

$$ P + \frac{1}{2}\rho v^2 + \rho g y = \text{constante} $$

### Interpretación
En un tubo horizontal ($y_1 = y_2$):
*   Mayor velocidad $\implies$ Menor presión.
*   Menor velocidad $\implies$ Mayor presión.

## 🔬 Aplicaciones

### Efecto Venturi
Para inyectar oxígeno o nutrientes en una corriente de líquido, se puede usar un estrechamiento en el tubo. La velocidad aumenta, la presión baja, y succiona el fluido externo.

### Aneurismas
Si una arteria se dilata (aneurisma), el área aumenta $\rightarrow$ velocidad disminuye $\rightarrow$ **presión aumenta**.
Este aumento de presión dilata aún más la pared debilitada. ¡Un círculo vicioso explicado por Bernoulli!

---

## ✍️ Ejercicios propuestos

```{include} ../exercises/09-jeringa-estenosis.md
```



## 🧪 Actividades

Diseño de Biorreactor: Calcular caudales y diámetros de tuberías usando la ecuación de continuidad.


👉 [Ir a la actividad](../activities/09-diseno-biorreactor.md)

## 📝 Evaluación

- **Sumativa**: Proyecto de Diseño (Fase 1): Esquema básico de flujo en un biorreactor y cálculos asociados.


👉 [Ir a la evaluación](../evaluations/09-sumativa-proyecto-biorreactor.md)

## 📚 Referencias

- [1] Wilson, J., Buffa, A., & Lou, B. (2007). Física (6.ª ed.). Pearson-Prentice Hall., Sección 9.4, pág. 319-324
- [2] Jou Mirabent, D. (2009). Física para ciencias de la vida (2.ª ed.). McGraw-Hill España. https://elibro.net/es/lc/itcr/titulos/50165, Ejemplos 3.4, 3.5 y 3.6

