import express from 'express';
import { Content } from './../models/Content.js';

const router = express.Router();

router.get('/:id', async (request, response) => {
    try {
        const { id } = request.params;

        const content = await Content.findById(id);

        return response.status(200).json(content);
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

export default router;