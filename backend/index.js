import express from 'express';
import mongoose from 'mongoose';
import { PORT, mongodbURL } from './config.js'
import cors from 'cors';

import UserRoutes from './routes/UserRoutes.js'
import SubjectRoutes from './routes/SubjectRoutes.js'
import ContentRoutes from './routes/ContentRoutes.js';
import QuizRoutes from './routes/QuizRoutes.js';
import QuestionRoutes from './routes/QuestionRoutes.js'
import ContentSeperateRoutes from './routes/ContentSeperateRoutes.js'

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (request, response) => {
    console.log(request);
    return response.status(234).send('Hello! This is Lakshya - Backend!');
});

app.use('/user', UserRoutes);
app.use('/subject', SubjectRoutes);
app.use('/content', ContentRoutes);
app.use('/quizData', QuizRoutes);
app.use('/generateAssessment', QuestionRoutes);
app.use('/contentseperateRoutes', ContentSeperateRoutes);

mongoose
    .connect(mongodbURL)
    .then(() => {
        console.log('App Connected to the database!');
        app.listen(PORT, () => {
            console.log(`Listening on port: ${PORT}`);
        });
    })
    .catch((error) => {
        console.log(error);
    })