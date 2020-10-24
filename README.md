![header](doc/header.png)

# DAW Project

Autor: Fabian S. - 2020

Este Readme está basado en el Template project for Web Applications Development.

# Tabla de contenidos
---
* Introducción
* Correr la aplicación
* Créditos
* Contribuir

# **Introduccion**
---
El proyecto presentado para esta materia,  el cual consiste en una _Simple Page Application (SPA)_ y se denomina "Smart Home", fue desarrollado empleando los conocimientos adquiridos en la materia Desarrollo Web de Aplicaciones (DAW) :blush:. Consiste de un frontend y un backend. Para el frontende se empleó el framework Materialize y el lenguaje de programación typescript. Del lado de backend se empleó la herramienta Nodejs. Adicionalmente, las modificaciones de estado de los dispositivos serán impactados en una base de datos del tipo relacional.

Respecto al desarrollo, en la página se pueden agregar nuevos dispositivos, modificar su nombre e indicar su estado.

# Correr la aplicación
---
Posterior al pull del repositorio, la aplicación se puede ejecutar al correr el siguiente comando en la terminal de Visual Studio Code:
```sh
docker-compose up
```
Para confirmar que la API ha sido levantada de manera correcta, verificar en la terminal la siguiente leyenda:
```javascript
node-backend    | NodeJS API running correctly
node-backend    | Connected to DB under thread ID: id
```
Posteriormente abrir un buscador y para ver la  _(SPA)_ introducir la siguiente url:
```
[url](http://localhost:8000)
```
Para consultar el estado de los dispositivos en la  base de datos, ingresar la siguiente url:
```
[url](http://localhost:8001)  
```
## Creditos
---
Este trabajo final está basado en el template desarrollado por:
* Agustín Bassi
* Santiago Germino
* Brian Ducca 

## Contribuir
---
Para contribuir realizar un pull request con las sugerencias.

## Licencia
---
GPL

```To read all project documentation, please go to its wiki in [this link](https://github.com/ce-iot/daw-project-template/wiki).
```


![footerv2](/daw-projectfooterv2.png)




