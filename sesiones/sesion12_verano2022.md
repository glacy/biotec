# Rotación de cuerpos rígidos - I {#cap:cap11}

::: flushright
:::

En esta sesión introduciremos los conceptos necesarios para *describir*
el movimiento de cuerpos que giran o rotan alrededor de un eje fijo[^1].
En general, un objeto puede deformarse cuando se le aplica una fuerza;
sin embargo, consideraremos cuerpos con forma y tamaño definidos e
inmutables; por lo que le llamaremos *cuerpos rígidos*.

## Velocidad y aceleración angulares

Para describir el movimiento de un objeto rígido que gira (por ejemplo,
ver Figura [1.1](#fig:rotacion){reference-type="ref"
reference="fig:rotacion"}), nos enfocaremos en su movimiento *angular*,
es decir, de como se mueven sus puntos alrededor del eje de giro.\
Si observamos el movimiento de un punto cualquiera del objeto en su
movimiento rotacional, este seguirá una trayectoria circular.\
La figura [1.1](#fig:rotacion){reference-type="ref"
reference="fig:rotacion"} muestra un cuerpo rígido que gira alrededor de
un eje fijo. Podemos describir la rotación de ese cuerpo siguiendo la
posición de un punto.

<figure id="fig:rotacion">
<table>
<tbody>
<tr>
<td style="text-align: center;"><embed
src="planeamiento_didactico/figuras/abanico.pdf"
style="width:2.5in" /></td>
<td style="text-align: center;"><embed
src="planeamiento_didactico/figuras/abanico3.pdf"
style="width:2.5in" /></td>
<td style="text-align: center;"><embed
src="planeamiento_didactico/figuras/long_arco.pdf" /></td>
</tr>
<tr>
<td style="text-align: center;"><span
class="math inline"><em>t</em> = 0</span></td>
<td style="text-align: center;"><span
class="math inline"><em>Δ</em><em>t</em></span></td>
<td style="text-align: center;"></td>
</tr>
</tbody>
</table>
<figcaption>Movimiento angular de cuerpo rígido, determinado a partir
del movimiento de cualquier punto alrededor del eje de
giro.</figcaption>
</figure>

Se define el *desplazamiento angular* $\Delta\theta$
como:$$\Delta\theta=\theta_{\Mbox{final}}-\theta_{\Mbox{inicial}}.$$ A
partir del cual se puede definir algunas otras variables, como por
ejemplo la *longitud de arco* $s$: $$s=r\Delta\theta.$$

donde $r$ representa la distancia del eje de giro al punto en cuestión.\
Note que en el caso que $\Delta\theta=2\pi$, se lleva a cabo un giro
completo, en el cual $C=2\pi r$.\

Para describir cantidades angulares pueden utilizarse los
[radianes]{.sans-serif} o los [grados]{.sans-serif}. Ambas cantidades
están relacionadas mediante la equivalencia
$$2\pi [\U{radianes}]=360^{\circ} [\U{grados}]$$ En términos de
movimiento angular, se dice que cada vez que un objeto completa una
vuelta, realiza una [revolución]{.sans-serif}, de manera que
$$2\pi [\U{radianes}]=360^{\circ} [\U{grados}]=1 \U{rev} [\U{revoluci\'on}]$$

Aunque el *desplazamiento angular* $\Delta\theta$ se da en el plano de
giro, normalmente definido como el plano $xy$, a diferencia del
*desplazamiento lineal*, esta cantidad no es un vector.

La *velocidad angular* y la *aceleración angular* sí son cantidades
vectoriales y apuntan en la dirección del eje de giro, normalmente
establecido como eje $z$.\

### Velocidad angular

Se denota con la letra $\omega$ a la velocidad angular sobre el eje de
rotación como la razón de cambio del desplazamiento angular respecto al
tiempo, es decir: $$\omega=\frac{\Delta\theta}{\Delta t}.$$

Utilizando el concepto de revolución; surgen por ejemplo unidades
"populares" para la rapidez angular, como los son los
[r.p.m]{.sans-serif}:

::: center
:::

Las rotaciones en contra de las manecillas del reloj (antihorario o
levógiro) son consideradas rotaciones positivas. Colocando el eje de
rotación del cuerpo en el eje $z$, una rotación positiva va del eje
positivo $+x$ al eje positivo $+y$. Ese signo aplica tanto para
desplazamientos angulares como para velocidades angulares. En la parte
superior de la la figura [1.2](#fig:Rotacion){reference-type="ref"
reference="fig:Rotacion"}, se muestra ese giro levógiro con componente
de la velocidad angular positiva. En la parte inferior de esa figura, se
muestra el caso de una rotación horaria (dextrógiro), con componente de
la velocidad angular negativa.\

![Signos de las rotaciones. Figura tomada de Física, Wilson 2006, 6ta
ed. P220.](planeamiento_didactico/figuras/Rotacion.png){#fig:Rotacion
width="4in"}

En la figura [1.2](#fig:Rotacion){reference-type="ref"
reference="fig:Rotacion"} también se muestra el *método de la mano
derecha* para determinar la dirección del vector de velocidad angular.
Utilizando el sentido de la rotación del cuerpo para enrollar los dedos
(excepto el pulgar) en torno a la palma de la mano, el pulgar apuntará
en la dirección de la velocidad angular.\

### Aceleración angular

Se denota con la letra $\alpha$ a la aceleración angular:
$$\alpha=\frac{\Delta\omega}{\Delta t}$$

El signo de la aceleración angular dependerá del signo de la velocidad
angular y si el cuerpo está \"frenando\" o \"acelerando\" su movimiento
de giro. Por ejemplo, un movimiento dextrógiro que está siendo frenado
tendrá velocidad angular negativa y aceleración angular positiva. En el
caso que la rapidez angular en un movimiento antihorario aumente cada
vez más, ambas, velocidad y aceleración angular, serían positivas.

## Rotación con aceleración angular constante

Si la aceleración angular de un objeto es constante, podemos
escribir[^2] $$\begin{aligned}
\theta (t)=&\theta_0+\omega_0 t +\frac{1}{2}\alpha t^2\\
\omega (t)=&\omega_0  +\alpha t\\
\alpha (t)=&\alpha=\mbox{constante}
\end{aligned}$$ donde $\theta_0$, $\omega_0$ y $\alpha$ representan la
posición angular iniciar, velocidad angular inicial y aceleración
angular; respectivamente.

## Relación entre cinemática lineal y angular

Considere un punto sobre un cuerpo rígido en movimiento de rotación; por
ejemplo el de la Figura [1.1](#fig:rotacion){reference-type="ref"
reference="fig:rotacion"}. La velocidad tangencial, aceleración
tangencial y aceleración centrípeta (o radial) de este punto se
relacionan con la velocidad angular del movimiento mediante

$$\begin{aligned}
v=&r\omega\\
a_{\Mbox{tan}}=&r\alpha\\
a_{\Mbox{rad}}=&r\omega^2 \qquad (\mbox{si} \, \omega \, \mbox{es constante)}
\end{aligned}$$

<figure id="fig:lineal-rot1">
<div class="center">
<img src="planeamiento_didactico/figuras/rot3.png"
style="width:3.25in" />
</div>
<figcaption>Relación entre velocidad lineal y angular.</figcaption>
</figure>

<figure id="fig:lineal-rot1">
<div class="center">
<img src="planeamiento_didactico/figuras/rot2.png"
style="width:3.25in" />
</div>
<figcaption>Relación entre aceleración lineal y angular.</figcaption>
</figure>

[^1]: un eje que está en reposo en algún sistema de referencia inercial
    y que no cambia de dirección en relación con ese sistema.

[^2]: Observe la similitud de estas relaciones con las expresiones para
    un MRUA.
