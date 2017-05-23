Examen Desarrollo en Cliente Evaluación Extraordinaria
======================================================

# Día 13/06/2017 Tiempo: 5 horas

* Nota: Cada pregunta se valorará como bien o como mal (valoraciones intermedias serán excepcionales).
* Nota2: Para aprobar hay que obtener una puntuación mínima de 5 puntos.
* Nota3: Organice su tiempo. Si no consigue resolver un apartado pase al siguiente. Si un apartado depende de otro que no sabe resolver, siempre puede dar una solución que aunque no sea correcta, le permita seguir avanzando.
* Nota4: Para que una solución sea correcta, no sólo hay que conseguir que haga lo que se pide, sino que además todo lo que funcionaba lo tiene que seguir haciendo.
* Nota5: En caso de que no tenga que hacer el examen de diseño, en las preguntas de diseño que lo requieran, añada el estilo mínimo que le permita contestar a las preguntas de desarrollo.
* Nota6: Lea completamente el examen antes de empezar y comience por lo que le parezca más fácil.

Pasos previos antes de empezar

* Clone el repositorio del enunciado

```bash
    git clone https://user-daw-zayas@bitbucket.org/surtich/experts-enunciado-extra2.git
```

* Vaya al directorio del repositorio

```bash
    cd experts-enunciado-extra2
```

* Configure su usuario de Git (es único para todos)

```bash
    git config user.name "user-daw-zayas"
    git config user.email "javier.perezarteaga@educa.madrid.org"
```

* Cree un *branch* con su nombre y apellidos separados con guiones (no incluya mayúsculas, acentos o caracteres no alfabéticos, excepción hecha de los guiones). Ejemplo:

```bash
    git checkout -b <fulanito-perez-gomez>
```

* Compruebe que está en la rama correcta:

```bash
    git status
```

* Suba la rama al repositorio remoto:

```bash
    git push origin <nombre-de-la-rama-dado-anteriormente>
```

* Instale las dependencias de cliente y de servidor y arranque cada aplicación (abra un terminal para cada aplicación):

**server:**

```bash
    cd server
    npm install
    npm run db:stop
    npm run db:rm
    npm run db:start
    npm start
```

**client:**

```bash
    cd client
    npm install
    npm start
```

Navegue a [http://localhost:3000](http://localhost:3000)

* Dígale al profesor que ya ha terminado para que compruebe que todo es correcto y desconecte la red.

## EXAMEN

#### 1.- Votación de preguntas.

Los usuarios podrán votar las preguntas.

#### 1.1.- Parte del servidor

Nota: Ya implementada. Se ha definido un modelo `Vote` en RethinkDB y una serie de `endpoints`, directorio `vote`, para crear, modificar y recuperar los votos de una pregunta o de un usuario.
Nota: No debe modificar la implementación suministrada.

#### 1.2.- Parte del cliente

Nota: Se notificará el éxito o el error de todas las acciones.

#### 1.2.1.- (2 puntos, diseño) Al lado de cada pregunta, alineado a la derecha, aparecerán cinco estrellas vacías (glyphicon-star-empty)

![image1.2.1](https://bitbucket.org/surtich/experts-enunciado-extra2/downloads/img1.2.1.png)

#### 1.2.2.- (2 puntos, diseño) Al situarse encima de una estrella, se sustituirá por una rellena (glyphicon-star)

#### 1.2.3.- (2 puntos, diseño) También se rellenarán las que estén a la izquierda de la que esté el puntero del ratón (glyphicon-star)

![image1.2.1](https://bitbucket.org/surtich/experts-enunciado-extra2/downloads/img1.2.3.png)

#### 1.2.4.- (2 puntos, desarrollo) Al pulsar sobre una estrella se registrará el voto en la base de datos que coincidirá con la posición en que esté la estrella.

#### 1.2.5.- (2 puntos, desarrollo) Si el usuario vota sobre una pregunta que ya hubiera votado se actualizará la votación.

#### 1.2.6.- (2 puntos, desarrollo) Si un usuario ya hubiera votado una pregunta, al cargar la página, se mostrará su votación.

#### 1.2.7.- (2 puntos, diseño) En vez de hacer lo que dice el apartado 1.2.6, al cargar la página y cuando el ratón no esté encima de las votaciones, muestre las estrellas según la votación que haya hecho el usuario.

Nota: Por ejemplo, se rellenarán tres estrellas cuando el usuario haya votado 3.

#### 1.2.8.- (2 puntos, desarrollo) Al lado de cada pregunta se mostrará la votación media de la pregunta.

#### 1.2.9.- (2 puntos, diseño) El estilo será el mostrado en la imagen.

![image1.2.9](https://bitbucket.org/surtich/experts-enunciado-extra2/downloads/img1.2.9.png)

#### 1.2.10.- (2 puntos, desarrollo) Las votaciones se actualizarán en tiempo real, tanto la votación individual de cada usuario como la media de las votaciones.


Para entregar
-------------

* Ejecute el siguiente comando para comprobar que está en la rama correcta y ver los ficheros que ha cambiado:


```bash
    git status
```

* Prepare los cambios para que se añadan al repositorio local:

```bash
    git add --all
    git commit -m "completed exam"
```

* Compruebe que no tiene más cambios que incluir:

```bash
    git status
```

* Dígale al profesor que va a entregar el examen.

* Conecte la red y ejecute el siguiente comando:

```bash
    git push origin <nombre-de-la-rama>
```

* Abandone el aula en silencio.
