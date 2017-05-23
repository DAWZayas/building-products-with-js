Examen Desarrollo en Cliente Evaluación Extraordinaria (convocatoria de gracia)
===============================================================================

# Día 29/05/2017 Tiempo: 5 horas

* Nota: Cada pregunta se valorará como bien o como mal (valoraciones intermedias serán excepcionales).
* Nota2: Para aprobar hay que obtener una puntuación mínima de 5 puntos.
* Nota3: Organice su tiempo. Si no consigue resolver un apartado pase al siguiente. Si un apartado depende de otro que no sabe resolver siempre puede dar una solución, que aunque no sea correcta, le permita seguir avanzando.
* Nota4: Para que una solución sea correcta, no sólo hay que conseguir que haga lo que se pide, sino que además todo lo que funcionaba lo tiene que seguir haciendo.
* Nota5: Lea completamente el examen antes de empezar y comience por lo que le parezca más fácil.

Pasos previos antes de empezar

* Clone el repositorio del enunciado

```bash
    git clone https://user-daw-zayas@bitbucket.org/surtich/experts-enunciado-extra1.git
```

* Vaya al directorio del repositorio

```bash
    cd experts-enunciado-extra1
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
    npm run db:create
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

#### 1.- Usuarios Amigos

Los usuarios podrán ser amigos de otros usuarios. Para ello, un usuario podrá solicitar la amistad de otro usuario.

#### 1.1.- Parte del servidor

#### 1.1.1.- (0,5 puntos) Cree un modelo en Thinky que permita recoger las peticiones de amistad. Una petición podrá estar en estado de "pending" (pendiente), "accepted" (aceptada) o "denied" (rechazada).

#### 1.1.2.- (2 puntos) Cree un "endpoint" que permita que un usuario realice una solicitud de amistad (estado "pending"). Se debe validar lo siguiente:

  * El usuario que realice la petición debe estar autenticado.
  * El usuario al que se dirija la solicitud de amistad debe existir en la base de datos.
  * El usuario al que se dirija la solicitud de amistad no puede ser el que creó la solicitud (no puedo hacerme amigo de mí mismo).
  * No se pueden duplicar las solicitudes de amistad: No puede haber ya una solicitud entre estos dos usuarios en ningún estado.

#### 1.1.3.- (1 punto) Cree un "endpoint" que permita aceptar o rechazar una solicitud.

  * El usuario conectado debe ser el destinatario de la solicitud.

#### 1.1.4.- (1 punto) Cree un "endpoint" que permita borrar una solicitud. Una solicitud se puede borrar cuando se dé alguna de estas situaciones:

  * El usuario conectado es el creador de la solicitud.
  * La solicitud está en estado "accepted" y el usuario conectado es el destinatario de la solicitud.

#### 1.1.5.- (1 punto) Cree un "endpoint" que devuelva el estado de las solicitudes de amistad del usuario conectado. Estas serán:

  * Las solicitudes generadas por ese usuario.
  * Las solicitudes que tengan como destinatario ese usuario.

#### 1.2.- Parte del Cliente
  * Nota: Hay que notificar el éxito o el error de todas las acciones realizadas.

#### 1.2.1.- (0,5 puntos) Cree la ruta `http://localhost:3000/friends` que permita gestionar las solicitudes de amistad.
#### 1.2.2.- (1 punto) Cuando se navegue a esa ruta se mostrarán las solicitudes de amistad del usuario conectado (apartado 1.1.5)
#### 1.2.3.- Junto a cada solicitud se mostrarán los botones que permitan realizar las acciones permitidas que dependerán de su estado y de quién las creó:
  * Nota: Si una acción no se puede realizar para una determinada solicitud, no se mostrará el botón

#### 1.2.3.1.- (1 punto) Borrar (apartado 1.1.4)
#### 1.2.3.2.- (0,5 puntos) Aceptar (apartado 1.1.3)
#### 1.2.3.3.- (0,5 puntos) Rechazar (apartado 1.1.3)

#### 1.2.4.- (1 punto) Se mostrará una caja de texto y un botón que permitirá crear nuevas solicitudes de amistad (apartado 1.1.2)

#### 1.3.- (1 punto) Las solicitudes de amistad se actualizarán en tiempo real
  * Nota: Se deben observar los cambios mínimos en la base de datos cuando se navegue a `http://localhost:3000/friends`
  * Nota: Deberá dejar de observar los cambios cuando se cambie la ruta de navegación.
  * Nota: Este ejercicio es extra y permitirá sumar un punto adicional.

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
