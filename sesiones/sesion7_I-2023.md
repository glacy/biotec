# Estática de Fluidos {#cap:cap7}

<figure id="fig:estados">
<img src="planeamiento_didactico/figuras/estados-de-la-materia.png"
style="width:5in" />
<p><span style="color: c5"><span>Fuente: Equipo editorial, Etecé.
<em>Estados Sólido, Líquido y Gaseoso</em> (2023). URL:<a
href="https://humanidades.com/estados-solido-liquido-gaseoso/">https://humanidades.com/estados-solido-liquido-gaseoso/</a></span></span></p>
<figcaption>Estados de agregación de la materia.</figcaption>
</figure>

El término *fluido* hace referencia a sustancias ya sea líquidas o
gaseosas. Ambos estados de la materia se caracterizan por no ser capaces
de mantener una forma definida, debido a la falta de rigidez, como es el
caso de los sólidos. En el caso de los líquidos, estos tienden a tomar
la forma del recipiente que los contiene, pero poseen un volumen fijo.
Los gases, por otro lado, no poseen ni volumen ni forma definidos: se
expanden hasta adquirir la forma y el volumen del recipiente que los
contiene.\
Primero analizaremos situaciones en las que los fluidos se mantienen
*estáticos*; es decir, en reposo. Luego analizaremos fluidos en
movimiento (*flujos*).\
La estática de fluidos se refiere al estudio del comportamiento de los
fluidos en reposo o en equilibrio, y es fundamental en aplicaciones como
la centrifugación, la filtración y la microfluídica. En la
biotecnología, la estática de fluidos se utiliza para manipular muestras
biológicas a través de técnicas como la sedimentación, donde las
partículas se separan en función de sus densidades, y la filtración, que
se utiliza para separar componentes de una muestra basándose en el
tamaño de las partículas.\
Los fluidos son indispensables para la vida; pensemos solamente en el
papel que tienen por ejemplo el agua, la sangre, la atmósfera, o el aire
en nuestras vidas.\

## Fluidos: densidad

Al considerar fluidos, debido a que no poseen forma definida, sino que
adoptan la forma de su contenedor; resulta conveniente definir su
*densidad*, como la razón entre su masa y el volumen que ocupan:

$$\rho=\frac{m}{V}=\frac{\mbox{masa}}{\mbox{volumen}},$$

es decir, la densidad es la cantidad de masa por unidad de volumen de
una sustancia. En el Sistema Internacional de Unidades el volumen se
expresa en kg/m$^{3}$.\
La Tabla [1.1](#tab:dens){reference-type="ref" reference="tab:dens"}
lista la densidades de algunos fluidos y sólidos comunes.\

:::: center
::: {#tab:dens}
          **Material**           **Densidad (kg/m**$\mathbf{^{3})}$   **Material**    **Densidad (kg/m**$\mathbf{^{3})}$
  ----------------------------- ------------------------------------ --------------- ------------------------------------
   Aire (1 atm, 20$^{\circ}$C)                  1.20                  Hierro, acero           7.8$\tentimes{3}$
             Etanol                      0.81$\tentimes{3}$              Bronce               8.6$\tentimes{3}$
             Benceno                     0.90$\tentimes{3}$               Cobre               8.9$\tentimes{3}$
              Hielo                      0.92$\tentimes{3}$               Plomo               11.3$\tentimes{3}$
       Agua (4$^{\circ}$C)               1.00$\tentimes{3}$             Mercurio              13.6$\tentimes{3}$
             Sangre                      1.06$\tentimes{3}$                Oro                19.3$\tentimes{3}$

  : Densidades de algunas sustancias comunes a temperaturas comunes.
:::
::::

La *gravedad específica*[^1], $\rho_{\Mbox{esp}}$, de un material se
define como la razón entre su densidad ($\rho$) y la del agua a
4$^{\circ}$C:

$$\rho_{\Mbox{esp}}=\frac{\rho}{\rho_{\Mbox{agua}}}=\frac{\mbox{densidad del material}}{\mbox{densidad del agua}}$$

::: wwteorema
Ejemplo El etanol tiene una densidad de 0.81$\tentimes{3}$ kg/m$^{3}$.

1.  Exprese la densidad del etanol en g/cm$^{3}$.\
    [$$\rho_{\Mbox{etanol}}=  \left(0.81\tentimes{3} \frac{\mbox{kg}}{\mbox{m}^{3}} \right)\times \left(\frac{1000 \units{g}}{1\units{kg}}\right) \times \left(\frac{1\units{m}}{100\units{cm}}\right)^{3}=0.81\units{g/cm}^{3}$$]{style="color: black"}

2.  ?'cuál es la gravedad específica del etanol?\
    [$$\rho_{\Mbox{esp, etanol}}=\frac{\rho_{\Mbox{etanol}}}{\rho_{\Mbox{agua}}}=\frac{0.81\tentimes{3}\units{kg/m}^{3}}{1\tentimes{3}\units{kg/m}^{3}}=0.81$$]{style="color: black"}

3.  ?'cuántos gramos hay etanol hay en un litro de etanol?\
    [Como $$m=\rho V$$ y 1 L = 1$\tentimes{-3} \units{m}^{3}$, entonces
    en 1 L hay
    $$m=\left(0.81\tentimes{3} \frac{\units{kg}}{\units{m}^{3}} \right)\times \left( 1 \tentimes{-3} \units{m}^{3}\right)=0.81 \units{kg}=810\units{ g de etanol}.$$]{style="color: black"}
:::

\

## Fluidos: la presión

Cuando un fluido $-$ya sea un líquido o un gas$-$ se encuentra en
reposo, este ejerce una fuerza perpendicular sobre las superficies de su
contendor. La fuerza normal (perpendicular) que ejerce un fluido por
unidad de superficie se denomina *presión*

$$p=\frac{F_\perp}{A}=\frac{\mbox{fuerza perpendicular}}{\mbox{\'area superficial}}$$

<figure id="fig:presion">

<figcaption>La <em>presión</em> es la fuerza perperdincular por unidad
de área.</figcaption>
</figure>

En el Sistema Internacional de Unidades, la presión se expresa en
*pascales* (Pa): $$1\units{Pa}=1\units{N/m}^{2}.$$

En la Tabla [1.2](#tab:presion){reference-type="ref"
reference="tab:presion"} se muestran otras cantidades utilizadas para
medir presión y su equivalente en kPa.\

:::: center
::: {#tab:presion}
       **Unidad**        **Equivalente en kPa**
  --------------------- ------------------------
      1 kg/cm$^{2}$               98.1
   1 psi o lb/in$^{2}$            6.89
         1 mmHg                  0.1333
          1 bar                   100
          1 atm                 101.325
         1 torr          0.1333 ($\sim$ 1 mmHg)

  : Unidades de presión
:::
::::

<figure id="fig:presion">
<img src="planeamiento_didactico/figuras/presion2.png"
style="width:5in" />
<p><span style="color: c5"><span>Fuente: Wilson, J. Buffa, A. y Lou, B
(2007). Física. Sexta edición. México: Pearson-Prentice
Hall.</span></span></p>
<figcaption>La presión adicional a una profundidad <span
class="math inline"><em>h</em></span> en un líquido se debe al peso del
líquido que está arriba: <span
class="math inline"><em>p</em> = <em>ρ</em><em>g</em><em>h</em></span>,
donde <span class="math inline"><em>ρ</em></span> es la densidad del
líquido (que suponemos constante). Esto se ilustra para una columna
rectangular imaginaria de líquido.</figcaption>
</figure>

La presión que ejerce la atmósfera terrestre se conoce como *presión
atmosférica* ($p_{\Mbox{a}}$). Esta presión depende del clima, la
latitud y la altura respecto al nivel del mar, entre otros. Al nivel del
mar, se define la presión atmosférica como
$$p_{\Mbox{a}}=1\units{atm}=101 \,325 \units{Pa}=101,325\U{kPa}.$$

La presión puede medirse con dispositivos mecánicos que a menudo tienen
un resorte tensado (como el medidor de presión de los neumáticos). Otro
tipo de instrumento, llamado manómetro, utiliza un líquido
---generalmente mercurio--- para medir la presión.

![La *presión atmosférica* es la presión que ejerce el peso de la
atmósfera terrestre sobre la superficie
terrestre.](planeamiento_didactico/figuras/patm.png){#fig:presion
width="5in"}

### Presión absoluta y presión manométrica

Se llama *presión manométrica* a la diferencia entre la *presión
absoluta* y la presión atmosférica.

$$p_{\Mbox{manom\'etrica}}=p_{\Mbox{absoluta}}-p_{\Mbox{atm}} \\$$

<figure id="fig:medida_presion">
<img src="planeamiento_didactico/figuras/presion.png"
style="width:8.5in" />
<p><span style="color: c5"><span>Fuente: Wilson, J. Buffa, A. y Lou, B
(2007). Física. Sexta edición. México: Pearson-Prentice
Hall.</span></span></p>
<figcaption>Medición de la presión: En un manómetro de tubo abierto, la
presión de gas en el recipiente se equilibra con la presión de la
columna de líquido, y con la presión atmosférica que actúa sobre la
superficie abierta del líquido. La presión absoluta del gas es igual a
la suma de la presión atmosférica (<span
class="math inline"><em>p</em><sub><em>a</em></sub></span>) y <span
class="math inline"><em>ρ</em><em>g</em><em>h</em></span>, la presión
manométrica. b) Un medidor de presión de neumáticos mide presión
manométrica, la diferencia de la presión dentro del neumático y la
presión atmosférica. c) Un barómetro es un manómetro de tubo cerrado que
se expone a la atmósfera y, por lo tanto, sólo marca presión
atmosférica.</figcaption>
</figure>

::: wwteorema
Ejemplo

Las especificaciones técnicas de las llantas de un automóvil indican que
debe mantenerse una presión de 32 psi.

1.  ?'cuál es la presión manométrica de las llantas, en atmósferas? Los
    32 psi hacen referencia a la presión manométrica; por lo tanto
    $$p_{\Mbox{manom\'etrica}}=32 \units{psi}\times \left( \frac{6890\units{Pa}}{1\units{psi}} \right) \times \left( \frac{1\units{atm}}{101325\units{Pa}} \right)=2.18\units{atm}.$$

2.  ?'cuál es la presión absoluta de las llantas, en atmósferas?
    $$p_{\Mbox{absoluta}}=p_{\Mbox{manom\'etrica}}+1\units{atm}=3.18\units{atm}.$$
:::

Se define una *atmósfera estandar* como la presión que sostiene una
columna de mercurio de exactamente 76 cm de altura al nivel del mar a
0$^\circ$C.\

### Presión sanguínea

El efecto gravitatorio en la presión de los fluidos tiene un impacto
significativo en el sistema cardiovascular de los animales. Cuando un
animal está de pie o en una posición vertical, como es típico en humanos
y muchos mamíferos, la gravedad actúa sobre la columna de líquido
sanguíneo, aumentando la presión arterial en los vasos sanguíneos en las
partes más bajas del cuerpo, como las piernas.\
Por el contrario, cuando un animal está acostado, la gravedad tiene
menos efecto sobre la distribución de la sangre en el cuerpo, lo que
puede resultar en una presión arterial más uniforme en todo el sistema
circulatorio.\
Estas variaciones en la presión arterial debido al efecto gravitatorio
tienen importantes consecuencias para la circulación sanguínea y la
regulación de la presión arterial en los animales. Por ejemplo, cuando
un animal se pone de pie después de estar acostado durante un período de
tiempo, puede experimentar una disminución temporal en la presión
arterial en la parte superior del cuerpo y un aumento en la parte
inferior del cuerpo. Esto puede provocar mareos o incluso desmayos en
algunas situaciones.\
Además, el efecto gravitatorio puede influir en la distribución del
flujo sanguíneo en diferentes órganos y tejidos del cuerpo, lo que
afecta la entrega de oxígeno y nutrientes, así como la eliminación de
desechos metabólicos.

## Principio de Pascal

<figure id="fig:pascal">
<img src="planeamiento_didactico/figuras/pascal2.png"
style="width:5in" />
<p><span style="color: c5"><span>Fuente: Rafael Telles. <em>Principio de
Pascal</em> (2022).<br />
URL:<a
href="https://citeia.com/innovaciones-en-tecnologia/electricidad-basica/principio-de-pascal-explicado-facilmente">https://citeia.com/innovaciones-en-tecnologia/electricidad-basica/principio-de-pascal-explicado-facilmente</a></span></span></p>
<figcaption><em>Principio de Pascal:</em> el incremento en la presión de
un líquido que se encuentre en reposo, se transmite de forma uniforme en
todo el volumen y en todas direcciones.</figcaption>
</figure>

El *principio de Pascal*[^2] es aplicable a fluidos en reposo en un
contenedor; estableciendo que en un punto, un fluido ejerce la misma
presión en todas las direcciones. Esto también quiere decir que la
presión no es un vector, sino una cantidad escalar.\
De forma análoga, el principio de Pascal puede enunciarse diciendo que

> *Si la presión se incrementa en cierto punto, hay un incremento de la
> presión en la misma cantidad en cualquier otro punto del contenedor.*

Una de las aplicaciones más comunes de este principo, son los elevadores
hidráulicos. En estos dispositivos, dos cilíndros con sendos pistones,
se conectan por medio de un conducto. Los cilíndros se llenan con un
fluido. En la Figura [1.7](#fig:pascal){reference-type="ref"
reference="fig:pascal"} se muestra un esquema, donde al pistón más
pequeño (de área $A_{i}$) se le aplica una fuerza ($F_{i}$) aumentando
la presión del fluido en la misma proporción en [todo]{.underline} el
fluido; por lo que el pistón más grande (de área $A_{o}$) experimenta el
mismo aumento de presión. Por lo tanto
$$p_{i}=p_{o} \R \frac{F_{i}}{A_{i}}=\frac{F_{o}}{A_{o}} \R F_{o}=\left(\frac{A_{o}}{A_{i}}\right)F_{i}.$$

<figure id="fig:pascal">
<img src="planeamiento_didactico/figuras/pascal.png"
style="width:5in" />
<p><span style="color: c5"><span>Fuente: Wilson, J. Buffa, A. y Lou, B
(2007). Física. Sexta edición. México: Pearson-Prentice
Hall.</span></span></p>
<figcaption>Aplicación del principio de Pascal: prensa
hidráulica.</figcaption>
</figure>

Esto quiere decir que con un pequeño esfuerzo ($F_{i}$) se puede generar
una fuerza mayor ($F_{0}$), gracias a las propiedades de los líquidos.
La propiedad de los líquidos que permite explicar el principio de Pascal
se llama *incompresibilidad*.\

::: wwteorema
Ejemplo

Los pistones de un elevador hidraúlico tienen dimensiones de 315 cm$^2$
y 2000 cm$^2$. Se aplica una fuerza de 1000 N sobre el pistón pequeño,
desplazándolo 10 cm.

1.  ?'cuál es la carga máxima que se puede levantar con este dispositivo
    aplicando 1000 N?\
    $$F_2=mg=\left( \frac{2000 \units{cm}^2}{315\units{cm}^2}\right) \cdot 1000\units{N} \R m=647\units{kg}$$

2.  ?'cuánto se levantaría el pistón grande ?\
    Debido a la incompresibilidad del líquido
    $$A_1 d_1=A_2 d_2 \R d_2=1.57  \units{cm}.$$
:::

[^1]: El término "gravedad" es inadecuado, pues no hay relación con la
    fuerza de la gravedad; *densidad específica* sería más apropiado; o
    inclusive *densidad respecto al agua*.

[^2]: Blaise Pascal (1623-1662)
