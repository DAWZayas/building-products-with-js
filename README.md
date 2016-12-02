Examen Primera Evaluación
=========================

# Día 12/12/2016 Tiempo: 5 horas

* Nota: Cada pregunta se valorará como bien o como mal (valoraciones intermedias serán excepcionales).
* Nota2: En cada pregunta se especifica si se valora en el examen de diseño o en el de desarrollo.
* Nota3: Para aprobar cada examen hay que obtener una puntuación mínima de 5 puntos en ese examen.
* Nota4: Organice su tiempo. Si no consigue resolver un apartado pase al siguiente. El examen consta ejercicios que se pueden resolver de forma independiente. Los apartados de diseño y de desarrollo también se pueden resolver por separado. Si un apartado depende de otro que no sabe resolver, siempre puede dar una solución que aunque no sea correcta, le permita seguir avanzando.
* Nota5: Para que una solución sea correcta, no sólo hay que conseguir que haga lo que se pide, sino que además todo lo que funcionaba lo tiene que seguir haciendo.
* Nota6: Lea completamente el examen antes de empezar y comience por lo que le parezca más fácil.

Pasos previos antes de empezar

* Clone el repositorio del enunciado

```bash
    git clone https://user-daw-zayas@bitbucket.org/surtich/experts-enunciado-primera.git
```

* Vaya al directorio del repositorio

```bash
    cd experts-enunciado-primera
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
    npm run docker:stop
    npm run docker:remove
    npm run docker:start
    npm start
```

**client:**

```bash
    cd client
    npm install
    npm start
```

Navegue a [http://localhost:3000](http://localhost:3000)

**aplicación de muestra**:

Abra un tercer terminal

```bash
    cd client
    npm run start-prod
```
Navegue a [http://localhost:9000](http://localhost:9000)

* Dígale al profesor que ya ha terminado para que compruebe que todo es correcto y desconecte la red.

## EXAMEN

#### 1.- Notificaciones de preguntas y respuestas

#### 1.1- (0,5 puntos desarrollo) Al añadir una pregunta y al responder una pregunta se mostrará una notificación.

![image1.1](img/image1.1.png)

#### 1.2- (1 punto desarrollo) También se mostrarán notificaciones cuando se produzcan errores al añadir preguntas y respuestas.
Nota: Mire en el `back` los errores que se pueden producir. Intente hacer un tratamiento genérico de todos los errores.

![image1.2](img/image1.2.png)

#### 2.- La barra de notificación está duplicada en los componentes `home` y `create`.

#### 2.1.- (1 punto diseño) Cree un componente `navbar` e insértelo en el componente `app` de tal forma que se elimine la duplicidad.
#### 2.2.- (1 punto desarrollo) Ahora hay un problema: La razón de la duplicidad anterior era poner en negrita la ruta actual, pero al tener una única barra de navegación esto ya no funciona. En este apartado debe arreglar el problema.

Pista: Puede detectar la ruta de navegación actual con React-Router, concretamente la ruta está en: `state.routing.locationBeforeTransitions.pathname`

![image2.2](img/image2.2.png)

#### 3.- (1 punto diseño) Al reducir el tamaño de la pantalla la barra de notificaciones se colapsará.

Puede hacer esto fácilmente con `Bootstrap`. [Consulte](http://devdocs.io/bootstrap~3/components#navbar) la documentación si la tiene descargada. La aplicación ya ha sido configurada para que use `JQuery`.

![image3](img/image3.png)

#### 4.- Arregle el molesto movimiento de la barra de navegación.

#### 4.1.- (1 punto diseño) Para ver el problema, cree unas cuantas preguntas y reduzca la longitud vertical de la pantalla, de tal manera que aparezca la barra de scroll vertical: Al alternar entre las rutas `/create` y `/`, la barra de navegación se desplaza ligeramente. Para arreglar el problema debe hacer que la aplciación muestre la barra de scroll de forma permanente aunque no sea necesaria.

![image4.1](img/image4.1.png)

#### 4.2.- (1 punto diseño) El problema no existe cuando la pantalla es reducida, por lo tanto no es necesaria la barra en este caso. Haga que la barra vertical se muestre automáticamente en pantallas cuyo ancho sea menor de 768px. Siga una orientación `mobile-first`.

![image4.2](img/image4.2.png)

#### 5.- (0,5 puntos desarrollo) Actualmente se puede acceder a `/create` sin estar autenticado. Arregle este problema.

#### 6.- (0,5 puntos diseño) Muestre las notificaciones de tal forma que las más nuevas aparezcan encima de las más antiguas (al revés de como se ven ahora).

#### 7.- Implemente la acción `logout`.

#### 7.1.- (1 punto diseño) Cuando el usuario esté conectado, aparecerá su nombre y un botón como el que se muestra en la imagen. No se verá cuando no esté conectado.

![image7.1](img/image7.1.png)

#### 7.2.- (1 punto desarrollo) Al pulsar sobre `logout` el usuario se desconectará.

#### 7.3.- (1 punto desarrollo) Al pulsar sobre `logout` se navegará a `/login`

Pista: puede hacer esto en un `epic`, usando el `action creator push` importado de `react-router-redux`. Puede ver un ejemplo en el componente `login`. Recuerde que en el `epic` no tiene acceso al `dispacher` y tiene que pensar otra forma de lanzar la acción. Hay múltiples ejemplos de esto en el código.

#### 7.4.- (0,5 puntos desarrollo) Al pulsar sobre `logout` se mostrará una notificación.

#### 8.- (1 punto diseño) La barra de navegación se ocultará durante el login y el resgistro. Los formularios de login y registro dejarán un margen superior.

![image8](img/image8.png)

Nota: Este apartado sólo se valorará si ha hecho el ejercicio 2. Ya que si no lo ha hecho, la barra ya se oculta. El problema surge al tener una única barra en el componente `app`.

#### 9.- (1 punto diseño) La caja de texto de respuesta a las preguntas se mostrará en un `input-group`. Consulte la [documentación](http://devdocs.io/bootstrap~3/components#input-groups) si la tiene descargada.

![image9](img/image9.png)

#### 10.- Arregle los problemas de estilo de las notificaciones

#### 10.1.- (0,5 puntos diseño) Las cajas de texto de las respuestas están por encima de las notificaciones: Invierta el orden.

Nota: Para comprobar esto, debe haber solucionado el apartado 1.

#### 10.2.- (0,5 puntos diseño) Hay un problema con las notificaciones y es que cuando el número de respuestas es elevado y hace scroll éstas se ocultan. La razón de que ocurra esto es que las notificaciones tienen un estilo de posición absoluta. Póngalas con posición fija para que siempre estén en la parte inferior de la página.

#### 11.- En pantallas de móvil, sólo se mostrará una pregunta.

![image10](img/image10.png)

#### 11.1.- (1,5 puntos desarrollo) Modifique la visualización de las preguntas en JavaScript en función del tamaño de la pantalla.

Pista: Puede detectar el tamaño horizontal con la propiedad `document.body.clientWidth` o con `jQuery('body').clientWidth`<br/>
Pista2: Quizás mejor utilizar el componente `react-responsive` ya incluido en `package.json`. En `node_modules` puede consultar la documentación en el fichero `README.md`. Aquí copio la parte de la coucmentación que probablemente necesite:

```jsx
import MediaQuery from 'react-responsive';

....

<MediaQuery minDeviceWidth={700}>
  {(matches) => {
    if (matches) {
      return <div>Media query matches!</div>;
    } else {
      return <div>Media query does not match!</div>;
    }
  }}
</MediaQuery>
```

#### 11.2.- (1 punto diseño) Se mostrarán los botones de la imagen.

![image10.2](img/image10.2.png)

#### 11.3.- (2 puntos desarrollo) Al pulsar sobre los botones se avanzará a la pregunta anterior o siguiente dependiendo del botón pulsado.

#### 11.4.- (1 punto desarrollo) Cuando esté sobre la primera pregunta, se deshabilitará el botón anterior y cuando esté sobre la última, el botón siguiente.

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
