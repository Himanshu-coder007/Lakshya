import express from 'express';
import { Subject } from '../models/Subject.js';
import { Quiz } from './../models/Quiz.js';

const router = express.Router();

router.post('/', async (request, response) => {
    try {
        const newQuiz = {
            subjectName: request.body.subjectName,
            class: request.body.class,
            studentId: request.body.studentId,
            marks: request.body.marks,
            hml: request.body.hml,
            quizId: request.body.quizId
        };

        const quiz = await Quiz.create(newQuiz);

        return response.status(201).send(quiz);
    } catch (error) {
        console.log(error.message);
        return response.status(500).send({ message: error.message });
    }
});

router.get('/', async (request, response) => {
    try {
        const quiz = await Quiz.find({});

        return response.status(200).json(quiz);
    } catch (error) {
        console.log(error.message);
        return response.status(500).send({ message: error.message });
    }
});

router.get('/:subjectId/:classStudy', async (request, response) => {
    try {
        const { subjectId } = request.params;
        const { classStudy } = request.params;

        const quiz = await Quiz.find({ subjectName: subjectId, class: classStudy });

        return response.status(200).json(quiz);
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

router.get('/:id', async (request, response) => {
    try {
        const { id } = request.params;

        const quiz = await Quiz.findById(id);

        return response.status(200).json(quiz);
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