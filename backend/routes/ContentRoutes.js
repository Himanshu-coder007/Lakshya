import express from 'express';
import { Content } from './../models/Content.js';

const router = express.Router();

router.post('/', async (request, response) => {
    try {
        if (
            !request.body.topicName ||
            !request.body.description ||
            !request.body.class ||
            !request.body.subjectName ||
            !request.body.visualContent ||
            !request.body.auralContent ||
            !request.body.readingContent ||
            !request.body.kinestheticContent
        ) {
            return response.status(400).send({
                message: 'Enter all the required fields!'
            });
        }

        const newUser = {
            topicName: request.body.topicName,
            description: request.body.description,
            class: request.body.class,
            subjectName: request.body.subjectName,
            visualContent: request.body.visualContent,
            auralContent: request.body.auralContent,
            readingContent: request.body.readingContent,
            kinestheticContent: request.body.kinestheticContent
        };

        const content = await Content.create(newUser);

        return response.status(201).send(content);
    } catch (error) {
        console.log(error.message);
        return response.status(500).send({ message: error.message });
    }
});

router.get('/', async (request, response) => {
    try {
        const content = await Content.find({});

        return response.status(200).json(content);
    } catch (error) {
        console.log(error.message);
        return response.status(500).send({ message: error.message });
    }
});

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