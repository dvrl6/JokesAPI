import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import jokeRoutes from './routes/JokeRoutes.js'; 

dotenv.config();
const app = express();
const port = 3005;

app.use(cors({ origin: '*' }));
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: false }));

const connectDB = () => {
    const {
        MONGO_USERNAME,
        MONGO_PASSWORD,
        MONGO_HOSTNAME,
        MONGO_PORT,
        MONGO_DB
    } = process.env;

    const url = `mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOSTNAME}:${MONGO_PORT}/${MONGO_DB}?authSource=admin`;

    console.log(url);

    mongoose.connect(url)
        .then(() => {
            console.log('Conexión a MongoDB exitosa');
        })
        .catch((err) => {
            console.log('Error de conexión:', err);
        });
};

connectDB();

app.use('/api', jokeRoutes); 

/*app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});
*/

const server = app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});

// Exportar la aplicación para pruebas
export default server;