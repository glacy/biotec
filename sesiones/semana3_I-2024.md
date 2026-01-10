# Operaciones vectoriales {#cap:cap3}

![Migración celular por quimiotaxis [Kohlasz
Solis](https://commons.wikimedia.org/wiki/File:Chtx5-esp.png)](planeamiento_didactico/figuras/migracion_celular.png){#fig:enter-label
width="5in"}

Las operaciones vectoriales desempeñan un papel fundamental en la
biotecnología al proporcionar herramientas matemáticas para describir y
comprender una amplia gama de fenómenos físicos y biológicos. En este
contexto, los vectores se utilizan para representar y analizar
magnitudes físicas como fuerzas, velocidades y desplazamientos, que son
críticas para comprender procesos biológicos y para el diseño y
optimización de tecnologías biotecnológicas. Desde la manipulación de
partículas y células en sistemas de microfluídica hasta la modelización
del movimiento celular y la fuerza en matrices de andamiaje para la
ingeniería de tejidos, las operaciones vectoriales nos permiten
cuantificar y predecir de manera precisa el comportamiento de sistemas
biológicos complejos.\
Por ejemplo, en el estudio de la migración celular, los vectores se
utilizan para representar la dirección y la velocidad de movimiento de
las células, lo que proporciona información crucial para entender
procesos como la cicatrización de heridas y la metástasis del cáncer.
Además, en el modelado de proteínas en 3D, las operaciones vectoriales
son fundamentales para describir la estructura y la interacción entre
los átomos constituyentes de las proteínas, lo que permite a los
investigadores comprender mejor su función y diseñar moléculas
terapéuticas con mayor precisión.

![predicción de la estructura tridimensional de las proteínas a partir
de su secuencia de aminoácidos.
[\[AlphaFold\]](https://alphafold.ebi.ac.uk/)](planeamiento_didactico/figuras/3d-model-of-a-protein.png){#fig:enter-label
width="4.5in"}

## Operaciones vectoriales {#operaciones-vectoriales}

La notación vectorial cartesiana es un sistema utilizado para
representar vectores en un espacio tridimensional utilizando coordenadas
cartesianas (ver Figura [1.3](#fig:xyz){reference-type="ref"
reference="fig:xyz"}).\

<figure id="fig:xyz">

<figcaption>Sistema de referencia cartesiano. <span
class="math inline"><em>A</em><sub><em>x</em></sub></span>, <span
class="math inline"><em>A</em><sub><em>y</em></sub></span> y <span
class="math inline"><em>A</em><sub><em>z</em></sub></span> se denominan
<em>componentes cartesianas</em> <span
class="math inline"><em>x</em></span>, <span
class="math inline"><em>y</em></span> y <span
class="math inline"><em>z</em></span>; respectivamente. <span
class="math inline"><em>ι̂</em></span>, <span
class="math inline">$\hat{\jmath}$</span> y <span
class="math inline"><em>κ̂</em></span> son vectores unitarios a los largo
de los ejes <span class="math inline"><em>x</em></span>, <span
class="math inline"><em>y</em></span> y <span
class="math inline"><em>z</em></span>; respectivamente.</figcaption>
</figure>

Tambiés es común, en el caso 2D el llamado *sistema de referencia
polar*, en el cual un vector se especifica a través de su *magnitud* y
*dirección* (ver Figura [1.4](#fig:polar){reference-type="ref"
reference="fig:polar"}).\

<figure id="fig:polar">

<figcaption>Sistema de coordenadas polar.</figcaption>
</figure>

Dado un punto en un plano (espacio 2D) con coordenadas cartesianas
$(A_x,A_y)$, es posible obtener las correspondientes coordenadas polares
mediante la transformación
$$|\VEC{A}|=A=\sqrt{A_x^2+A_y^2} \qquad \mbox{y} \qquad \theta= \arctan \left( \frac{A_y}{A_x}\right),$$

o de forma inversa

$$A_x=A \cos \theta \qquad \mbox{y} \qquad A_y=A \sin \theta.$$
Partiendo de la notación cartesiana $$\begin{aligned}
\VEC{A}=&(A_x,A_y)\\
=&A_x\HAT{\iota}+A_y\HAT{\jmath}.
\end{aligned}$$ definimos las siguientes operaciones vectoriales:

::: wwteorema
Ejemplo Un objeto se mueve con una velocidad dada por
$$\VEC{v}=(25\U{m/s})\HAT{\iota}-(15\U{m/s})\HAT{\jmath},$$ la rapidez
de su movimiento es de
$$v=|\VEC{v}|=\sqrt{(25\U{m/s})^2+(-15\U{m/s})^2}=30.8 \U{m/s}.$$
:::

::: wwteorema
Ejemplo La fuerza neta ($\VEC{F}_{\Mbox{neta}}$) que experimenta un
cuerpo de masa $m$ se relaciona con la aceleración ($\VEC{a}$):
$$\VEC{F}_{\Mbox{neta}}=m\VEC{a}$$ Si sobre un cuerpo de
$m=$`<!-- -->`{=html}10 kg actúa una fuerza neta de
$$\VEC{F}_{\Mbox{neta}}=(25\U{N})\HAT{\iota}-(75\U{N})\HAT{\jmath},$$
este experimentará una aceleración de
$$\VEC{a}=\left(\frac{1}{m}\right)\VEC{F}_{\Mbox{neta}}=(2.5\U{m/s}^2)\HAT{\iota}-(7.5\U{m/s}^2)\HAT{\jmath}$$
:::

::: wwteorema
Ejemplo La fuerza neta ($\VEC{F}_{\Mbox{neta}}$) que experimenta un
cuerpo está dada por
$$\VEC{F}_{\Mbox{neta}}=\sum \VEC{F}_i=\VEC{F}_1+\VEC{F}_2+\cdots +\VEC{F}_N$$
Si sobre un objeto actúan dos fuerzas: $$\begin{aligned}
\VEC{F}_1&=&(5\U{N})&\HAT{\iota}&-&(15\U{N})\HAT{\jmath} \\
\VEC{F}_2&=&(-15\U{N})&\HAT{\iota}&+&(25\U{N})\HAT{\jmath} \\
\Rightarrow \VEC{F}_{\Mbox{neta}}&=&(-10\U{N})&\HAT{\iota}&+&(10\U{N})\HAT{\jmath} \\
\end{aligned}$$
:::

\
Graficamente se puede realizar la suma de vectores mediante el llamado
*método gráfico*: para sumar $\VEC{A}$ y $\VEC{B}$ primero dibujamos
$\VEC{A}$ en una hoja de papel milimétrico usando cierta escala. La
dirección del vector se especifica con un ángulo $\theta$ relativo a un
eje de coordenadas, por lo regular el eje $x$. Luego, dibujamos
$\VEC{B}$ con su cola en la punta de $\VEC{A}$. (Por esto, el método
también se conoce como método de *punta a cola*.) El vector que va desde
la cola de $\VEC{A}$ hasta la punta de $\VEC{B}$ será entonces el vector
suma o la resultante (ver Figura
[1.5](#fig:suma-vectorial){reference-type="ref"
reference="fig:suma-vectorial"} y
[1.6](#fig:suma-vectorial-comp){reference-type="ref"
reference="fig:suma-vectorial-comp"}).

<figure id="fig:suma-vectorial">
<img src="planeamiento_didactico/figuras/suma_vectorial_grafica.png"
style="width:8in" />
<p><span style="color: c5"><span>Fuente: Wilson, J. Buffa, A. y Lou, B
(2007). Física. Sexta edición. México: Pearson-Prentice
Hall.</span></span></p>
<figcaption>Método gráfico suma vectorial.</figcaption>
</figure>

<figure id="fig:suma-vectorial-comp">
<img src="planeamiento_didactico/figuras/suma_vectorial_componentes.png"
style="width:7in" />
<p><span style="color: c5"><span>Fuente: Wilson, J. Buffa, A. y Lou, B
(2007). Física. Sexta edición. México: Pearson-Prentice
Hall.</span></span></p>
<figcaption>Método gráfico suma vectorial <em>por
componentes</em>.</figcaption>
</figure>

<figure id="fig:suma-vectorial-comp-2">
<img src="planeamiento_didactico/figuras/suma_vectores-2.png"
style="width:7in" />
<p><span style="color: c5"><span>Fuente: Wilson, J. Buffa, A. y Lou, B
(2007). Física. Sexta edición. México: Pearson-Prentice
Hall.</span></span></p>
<figcaption>Método gráfico suma vectorial <em>por
componentes</em>.</figcaption>
</figure>
