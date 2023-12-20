import express from 'express';
import { Question } from '../models/Question.js'

const router = express.Router();


router.post('/', async (request, response) => {
    try {
        const {
            subject,
            topic,
            classLevel,
            thresholdLow,
            thresholdHigh,
            questions,
        } = req.body;

        const newQuestion = new Question({
            subject,
            topic,
            classLevel,
            thresholdLow,
            thresholdHigh,
            questions,
        });

        const content = await Question.create(newQuestion);
        res.status(201).json({ content });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
});

router.get('/', async (request, response) => {
    try {
        const content = await Question.find({});

        return response.status(200).json(content);
    } catch (error) {
        console.log(error.message);
        return response.status(500).send({ message: error.message });
    }
});

router.get('/:id', async (request, response) => {
    try {
        const { id } = request.params;

        const content = await Question.findById(id);

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