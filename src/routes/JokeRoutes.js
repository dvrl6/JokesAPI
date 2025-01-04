import express from 'express';
import { getJoke, createJoke, updateJoke, deleteJokeById, getJokeById} from '../controllers/JokeController.js';

// Crea un enrutador de Express
const router = express.Router();

// Define la ruta para obtener un chiste
router.get('/getJoke', getJoke);

// Define la ruta para crear un nuevo chiste
router.post('/createJoke', createJoke);

// Define la ruta para actualizar un chiste existente
router.put('/updateJoke/:id', updateJoke);

// Define la ruta para eliminar un chiste existente por id
router.delete('/deleteJoke/:id', deleteJokeById);

// Define la ruta para obtener un chiste existente por id
router.get('/getJokeById/:id', getJokeById);

/**
 * @swagger
 * /getJoke:
 *   get:
 *     summary: Obtener un chiste
 *     parameters:
 *       - name: param
 *         in: query
 *         required: true
 *         description: Tipo de chiste a obtener (Chuck, Dad, Propio).
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Chiste obtenido exitosamente.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 joke:
 *                   type: string
 *       400:
 *         description: Parámetro no válido.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 */

/**
 * @swagger
 * /createJoke:
 *   post:
 *     summary: Crear un nuevo chiste
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               text:
 *                 type: string
 *                 description: Texto del chiste (requerido).
 *               author:
 *                 type: string
 *                 description: Autor del chiste (opcional).
 *               rating:
 *                 type: integer
 *                 description: Puntaje del chiste (debe estar entre 1 y 10).
 *               category:
 *                 type: string
 *                 description: Categoría del chiste (requerido).
 *     responses:
 *       '201':
 *         description: Chiste creado exitosamente.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *       '400':
 *         description: Error en la validación de datos.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *       '500':
 *         description: Error al guardar el chiste en la base de datos.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 */
 


/**
* @swagger
* /deleteJoke/{id} :
*   delete :
*     summary : Eliminar un chiste existente por ID 
*     parameters :
*       - name : id 
*         in : path 
*         required : true 
*         description : ID del chiste a eliminar .
*         schema :
*           type : string 
*     responses :
*       '200' :
*         description : Chiste eliminado con éxito .
*         content :
*           application/json :
*             schema :
*               type : object 
*               properties :
*                 message :
*                   type : string 
*                 joke :
*                   type : object 
*       '400' :
*          description : Chiste no encontrado .
*          content :
*            application/json :
*              schema :
*                type : object 
*                properties :
*                  error :
*                    type : string 
*       '500' :
*          description : Error al eliminar el chiste .
*          content :
*            application/json :
*              schema :
*                type : object 
*                properties :
*                  error :
*                    type : string 
*/

/**
 * @swagger
 * /updateJoke/{id}:
 *   put:
 *     summary: Actualizar un chiste existente
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID del chiste a actualizar.
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               text:
 *                 type: string
 *                 description: Texto del chiste (opcional).
 *               author:
 *                 type: string
 *                 description: Autor del chiste (opcional).
 *               rating:
 *                 type: integer
 *                 description: Puntaje del chiste (opcional, debe estar entre 1 y 10).
 *               category:
 *                 type: string
 *                 description: Categoría del chiste (opcional).
 *     responses:
 *       '200':
 *         description: Chiste actualizado exitosamente.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                 updatedJoke:
 *                   type: object 
 *                   additionalProperties: true # Detalles del chiste actualizado.
 *       '404':
 *         description: Chiste no encontrado por el ID dado.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string 
 *       '400':
 *         description: Error en la validación de datos.
 *         content:
 *           application/json:
 *             schema:
 *               type: object 
 *               properties :
 *                  error :
 *                    type : string 
 *       '500':
 *         description : Error al actualizar el chiste en la base de datos.
 *         content :
 *            application/json :
 *              schema :
 *                type : object 
 *                properties :
 *                  message :
 *                    type : string 
 */

/**
 * @swagger
 * /getJokeById/{id}:
 *   get:
 *     summary: Obtener un chiste existente por ID
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID del chiste a obtener.
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Chiste obtenido exitosamente.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 joke:
 *                   type: string
 *       '400':
 *         description: Chiste no encontrado.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *       '500':
 *         description: Error al obtener el chiste.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 */


export default router;