import express from 'express';
import { getJoke, createJoke, updateJoke } from '../controllers/JokeController.js';

const router = express.Router();

router.get('/joke', getJoke);
router.post('/joke', createJoke);
router.put('/joke/:id', updateJoke);

export default router;