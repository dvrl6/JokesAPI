# JokesAPI
Proyecto de Topicos Especiales de Programacion. Diana Rodriguez, Abraham Carranza y Andrea Torres. Seccion 16343


Para iniciar la ejecución del script / servidor usar:

node src/index.js 

desde la terminal en la ruta:

C:\Users\admin\JokesAPI

ENDPOINTS: 

1. GET. Obtener un chiste.

Para obtener un chiste de Chuck Norris:

GET http://localhost:3005/api/getJoke?param=Chuck

Para obtener un Dad Joke: 

GET http://localhost:3005/api/getJoke?param=Dad

Para obtener un chiste de la base de datos / propio :

GET http://localhost:3005/api/getJoke?param=Propio

2. POST. Crear un chiste.

Para crear un chiste :

POST http://localhost:3005/api/createJoke

Ejemplo para prueba :

{
    "text": "¿Cómo se despiden los químicos? ¡Ácido un placer!",
    "author": "Pepe",
    "rating": 5,
    "category": "Malo"
}

3. PUT. Actualizar un chiste.

PUT http://localhost:3005/api/updateJoke/id

Ejemplo para prueba : 

http://localhost:3005/api/updateJoke/677740b3bbde196c29c67b55

{
    "category": "Chistoso"
}

