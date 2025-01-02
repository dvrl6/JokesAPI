import axios from 'axios';
import { Joke } from '../models/Joke.js'; 

export const getJoke = async (req, res) => {
    const { param } = req.query;

    // Verificar si se ha proporcionado un parámetro
    if (!param) {
        return res.status(400).json({ error: 'Parámetro no válido' });
    }

    try {
        if (param === 'Chuck') {
            // Obtener un chiste de Chuck Norris
            const response = await axios.get('https://api.chucknorris.io/jokes/random');
            return res.status(200).json({ joke: response.data.value });
        } else if (param === 'Dad') {
            // Obtener un Dad Joke
            const response = await axios.get('https://icanhazdadjoke.com/api', {
                headers: { Accept: 'application/json' }
            });
            return res.status(200).json({ joke: response.data.joke });
        } else if (param === 'Propio') {
            // Obtener un chiste interno de la base de datos
            const jokes = await Joke.find(); // Asumiendo que tienes un modelo Joke configurado

            if (jokes.length === 0) {
                return res.status(200).json({ message: 'Aun no hay chistes, cree uno!' });
            }

            // Retornar un chiste aleatorio de la base de datos
            const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
            return res.status(200).json({ joke: randomJoke.text }); // Asegúrate de que el campo sea correcto
        } else {
            return res.status(400).json({ error: 'Parámetro no válido' });
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Error al obtener el chiste' });
    }
};

export const createJoke = (req, res) => {
  
};

export const updateJoke = (req, res) => {
    
};