import express from 'express';
import { Subject } from '../models/Subject.js';

const router = express.Router();

router.post('/', async (request, response) => {
    try {
        if (
            !request.body.subjectName ||
            !request.body.class
        ) {
            return response.status(400).send({
                message: 'Enter all the required fields!'
            });
        }

        const newSubject = {
            subjectName: request.body.subjectName,
            class: request.body.class
        };

        const subject = await Subject.create(newSubject);

        return response.status(201).send(subject);
    } catch (error) {
        console.log(error.message);
        return response.status(500).send({ message: error.message });
    }
});

router.get('/', async (request, response) => {
    try {
        const subject = await Subject.find({});

        return response.status(200).json(subject);
    } catch (error) {
        console.log(error.message);
        return response.status(500).send({ message: error.message });
    }
});

router.get('/:id', async (request, response) => {
    try {
        const { id } = request.params;

        const subject = await Subject.findById(id);

        return response.status(200).json(subject);
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

router.put('/:id', async (request, response) => {
    try {
        const { id } = request.params;

        const result = await User.findByIdAndUpdate(id, request.body);

        if (!result) {
            return response.status(404).json({ message: 'User not found' });
        }

        return response.status(200).send({ message: 'User updated successfully' });
    } catch (error) {
        console.log(error.message);
        return response.status(500).send({ message: error.message });
    }
});

router.delete('/:id', async (request, response) => {
    try {
        const { id } = request.params;

        const result = await User.findByIdAndDelete(id);

        if (!result) {
            return response.status(404).json({ message: 'User not found' });
        }
        return response.status(200).send({ message: 'User deleted successfully' });
    } catch (error) {
        console.log(error.message);
        return response.status(500).send({ message: error.message });
    }
});

export default router;