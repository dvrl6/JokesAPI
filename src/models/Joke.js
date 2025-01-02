/*import mongoose from 'mongoose';

const jokeSchema = new mongoose.Schema({
    text: { type: String, required: true },
    author: { type: String, default: "Se perdió en el Ávila como Led" },
    rating: { type: Number, required: true, min: 1, max: 10 },
    category: { type: String, required: true, enum: ['Dad joke', 'Humor Negro', 'Chistoso', 'Malo'] }
});

const Joke = mongoose.model('Joke', jokeSchema);
export {Joke};
*/
import mongoose from 'mongoose';

const jokeSchema = new mongoose.Schema({
    text: { type: String, required: true }, // Texto del chiste
    author: { type: String, default: "Se perdió en el Ávila como Led" }, // Nombre del autor (opcional)
    rating: { type: Number, required: true, min: 1, max: 10 }, // Puntaje del chiste
    category: { 
        type: String, 
        required: true, 
        enum: ['Dad joke', 'Humor Negro', 'Chistoso', 'Malo'] // Categorías permitidas
    }
}, { timestamps: true }); // Agrega createdAt y updatedAt automáticamente

export const Joke = mongoose.model('Joke', jokeSchema);
