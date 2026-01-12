---
title: Óptica y fenómenos luminosos
subtitle: Semana 15
subject: Semana 15
session:
  number: 15
  duration: TBD
  modality: Presencial
course: Física para Biotecnología
authors:
- name: Escuela de Física
keywords:
- Óptica
- fenómenos
- luminosos
learning_objectives:
- Distinguir las propiedades ondulatorias y corpusculares de la luz.
- Aplicar las leyes de reflexión y refracción a fenómenos ópticos.
- Relacionar fenómenos luminosos con aplicaciones biológicas como la bioluminiscencia.
activities: 'Espectroscopía casera: Construcción de un espectroscopio simple con un
  CD para analizar fuentes de luz.'
evaluation:
- type: Sumativa
  description: 'Cuestionario en línea: Fundamentos físicos de la espectroscopía UV-Vis.'
references:
- text: '[3] Ortuño, M. (2019). Física para las ciencias de la vida. Editorial Tébar
    Flores. https://elibro.net/es/lc/itcr/titulos/124788'
  pages: Secciones 17.1 a 17.3, pág. 303-307
---

![](https://img.shields.io/badge/-Óptica_y_fenómenos_luminosos-lightgrey) ![](https://img.shields.io/badge/-Naturaleza_de_la_luz-lightgrey) ![](https://img.shields.io/badge/-Reflexión_y_refracción-lightgrey) ![](https://img.shields.io/badge/-Refracción_total_interna-lightgrey) ![](https://img.shields.io/badge/-Espectroscopía-lightgrey) ![](https://img.shields.io/badge/-Bioluminiscencia-lightgrey) ![](https://img.shields.io/badge/-Efecto_Emerson-lightgrey)

:::{note} Objetivos
Al completar esta lección, serás capaz de:
1. Distinguir las propiedades ondulatorias y corpusculares de la luz.
2. Aplicar las leyes de reflexión y refracción a fenómenos ópticos.
3. Relacionar fenómenos luminosos con aplicaciones biológicas como la bioluminiscencia.
:::

## Introducción

La luz es nuestra principal sonda para interrogar la materia biológica. No solo la usamos para ver (microscopía), sino para medir concentraciones (espectrofotometría) y rastrear proteínas en tiempo real (fluorescencia). Entender la óptica es entender cómo "vemos" lo invisible.

## Naturaleza de la luz

La luz tiene naturaleza dual:
1.  **Onda Electromagnética**: Explica la difracción, interferencia y polarización.
    *   **Longitud de onda ($\lambda$)**: Determina el color (visible: 400-700 nm) y la resolución máxima.
2.  **Partícula (Fotón)**: Explica la absorción y emisión de energía. $E = hf$.

## Reflexión y refracción

### Ley de Snell
Cuando la luz pasa de un medio a otro (e.g., aire a agua), cambia su velocidad y se dobla.

$$ n_1 \sin(\theta_1) = n_2 \sin(\theta_2) $$

*   $n$: Índice de refracción ($c/v$).
    *   Aire $\approx 1.0$
    *   Agua $\approx 1.33$
    *   Aceite de inmersión $\approx 1.51$

### Reflexión total interna
Si la luz intenta salir de un medio denso a uno menos denso con un ángulo muy inclinado, queda atrapada dentro.
*   **Aplicación**: **Fibra óptica**. Usada en endoscopios para iluminar y ver dentro del cuerpo humano sin cirugía invasiva.

## Espectroscopía y Ley de Beer-Lambert

Las moléculas absorben longitudes de onda específicas. El ADN absorbe a 260 nm; las proteínas a 280 nm.
La cantidad de luz absorbida ($A$) depende linealmente de la concentración ($C$).

$$ A = \epsilon \cdot l \cdot C $$

*   $\epsilon$: Coeficiente de extinción molar (propio de la molécula).
*   $l$: Longitud del camino óptico (ancho de la cubeta, usualmente 1 cm).
*   **Biotech**: Es la forma estándar de cuantificar ADN o biomasa bacteriana ($OD_{600}$).

:::{note} Cálculo de concentración (Beer-Lambert)
```{include} ../examples/15-ley-beer-lambert.md
```
:::

## Fluorescencia y bioluminiscencia

*   **Fluorescencia**: Absorber un fotón de alta energía (azul/UV) y emitir uno de menor energía (verde/rojo).
    *   Ejemplo: **GFP (Green Fluorescent Protein)**.
*   **Bioluminiscencia**: Producción de luz por una reacción química (enzima luciferasa).
    *   Ejemplo: Luciérnagas, bacterias marinas. No requiere luz externa.

---

## ✍️ Ejercicios propuestos

```{include} ../exercises/15-dna-cuantificacion.md
```



## 🧪 Actividades

Espectroscopía casera: Construcción de un espectroscopio simple con un CD para analizar fuentes de luz.


👉 [Ir a la actividad](../activities/15-espectroscopia-casera.md)

## 📝 Evaluación

- **Sumativa**: Cuestionario en línea: Fundamentos físicos de la espectroscopía UV-Vis.


👉 [Ir a la evaluación](../evaluations/15-sumativa-cuestionario-espectroscopia.md)

## 📚 Referencias

- [3] Ortuño, M. (2019). Física para las ciencias de la vida. Editorial Tébar Flores. https://elibro.net/es/lc/itcr/titulos/124788, Secciones 17.1 a 17.3, pág. 303-307

