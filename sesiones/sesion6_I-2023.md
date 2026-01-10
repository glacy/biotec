# Sólidos y módulos de elasticidad {#cap:cap6}

La materia, de acuerdo con distinciones físicas generales, por lo
general se divide en tres fases: sólida, líquida y gaseosa. Un sólido
tiene forma y volumen definidos. Un líquido tiene un volumen más o menos
definido; pero asume la forma del recipiente que lo contiene. Un gas
adopta la forma y el volumen de su recipiente. Los sólidos y líquidos
también se conocen como materia condensada. Llamamos colectivamente
fluidos a los gases y líquidos. Un fluido es una sustancia que puede
fluir; los líquidos y los gases fluyen, pero los sólidos no.

## Deformaciones de los materiales

Una descripción sencilla de los sólidos es que se componen de partículas
llamadas átomos, los cuales se mantienen unidos rígidamente por fuerzas
interatómicas.\
La *elasticidad* es la rama de la mecánica de los sólidos que estudia
las deformaciones de los cuerpos bajo la acción de fuerzas. Se dice que
un material es *elástico* cuando es capaz de soportar esfuerzos sin
deformarse permanentemente. Es decir, una vez que desaparece el motivo
de la deformación, el material recupera total o parcialmente su forma y
su tamaño inicial.\
Las propiedades de los materiales; sean estos deformables o no, depende
de las fuerzas de interacción entre sus moléculas.\

<figure id="fig:solido-elastico">
<img src="planeamiento_didactico/figuras/solido_elastico.png"
style="width:3.5in" />
<p><span style="color: c6"><span>Fuente: Wilson, J. Buffa, A. y Lou, B
(2007). Física. Sexta edición. México: Pearson-Prentice
Hall.</span></span> <span id="fig:solido-elastico"
data-label="fig:solido-elastico"></span></p>
<figcaption><em>Sólido elástico</em>: La naturaleza elástica de las
fuerzas interatómicas se representa de forma simplista como resortes
que, al igual que tales fuerzas, se oponen a la
deformación.</figcaption>
</figure>

Al definir el efecto de una fuerza sobre un objeto deformable, se define
el *esfuerzo* ($\sigma$), como la fuerza ($F$) aplicada por unidad de
área ($A$):

$$\sigma=\frac{F}{A}.$$

Los tipos básicos de deformación son tracción, compresión, torsión,
flexión y tangencial (o cortante). Ver Figura
[1.2](#fig:esfuerzos){reference-type="ref" reference="fig:esfuerzos"}.

![Distintos tipos de
esfuerzos.](planeamiento_didactico/figuras/esfuerzos.png){#fig:esfuerzos}

### Compresión y tracción

Cuando un cuerpo sólido experimenta dos fuerzas de igual magnitud pero
en direcciones opuestas, el mismo no se acelera, pero se deforma. La
deformación depende del tipo de material que compone el cuerpo y de su
forma geométrica. Para deformaciones pequeñas, la mayoría de los cuerpos
muestran un comportamiento en el cual la deformación que experientan es
directamente proporcional a la tensión a la que son sujetos.\

<figure id="fig:trac">
<div class="center">
<img src="planeamiento_didactico/figuras/traccion_compresion.png"
style="width:5in" />
<p><span style="color: c6"><span>Fuente: Wilson, J. Buffa, A. y Lou, B
(2007). Física. Sexta edición. México: Pearson-Prentice
Hall.</span></span></p>
</div>
<figcaption>Esfuerzos de tensión (tracción) y compresión en una
barra.</figcaption>
</figure>

Considere una barra de longitud $L$ y sección transversal $A$ a la que
se le aplican dos fuerzas opuestas de magnitud $F$, como se muestra en
la Figura [1.3](#fig:trac){reference-type="ref" reference="fig:trac"}.
La deformación, $\epsilon$, está definido por la razón entre el cambio
de longitud que experimenta y la longitud original:

$$\epsilon=\frac{\Delta L}{L_0}.
\label{eq:def}$$

Para deformaciones pequeñas, esta cantidad depende de la tensión
aplicada, del material del que está hecho el cuerpo y de su geometría.
Estas características las expresamos diciendo que

$$\epsilon=\frac{1}{Y}\left(\frac{F}{A} \right),
\label{eq:elas}$$ donde $Y$ es una constante característica del grado de
rigidez de cada material, llamado *módulo de Young* y $A$ representa el
área transversal del cuerpo. La cantidad entre paréntesis en la ecuación
[\[eq:elas\]](#eq:elas){reference-type="eqref" reference="eq:elas"}

$$\sigma=\frac{F}{A}, 
\label{eq:esf}$$ recibe el nombre de *esfuerzo*. El esfuerzo máximo que
resiste un cuerpo antes de romperse, se conoce como *esfuerzo de
rotura*. En la Tabla [1.1](#tab:Y){reference-type="ref"
reference="tab:Y"} se listan los esfuerzos de rotura,
$\sigma_{\Mbox{m}}$, y los módulos de Young de algunos materiales.
Debido a que un cuerpo puede responder de forma distinta ante tensiones
de tracción o compresión, la Tabla [1.1](#tab:Y){reference-type="ref"
reference="tab:Y"} especifíca si los valores de $Y$ o
$\sigma_{\Mbox{m}}$ corresponden a esfuerzos de tracción o compresión;
los primeros a la izquierda y los segundos a la derecha de la raya de
separación.\
Podemos resumir las ecuaciones
[\[eq:def\]](#eq:def){reference-type="eqref" reference="eq:def"},
[\[eq:elas\]](#eq:elas){reference-type="eqref" reference="eq:elas"} y
[\[eq:esf\]](#eq:esf){reference-type="eqref" reference="eq:esf"}
diciendo que la deformación por el módulo de Young es igual al esfuerzo:
$$\epsilon Y = \sigma$$

:::: center
::: {#tab:Y}
  **Material**        **Y ($10^{9}\units{N/m}^{2}$)[$^*$]{style="color: c2"}**   **$\sigma_{\Mbox{m}} (10^{7}\units{N/m}^{2}$)**[$^*$]{style="color: c2"}
  ------------------ ---------------------------------------------------------- --------------------------------------------------------------------------
  Acero                                         200                                                             50 $|$ \|
  Cobre                                         120                                                             40 $|$ \|
  Madera                                         60                                                             \| $|$ 20
  Hueso                                                                         
  Fémur humano                                16 $|$ 9                                                          12 $|$ 17
  Fémur de caballo                            23 $|$ 8                                                          12 $|$ 14
  Vértebra humana                          0.17 $|$ 0.09                                                       0.12 $|$ 0.2
  Diente                                      \| $|$ 7                                                          \| $|$ 18
  Uñas                                      0.15 $|$ \|                                                         1.8 $|$ \|
  Tendón                                    0.02 $|$ \|                         
  Vasos sanguíneos                         0.0002 $|$ \|                        

  : Módulo de Young y esfuerzos de ruptura de diversos materiales
:::
::::

::: minipage
[$^*$ En los casos que se reportan dos valores, el primero corresponde
al valor en *tracción* y el segundo a *compresión*.]{style="color: c2"}
:::

Los valores numéricos deben tomarse como representativos, ya que estas
propiedades muestran cierta dependencia con las características de cada
muestra.

<figure id="fig:fuerza-cortante">
<div class="center">
<img src="planeamiento_didactico/figuras/esfuerzovsdeformacion.png"
style="width:5in" />
<p><span style="color: c6"><span>Fuente: Wilson, J. Buffa, A. y Lou, B
(2007). Física. Sexta edición. México: Pearson-Prentice
Hall.</span></span> <span id="fig:fuerza-cortante"
data-label="fig:fuerza-cortante"></span></p>
</div>
<figcaption>Gráfica de esfuerzo contra deformación para una varilla
metálica común es una línea recta hasta el límite proporcional. Luego
continúa la deformación elástica hasta que se alcance el límite de
elasticidad. Más allá de eso, la varilla sufrirá una deformación
permanente y en algún momento se romperá.</figcaption>
</figure>

### Esfuerzos *cortantes*

Otra forma de deformar un cuerpo elástico es con un esfuerzo cortante.
En este caso, la deformación se debe a la aplicación de una fuerza que
es tangencial a la superficie (ver figura
[1.5](#fig:fuerza-cortante){reference-type="ref"
reference="fig:fuerza-cortante"}). Se produce un cambio de forma sin un
cambio de volumen. La deformación de corte está dada por $x/h$, donde
$x$ es el desplazamiento relativo de las caras y $h$ es la distancia
entre ellas.\
Se define el *módulo de corte*, $S$, como

$$S=\frac{F/A}{x/h}\approx \frac{F/A}{\phi}.$$ donde $\phi$ se llama
*ángulo de corte*.\
En término generales, $S$ es aproximadamente $Y/3$ para muchos
materiales, lo que indica que hay una mayor respuesta a un esfuerzo
cortante que a un esfuerzo de tensión.

<figure id="fig:fuerza-cortante">
<div class="center">
<img src="planeamiento_didactico/figuras/fuerza_cortante.png"
style="width:3in" />
<p><span style="color: c6"><span>Fuente: Wilson, J. Buffa, A. y Lou, B
(2007). Física. Sexta edición. México: Pearson-Prentice
Hall.</span></span> <span id="fig:fuerza-cortante"
data-label="fig:fuerza-cortante"></span></p>
</div>
<figcaption>Esfuerzo cortante: Se produce cuando una fuerza se aplica
tangencialmente a una superficie. La deformación se mide en términos del
desplazamiento relativo de las caras del objeto, o del ángulo de corte
<span class="math inline"><em>ϕ</em></span>.</figcaption>
</figure>

### Flexión

La tracción y la compresión son deformaciones homogéneas, ya que todos
los puntos del cuerpo experimentan la misma tensión y por lo tanto se
deforman igual. Por esta razón, para esfuerzos de tracción o compresión
la forma del objeto no es relevante; mientras que para ciertos tipos de
esfuerzos, como la flexión y la torsión, la forma si es importante.\
La *flexión* es una deformación heterogénea, donde se sufre tanto
tracción como compresión. Esta deformación se muestra en la Figura
[1.6](#fig:flex){reference-type="ref" reference="fig:flex"}.\

<figure id="fig:flex">
<div class="center">
<img src="planeamiento_didactico/figuras/flexion.png"
style="width:3in" />
</div>
<figcaption>Flexión en una barra</figcaption>
</figure>

Si una fuerza $\VEC{F}$ se aplica sobre un cuerpo, a una distancia $r$
de un punto de pivote, el efecto de torsión que esta genera sobre el
objeto, denominado *torca* o *momento de torsión* está dado por
$$\tau=rF\sin \theta,$$ donde $\theta$ es el ángulo entre la dirección
de $\VEC{F}$ y $\VEC{r}$. Cuando este torque genera una flexión en el
cuerpo, la deformación está dada por $$\epsilon=\frac{x}{R},$$ donde $x$
es la distancia entre el punto que sufre la deformación y el eje de
simetría del cuerpo; y $R$ el radio de curvatura que describe la
deformación.\
Se puede mostrar que se cumple

$$\tau=\frac{Y\cdot I}{R}$$ donde $I$ es el *momento de inercia* del
cuerpo respecto a su eje de simetría a lo largo del cual se lleva a cabo
la flexión.

### Torsión

La Figura [1.7](#fig:torsion){reference-type="ref"
reference="fig:torsion"} muestra otro tipo de deformación que puede
sufrir un cuerpo; cuando esta se da por un par de torcas alrededor del
eje del cuerpo.

<figure id="fig:torsion">
<div class="center">
<img src="planeamiento_didactico/figuras/torsion.png"
style="width:3in" />
</div>
<figcaption>Torsión en una barra</figcaption>
</figure>

$$\phi=\frac{TL}{JG}$$

donde $\phi$ es el *angulo de torsión*, $T$ es el par de torsión, $J$ el
momento polar de inercia y $G$, el *módulo de rigidez*.

## Biomateriales

[Fuente: Villar, R.; López, C. y Cussó, F. (2013). Fundamentos físicos
de los procesos biológicos. Vol. 2: calor y dinámica de fluidos en los
seres vivos. (e-book v.1.). Editorial Club
Universit.]{style="color: c6"}\
Los seres vivos han desarrollado a lo largo de la evolución una enorme
variedad de materiales con propiedades y funciones muy distintas.
\[\...\] En la siguiente descripción de materiales biológicos se atiende
esencialmente a la función que cumplen los mismos en los seres que los
poseen. En orden a la función que cumplen en el organismo, se pueden
clasificar los biomateriales en tres grupos: materiales de tracción,
materiales flexibles y materiales rígidos. Como en casi cualquier
clasificación, la división no es completamente precisa. Todos los
materiales poseen en cierto grado las tres propiedades anteriores. Por
tanto, se intenta destacar aquella que sobresale funcionalmente.

### Materiales de tracción

Estos materiales son fibrosos, resistentes y poco extensibles, cuando se
les somete a esfuerzos de tracción, pero se deforman mucho más
fácilmente por esfuerzos de compresión o perpendiculares a la dirección
de las fibras.\
La característica estructural básica de estos materiales es que están
formados por fibras que forman cuerdas. Poseen una elevada rigidez a la
tracción, es decir, un elevado módulo de Young para estos esfuerzos, que
se debe a la orientación preferente de las fibras alineadas en una
dirección. Además, son muy flexibles, porque las fibras pueden deslizar
unas con respecto a otras y aliviar así las tensiones elásticas de
cizalla. Las fibras están formadas por disposiciones poliméricas de
proteínas y polisacáridos. Estas moléculas también forman parte de
materiales biológicos rígidos, pero, en ese caso, que se examina más
adelante, parte de las propiedades mecánicas se debe a la matriz que
sustenta a las fibras.\
En los materiales de tracción, las propiedades mecánicas vienen
dominadas por las propiedades de las fibras. Una característica general
de estos materiales es que las cadenas moleculares se agregan con orden
cristalino, por lo que se denominan polímeros cristalinos. Entre los
materiales biológicos de tracción, consideraremos la seda, el colágeno,
la celulosa y la quitina. Algunos polímeros cristalinos sintéticos de
propiedades análogas son el polietileno, el nailon y el teflón. En
general, el carácter cristalino del polímero le confiere una mayor
rigidez. Así, el módulo de Young de estos materiales es dos o tres
órdenes de magnitud superior al de los polímeros amorfos.\
\[\...\]\
Los módulos de Young de las sedas son del orden de magnitud de
$5\tentimes{9} \U{N m}^{-2}$ y varían, en unidades de
$10^9 \U{N m}^{-2}$, desde un valor de 2 para el hilo del capullo de la
araña de jardín hasta 10 para el de la mariposa de la seda. Los
esfuerzos de rotura por tracción pueden ser tres veces superiores a los
del acero, que es uno de los materiales artificiales con un mayor
esfuerzo de rotura.\

::: center
![image](planeamiento_didactico/figuras/tabla-propiedades-biomateriales.png){width="5in"}
:::

\[\...\]\
Diversos materiales biológicos pueden formar parte de estructuras de
tracción o, alternativamente, de materiales flexibles o rígidos. Entre
ellos, algunos de los más abundantes en distintas especies son el
**colágeno**, que es la fibra estructural básica del reino animal, y se
encuentra en varias estructuras flexibles. Es el componente básico de
algunas estructuras de tracción, como los tendones y ligamentos. No se
trata de una proteína única, sino de secuencias con contenido parecido
de aminoácidos.\
La **quitina** es el segundo material fibroso básico del reino animal,
especialmente abundante en estructuras de artrópodos, aunque también
existe en cierto número de plantas. Principalmente, forma parte de la
cutícula, que es la estructura esquelética externa de los artrópodos.
Como material de tracción, es la base del apodema o tendón de estos
animales.\
La **celulosa** es la más abundante de las sustancias fibrosas
naturales, pero su presencia en materiales de tracción es muy limitada.
Suele encontrarse como componente fibrilar con alto módulo de Young en
compuestos rígidos, como la madera. Sin embargo, los materiales de
tracción compuestos por celulosa proporcionan cierto número de fibras
textiles importantes, como el lino, el algodón o el cáñamo.\
\[\...\]\

### Materiales flexibles

Los materiales biológicos denominados flexibles son muy deformables
sinromperse, ya que su módulo de Young es bajo, mostrando propiedades
elásticas análogas a las del caucho. Están formados por moléculas de
cadena larga formando polímeros amorfos.\
Los biomateriales flexibles se clasifican en tres categorías. La primera
comprende a las proteínas con propiedades muy similares a las del
caucho, entre las que se encuentran la resilina, del sistema volador o
saltador de los insectos, la abductina, del ligamento interno de la
concha de los moluscos bivalvos, y la elastina, caucho proteico de los
vertebrados, presente, por ejemplo, en el ligamento de la nuca de los
ungulados. Suelen encontrarse en órganos que requieren almacenar energía
elástica para procesos cíclicos de velocidad relativamente alta.\
El segundo grupo lo constituyen una serie de biomateriales relacionados
con los tejidos conectivos blandos. Se les agrupa entre los materiales
flexibles y no con los de tracción, ya que contienen un componente
amorfo de alto módulo de Young, es decir, relativamente inextensible.
Entre los más estudiados se encuentran la mesoglea, tejido conectivo de
la pared corporal de la actinia *Metridium*, la piel de pájaros y
mamíferos, y las paredes del cuello uterino y de las arterias.\
El último grupo se halla en la frontera entre materiales flexibles y
rígidos. Son materiales que proporcionan sostén estructural, pero con
mucha flexibilidad, como el cartílago.

### Materiales rígidos

Los materiales rígidos tienen un comportamiento linealmente elástico, al
menos cuando están sometidos a los esfuerzos habituales. Sus componentes
básicos son esencialmente cerámicos: óxidos, carbonatos y fosfatos. Son
materiales rígidos y fuertes, con módulos de Young y esfuerzos de rotura
al menos un orden de magnitud superiores a los de los materiales
viscoelásticos y, por tanto, adecuados como elementos de soporte y de
defensa. No obstante, por su composición amorfa son frágiles, es decir,
fácilmente fracturables. Compensando esta deficiencia, algunos
biomateriales rígidos son una mezcla de elementos elásticos duros y de
sustancias viscoelásticas, es decir, de materiales compuestos. Entre los
biomateriales que clasificamos entre los rígidos compuestos se
encuentran la cutícula de los artrópodos, los huesos de los vertebrados,
la queratina, que forma parte del pelo de los mamíferos, el cuerno y los
cascos de ungulados, las escamas de reptil, la gorgonina de los corales
y el xilema de las plantas leñosas.\
Otros biomateriales rígidos se denominan pétreos y constan casi
exclusivamente de minerales, con una proporción no superior al 5 % en
peso de materia orgánica. En esta categoría se incluyen, por ejemplo,
las conchas de los moluscos, las espículas de algunas esponjas, las
cáscaras de huevo y los dientes de muchos animales.

\
