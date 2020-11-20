# Inicio

Primero, antes que nada, instala Apache Cordova y andoid studio para poder emular la aplicación.
<br>
[Instala Apache Cordova](https://cordova.apache.org/docs/en/latest)

## Los datos que no dejé

Los datos que vas a necesitar cambiar dentro de la aplicación de Cordova están en:

* www/js/index.js

En la dirección a la que apunta la petición por Ajax, cambia el texto por tu Dirección IPV4

* www/index.html

En index modifica el meta tag Content-Security-Policy en connect-src

* config.xml

modifica el tag access origin.

* rest/includes/db.php

incluye los atributos necesarios para generar una conexión a tu base de datos en donde vas a guardar la información que se genere.

### Esto es un ejercicio
:D
