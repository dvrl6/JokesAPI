import { expect, use } from 'chai'; // Importa expect y use
import chaiHttp from 'chai-http';
import app from '../src/index.js'; // Asegúrate de que la ruta sea correcta
import { Joke } from '../src/models/Joke.js'; // Asegúrate de que la ruta sea correcta

use(chaiHttp); // Usa el plugin chai-http

describe('Joke API', () => {
    before(async () => {
        await Joke.deleteMany({});
    });

    describe('GET /api/joke', () => {
        it('debería devolver un error si no se proporciona un parámetro válido', async () => {
            const res = await chai.request(app).get('/api/joke');
            expect(res).to.have.status(400);
            expect(res.body).to.have.property('error', 'Parámetro no válido');
        });

        it('debería devolver un chiste de Chuck Norris', async () => {
            const res = await chai.request(app).get('/api/joke?param=Chuck');
            expect(res).to.have.status(200);
            expect(res.body).to.have.property('joke');
        });

        it('debería devolver un "Dad Joke"', async () => {
            const res = await chai.request(app).get('/api/joke?param=Dad');
            expect(res).to.have.status(200);
            expect(res.body).to.have.property('joke');
        });

        it('debería devolver un mensaje si no hay chistes internos', async () => {
            const res = await chai.request(app).get('/api/joke?param=Propio');
            expect(res).to.have.status(200);
            expect(res.body).to.have.property('message', 'Aun no hay chistes, cree uno!');
        });

        it('debería devolver un chiste interno si hay chistes en la base de datos', async () => {
            const newJoke = new Joke({ 
                text: 'Este es un chiste interno.', 
                author: 'Autor Prueba', 
                rating: 5, 
                category: 'Chistoso' 
            });
            await newJoke.save();
        
            const res = await chai.request(app).get('/api/joke?param=Propio');
            expect(res).to.have.status(200);
            expect(res.body).to.have.property('joke', 'Este es un chiste interno.');
        });
        
    });
});

