---
title: Cantidades angulares, movimiento circular uniforme y aceleración centrípeta
subtitle: Semana 5
subject: Semana 5
session:
  number: 5
  duration: TBD
  modality: Presencial
course: Física para Biotecnología
authors:
- name: Escuela de Física
keywords:
- Cantidades
- angulares,
- movimiento
- circular
- uniforme
- aceleración
- centrípeta
learning_objectives:
- Definir las unidades de medida angulares
- Describir y calcular la rapidez y la velocidad angulares y su relación con la rapidez
  tangencial
- Describir el movimiento circular uniforme
- Calcular la aceleración centrípeta
activities: 'Desafío de la ultracentrífuga: Calcular RPM vs g para protocolos de separación
  de orgánulos reales.'
evaluation:
- type: Sumativa
  description: 'Informe técnico: Validación de protocolo de centrifugación (cálculos
    de fuerza g).'
references:
- text: '[1] Wilson, J., Buffa, A., & Lou, B. (2007). Física (6.ª ed.). Pearson-Prentice
    Hall.'
  pages: Secciones 5.1 a 5.6, pág. 140-167
---

![](https://img.shields.io/badge/-Cantidades_angulares,_movimiento_circular_uniforme_y_aceleración_centrípeta-lightgrey) ![](https://img.shields.io/badge/-Posición_y_desplazamiento_angular-lightgrey) ![](https://img.shields.io/badge/-Rapidez,_velocidad_y_aceleración_angular-lightgrey) ![](https://img.shields.io/badge/-Movimiento_circular_uniforme-lightgrey) ![](https://img.shields.io/badge/-Aplicación:_la_centrífuga-lightgrey)

:::{note} Objetivos
Al completar esta lección, serás capaz de:
1. Definir las unidades de medida angulares
2. Describir y calcular la rapidez y la velocidad angulares y su relación con la rapidez tangencial
3. Describir el movimiento circular uniforme
4. Calcular la aceleración centrípeta
:::

## Introducción

Pocas herramientas son tan omnipresentes en un laboratorio de biotecnología como la **centrífuga**. Desde separar suero sanguíneo hasta precipitar ADN, la centrifugación aprovecha los principios del movimiento circular para amplificar la sedimentación. Entender la física detrás de las "g-force" es vital para seguir protocolos y cuidar el equipo.

## Cinemática angular

Para describir objetos que giran, cambiamos metros por radianes.

### Desplazamiento angular ($\theta$)
Ángulo barrido. Se mide en radianes ($2\pi \text{ rad} = 360^\circ$).

### Velocidad angular ($\omega$)
Rapidez de giro.
$$ \omega = \frac{\Delta \theta}{\Delta t} $$
*   Unidades: rad/s.
*   En equipos de laboratorio, es común usar **RPM** (revoluciones por minuto).
    *   Conversión: $1 \text{ RPM} = \frac{2\pi}{60} \text{ rad/s} \approx 0.1047 \text{ rad/s}$.

## Relación lineal-angular

Si un punto está a una distancia $r$ (radio) del centro de giro:

*   **Velocidad tangencial ($v$)**: $v = \omega r$
    *   *Nota*: Puntos más alejados del centro se mueven más rápido linealmente, aunque tengan la misma velocidad angular.

## Aceleración centrípeta ($a_c$)

En el Movimiento Circular Uniforme (MCU), aunque la rapidez sea constante, la dirección cambia continuamente. Esto requiere una aceleración dirigida hacia el centro.

$$ a_c = \frac{v^2}{r} = \omega^2 r $$

Esta aceleración es la responsable de la "fuerza g" aparente que experimentan las muestras.

## 🔬 Aplicación crítica: La centrífuga y FCR

En el laboratorio, no solemos hablar de $a_c$ en $\text{m/s}^2$, sino de **Fuerza Centrífuga Relativa (FCR o RCF)**, expresada en veces la gravedad ($xg$).

### Fórmula de Conversión RCF

$$ RCF (g) = \frac{\omega^2 r}{g} $$

Usando RPM y radio en centímetros:

$$ RCF = 1.118 \times 10^{-5} \times r_{(\text{cm})} \times (RPM)^2 $$

:::{warning} ¡Cuidado con el radio!
En un rotor, $r$ cambia dependiendo de dónde esté la muestra.
*   $r_{min}$: Parte superior del tubo.
*   $r_{max}$: Fondo del tubo (donde se forma el pellet).
Los protocolos suelen especificar $r_{max}$ o un promedio. Usar el radio incorrecto en el cálculo puede arruinar una separación delicada.
:::

:::{note} Conversión RPM a fuerza g
```{include} ../examples/05-calculo-g-force.md
```
:::

## Ultracentrifugación

Las ultracentrífugas giran a velocidades extremas (> 100,000 RPM), generando fuerzas de hasta 1,000,000 $g$. Esto permite separar partículas muy pequeñas como:
*   Ribosomas
*   Virus
*   Grandes complejos proteicos

El análisis teórico de la velocidad de sedimentación en función de la aceleración centrípeta definió el **coeficiente Svedberg (S)**, usado para clasificar subunidades ribosomales (e.g., 16S, 18S).

## ✍️ Ejercicios Propuestos

```{include} ../exercises/05-bombeo-cardiaco.md
```



## 🧪 Actividades

Desafío de la ultracentrífuga: Calcular RPM vs g para protocolos de separación de orgánulos reales.


👉 [Ir a la actividad](../activities/05-desafio-ultracentrifuga.md)

## 📝 Evaluación

- **Sumativa**: Informe técnico: Validación de protocolo de centrifugación (cálculos de fuerza $g$).


👉 [Ir a la evaluación](../evaluations/05-sumativa-informe-centrifugacion.md)

## 📚 Referencias

- [1] Wilson, J., Buffa, A., & Lou, B. (2007). Física (6.ª ed.). Pearson-Prentice Hall., Secciones 5.1 a 5.6, pág. 140-167

