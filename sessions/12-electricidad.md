---
title: Electricidad
subtitle: Semana 12
subject: Semana 12
session:
  number: 12
  duration: TBD
  modality: Presencial
course: Física para Biotecnología
authors:
- name: Escuela de Física
keywords:
- Electricidad
learning_objectives:
- Describir la interacción entre cargas eléctricas mediante la Ley de Coulomb.
- Explicar el concepto de potencial eléctrico y dipolo eléctrico.
- Definir la función de un condensador en un circuito.
activities: Modelado de la membrana celular como un capacitor biológico.
evaluation:
- type: Formativa
  description: 'Resolución de problemas: Interacciones electrostáticas en biomoléculas.'
references:
- text: '[2] Jou Mirabent, D. (2009). Física para ciencias de la vida (2.ª ed.). McGraw-Hill
    España. https://elibro.net/es/lc/itcr/titulos/50165'
  pages: Secciones 6.1 a 6.4, pág. 263-278
- text: '[3] Ortuño, M. (2019). Física para las ciencias de la vida. Editorial Tébar
    Flores. https://elibro.net/es/lc/itcr/titulos/124788'
  pages: Secciones 13.1 a 13.6, pág. 233-246
---

![](https://img.shields.io/badge/-Electricidad-lightgrey) ![](https://img.shields.io/badge/-Interacción_entre_cargas,_ley_de_Coulomb,_potencial-lightgrey) ![](https://img.shields.io/badge/-Dipolo_eléctrico-lightgrey) ![](https://img.shields.io/badge/-Condensadores-lightgrey) ![](https://img.shields.io/badge/-Circuitos_eléctricos_y_ley_de_Ohm-lightgrey)

:::{note} Objetivos
Al completar esta lección, serás capaz de:
1. Describir la interacción entre cargas eléctricas mediante la Ley de Coulomb.
2. Explicar el concepto de potencial eléctrico y dipolo eléctrico.
3. Definir la función de un condensador en un circuito.
:::

## Introducción

La biología es eléctrica. Desde la estructura del ADN (cargado negativamente) hasta los impulsos nerviosos, las interacciones electrostáticas gobiernan la estructura y función molecular. En esta sesión sentaremos las bases: carga, campo y potencial.

## Carga eléctrica ($q$)

Propiedad fundamental de la materia.
*   **Tipos**: Positiva (+) y Negativa (-).
*   **Cuantización**: $e = 1.602 \times 10^{-19} \text{ C}$.
*   **Biotech**:
    *   **ADN**: Polianión (cargado negativamente por los fosfatos).
    *   **Proteínas**: Su carga neta depende del pH del medio (Punto Isoeléctrico).

## Ley de Coulomb

Describe la fuerza entre dos cargas puntuales.
$$ F = K \frac{|q_1 q_2|}{r^2} $$

*   $K \approx 9 \times 10^9 \text{ N} \cdot \text{m}^2/\text{C}^2$.
*   **Interacción**: Cargas iguales se repelen, opuestas se atraen.
*   En medios biológicos (agua), esta fuerza se reduce drásticamente por la **constante dieléctrica** del agua ($\approx 80$). Es lo que permite que las sales se disuelvan.

## Campo eléctrico ($\vec{E}$)

Región del espacio donde una carga siente fuerza.
$$ \vec{F} = q \cdot \vec{E} $$

### 🔬 Aplicación: Electroforesis
Técnica fundamental para separar biomoléculas.
*   Se aplica un campo $\vec{E}$ constante.
*   Las moléculas cargadas (ADN, Proteínas) sienten una fuerza $F_E = qE$.
*   Se mueven a través de un gel que ofrece resistencia (fricción $F_d$).
*   Velocidad final: $v = \frac{qE}{f}$ (depende de la carga y la fricción/tamaño).

:::{note} Fuerza eléctrica sobre ADN
```{include} ../examples/12-fuerza-adn-campo.md
```
:::

## Potencial eléctrico ($V$)

Energía potencial por unidad de carga.
*   Unidad: **Volt (V)** ($1 \text{ V} = 1 \text{ J/C}$).

### Dipolo Eléctrico
Dos cargas opuestas separadas por una distancia.
*   **Agua**: Es un dipolo permanente. Esto la hace un excelente solvente para iones.
*   Muchos aminoácidos y hélices alfa tienen momentos dipolares.

## Condensadores (Capacitores)

Dispositivo para almacenar carga y energía.
*   **Capacitancia ($C$)**: $C = Q/V$.
*   **Membrana Celular**: Es un condensador biológico. La bicapa lipídica (aislante) separa cargas internas (-) y externas (+), permitiendo a la célula almacenar energía eléctrica para generar impulsos (potenciales de acción).

## ✍️ Ejercicios propuestos

```{include} ../exercises/12-fuerza-membrana.md
```



## 🧪 Actividades

Modelado de la membrana celular como un capacitor biológico.


👉 [Ir a la actividad](../activities/12-membrana-capacitor.md)

## 📝 Evaluación

- **Formativa**: Resolución de problemas: Interacciones electrostáticas en biomoléculas.


👉 [Ir a la evaluación](../evaluations/12-formativa-problemas-electrostatica.md)

## 📚 Referencias

- [2] Jou Mirabent, D. (2009). Física para ciencias de la vida (2.ª ed.). McGraw-Hill España. https://elibro.net/es/lc/itcr/titulos/50165, Secciones 6.1 a 6.4, pág. 263-278
- [3] Ortuño, M. (2019). Física para las ciencias de la vida. Editorial Tébar Flores. https://elibro.net/es/lc/itcr/titulos/124788, Secciones 13.1 a 13.6, pág. 233-246

