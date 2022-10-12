import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';

const QuizDetails = () => {

    const quiz = useLoaderData()
    const { name, questions } = quiz.data;
    return (
        <div>
            <h1 className='text-2xl font-bold my-6'>Quiz for : {name}</h1>
            {
                questions.map(singleQuestion => <Quiz
                    key={singleQuestion.id}
                    singleQuestion={singleQuestion}
                ></Quiz>)
            }
        </div>
    );
};

export default QuizDetails;