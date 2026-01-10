# Trabajo y energía {#cap:cap9}

El concepto de trabajo y energía es fundamental en la física y tiene
aplicaciones importantes en la biotecnología, especialmente en el
estudio de los procesos biológicos y la ingeniería de sistemas
biológicos. En términos generales, el trabajo se define como la
transferencia de energía que ocurre cuando una fuerza actúa sobre un
objeto y lo desplaza en la dirección de la fuerza. Por otro lado, la
energía es la capacidad de realizar trabajo.\
En el contexto de los seres vivos, la energía desempeña un papel crucial
en una amplia gama de procesos biológicos, desde el metabolismo celular
hasta el movimiento muscular.\
**Metabolismo Celular:** En las células vivas, la energía se utiliza
para llevar a cabo una variedad de procesos metabólicos, como la
síntesis de proteínas, la replicación del ADN y la señalización celular.
La energía necesaria para estos procesos proviene de la respiración
celular, donde las moléculas de glucosa se descomponen en moléculas más
simples como el ATP (adenosín trifosfato), que actúa como la moneda de
energía de la célula.\
**Movimiento Muscular:** En el cuerpo humano, el movimiento de los
músculos requiere energía en forma de ATP. Cuando un músculo se contrae,
las fibras musculares generan fuerza al desplazarse en relación con
otras fibras. Esta contracción muscular es impulsada por la energía
liberada por la hidrólisis del ATP, que proporciona la energía necesaria
para acortar las fibras musculares y generar movimiento.\
**Ingeniería de Tejidos y Biotecnología:** En la ingeniería de tejidos y
la biotecnología, el conocimiento sobre el trabajo y la energía es
esencial para diseñar sistemas biomiméticos que imiten las funciones y
los procesos biológicos. Por ejemplo, en la fabricación de órganos
artificiales, se deben comprender cómo la energía se transfiere y se
utiliza en los tejidos vivos para desarrollar andamiajes y cultivos
celulares que puedan integrarse eficientemente con el cuerpo humano.

![Para empujar un objeto pesado, \"alguien\" o \"algo\" requiere generar
*trabajo*.](planeamiento_didactico/figuras/empujoncamion.png){#fig:empujon
width="3.5in"}

## Trabajo

El trabajo, $W$, realizado por una fuerza [constante]{.underline}, de
magnitud $F$, al desplazar un objeto una distancia $s$, está dado por

donde $\theta$ es el ángulo que se forma entre la dirección de
aplicación de la fuerza y la dirección del desplazamiento.\

::: wwteorema
Ejemplo trabajo

Si la persona en la situación descrita en la Figura
[1.1](#fig:empujon){reference-type="ref" reference="fig:empujon"} aplica
una fuerza de 100 N, paralela a la rampa,
$$W_F=(100\U{N})(3\U{m})\cos(0^\circ)=300\U{J}$$
:::

Nótese que el trabajo es una cantidad física escalar. A partir de la
ecuación [\[eq:w\]](#eq:w){reference-type="eqref" reference="eq:w"}
$-$en particular por las propiedades de la funcion *coseno*$-$ el
trabajo que realiza una fuerza puede ser positivo, negativo o inclusive
ser nulo.\
Por ejemplo, al levantar un objeto pesado con nuestras extremidades
superiores, la fuerza muscular del biceps realiza trabajo positivo al
contraerse; mientras que al extenderse para descender el objeto, la
fuerza muscular es contraria al movimiento y el trabajo realizado es
negativo (ver Figura [1.2](#fig:biceps){reference-type="ref"
reference="fig:biceps"}).\

<figure id="fig:biceps">
<img src="planeamiento_didactico/figuras/fuerza_muscular.png"
style="width:4in" />
<p><span style="color: c6"><span>Fuente: Cussó et al. (2013).
Fundamentos físicos de los procesos biológicos. Volumen 1. e-book v.1.0.
Editorial Club Universitario.</span></span></p>
<figcaption>Trabajo hecho por el biceps braquial al contraerse
[izquierda] y al relajarse [derecha].</figcaption>
</figure>

En general, podemos decir que si

-   $W>0$, la fuerza que realiza dicho trabajo actúa a favor del
    movimiento,

-   $W<0$, la fuerza que realiza dicho trabajo actúa en contra del
    movimiento,

-   $W=0$, la fuerza que realiza dicho trabajo no se ve involucrada en
    el movimiento.

En el S.I, la unidad de trabajo es el $\mbox{N}\cdot \mbox{m}$, que
recibe el nombre de *joules* (J):
$$1\units{N}\cdot\units{m}=1 \units{J}=1\frac{\units{kg}\cdot \units{m}^{2}}{\units{s}^{2}}.$$

## Trabajo y energía cinética

La energía asociada al movimiento, también llamada *energía cinética*,
de un objeto de masa $m$, al moverse con rapidez $v$, está dada por

Cuando una fuerza neta acelera un objeto, cambiando su velocidad de un
valor inicial $v_{\Mbox{inicial}}$ a un valor final $v_{\Mbox{final}}$,
el trabajo neto que realiza está dado por el cambio de energía cinética
que experimenta el objeto:
$$W_{\Mbox{neto}}=\Delta K=\frac{1}{2}mv_{\Mbox{final}}^{2}-\frac{1}{2}mv_{\Mbox{inicial}}^{2}$$
Esta última expresión se conoce como *Teorema de trabajo-energía*.\

Note que la energía cinética tiene unidades de trabajo. Es decir, la
energía se expresa en juoles en el S.I.\
Otras unidades relacionadas con trabajo y energía bastante usadas son

::: {#tab:cal}
  **Unidad**                            **Equivalencia en J**
  ------------------------------------ -----------------------
  *ergio* (erg)                               $10^{-7}$
  *caloría* (cal)                              $4.18$
  *Caloría grande* (Cal)                       $4180$
  *kilowatt-hora* (kW$\cdot$ h)           $3.6\tentimes{6}$
  *electronvoltio* (eV)                  $1.6\tentimes{-19}$
  *British thermal unit* (BTU o BTu)      $257\units{cal}$

  : Algunas unidades de energía
:::

## Potencia

A la hora de considerar la cantidad de trabajo (energía) que se efectúa
por unidad de tiempo, se define la:

La potencia es el ritmo al que se transfiere la energía. La unidad de
potencia en el S.I es el *watt* (W) $$1\units{W}=1\units{J/s}.$$

Otras unidades relacionada con la potencia se indican en la Tabla
[1.2](#tab:W){reference-type="ref" reference="tab:W"}.\

::: {#tab:W}
  **Unidad**                  **Equivalencia en W**
  -------------------------- -----------------------
  *kilovatio* (kW)                   $1000$
  *caballo de fuerza* (hp)        $\approx 746$
  *caballo de vapor* (CV)         $\approx 735$

  : Algunas unidades de trabajo
:::

Un dispositivo que trabaje a una cierta potencia constante $P$
desarrolla, en un intervalo de tiempo $\Delta t$, una cantidad de
trabajo igual a $P\times \Delta t$.\
Se define así el *kilovatio-hora*, que es el trabajo realizado por un
dispositivo de un kilovatio de potencia trabajando durante una hora:
$$1 \U{kWh} = 10^3 \U{W} \times 3600 \U{s} = 3.6\tentimes{6} \U{J}$$

## Energía potencial gravitacional

Cuando un objeto se encuentra a una altura $h$ sobre un nivel de
referencia, su energía potencial gravitacional $U_{\Mbox{grav}}$, está
dada por $$U_{\Mbox{grav}}(h)=mgh$$

## Energía mecánica

La *energía mecánica* de un sistema está dada por la suma de la energía
cinética y potencial del sistema: $$E=K+U,$$

En un sistema asilado la *energía mecánica se conserva*, es decir

$$\begin{aligned}
\Delta E=&0\\
\Delta K =& -\Delta U\\
W=&-\Delta U
\end{aligned}$$

:::: wwteorema
Ejemplo conservación de la energía Considere el lanzamiento de un objeto
hacia arriba, con rapidez $v_0=4.0\U{m/s}$.\

::: center
![image](planeamiento_didactico/figuras/payaso.png){width="3in"}
:::

Tomando como referencia el punto de lanzamiento y denotando $h$ la
altura máxima $$\begin{aligned}
       E_{\Mbox{inicial}}=&\frac{1}{2}m v_0^2\\
       E_{\Mbox{final}}=&mgh
           
\end{aligned}$$ de donde $$h=\frac{v_0^2}{2g}=0.82\U{m.}$$
::::

En el caso que un sistema presente *fuerzas disipativas*, es decir, que
disipen energía, es posible aplicar el teorema de conservación de la
energía si consideramos la cantidad de energía que estas fuerzas
disipan, $W_{\Mbox{otras}}$, de manera que:

$$%\Delta K + \Delta U + \Delta W_{\Mbox{otras}}=0.
E_{\Mbox{inicial}}+W_{\Mbox{otras}}=E_{\Mbox{final}}$$

La fuerza disipativa más común es la fricción. Una característica de las
fuerzas disipativas, es que el trabajo que realizan depende de la
trayectoria particular en la que actuán.\
Una fuerza que no disipa energía se conoce como *fuerza conservativa*.
El trabajo que efectúa una fuerza conservativa no depende de la
trayectoria a lo largo de la cual actúa, solamente del desplazamiento
neto.

### La energía en los seres vivos

Los seres vivos poseen la importante propiedad de poder absorber y
utilizar la energía. Aunque los procesos de transformación de la energía
puedan ser extremadamente complicados, la ley de consevación de la
energía establece que la energía que se ingiere ha de ser igual a la que
se consume más la que se almacena y la que se disipa.\
Metabolismo es un término genérico de todas las reacciones químicas en
las que se descomponen o se \"queman\" alimentos para proporcionar
energía para el funcionamiento de un organismo.\
El metabolismo de los alimentos requiere un suministro de oxígeno, y
como producto de la combustión se libera dióxido de carbono. El valor
energético o valor calórico de un alimento es proporcional a la cantidad
de energía que puede proporcionar al quemarse en presencia de oxígeno.
Cada grupo de nutrientes energéticos $-$glúcidos o carbohidratos,
lípidos y proteínas$-$ tiene un valor calórico diferente y más o menos
uniforme en cada grupo. La Tabla [1.3](#tab:cal){reference-type="ref"
reference="tab:cal"} lista el contenido energético de los principales
grupos de alimentos, así como la cantidad de oxígeno requerida y la
cantidad de dióxido de carbono que libera.\

::: {#tab:cal}
  -------------- -------------------------- ----------------------- ---------------------
   **Alimento**   **Contenido energético**   **Oxígeno requerido**   **$CO_2$ liberado**
                        **(cal/g)**                **(L/g)**              **(L/g)**
     glúcidos               4070                     0.81                   0.81
    proteínas               4070                     0.74                   0.95
     lípidos                9020                     1.96                   1.39
  -------------- -------------------------- ----------------------- ---------------------

  : Contenido energético de los alimentos.
:::

En el caso de los animales, realizar trabajo positivo implica un cierto
gasto de energía; el cual puede medirse a través del consumo de oxígeno.
Se llama *eficiencia metabólica*, $e$, a la razón entre el trabajo
mecánico realizado ($W$) y la energía consumida ($E$):
$$e=\frac{W}{E}.$$ En el caso de los mamíferos, la eficiencia metabólica
es alrededor de 0.25; es decir, sólo un 25 % de la energía consumida se
transforma efectivamente en trabajo mecánico; mientras que el 75 % se
disipa en forma de calor en el organismo.\
El ritmo a la cual un organismo vivo consume la energía producida se le
denomina *tasa metabólica*. Por otro lado, la *tasa metabólica basal*
(TMB) es la cantidad mínima de energía por unidad de tiempo necesaria
para mantener la actividad vital. Para una persona de unos 70 kg,
$\mbox{TMB}\approx80 \units{W}$, los que 40 W se destinan al
funcionamiento del cerebro, 15 W al corazón y el resto a los otros
órganos internos. La tasa metabólica varía según el tipo de actividad
realizada; desde los 80 W mínimos hasta los 1500 W cuando se realiza
actividad física intensa.\
