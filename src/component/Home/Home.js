import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizTopic from '../QuizTopic/QuizTopic';
import './Home.css'

const Home = () => {
    const quizesTopic = useLoaderData();
    let quizesTopicData = quizesTopic.data;
    return (
        <div className='mt-8 bg-violet-300 py-10'>
            <div>
                <p className='text-2xl font-bold mb-2'>Welcome to Quiz Coconut</p>
                <p className='font-medium'>Quiz coconut is a quiz website for beginner.It provides some question for importent topics like React,Javascript,HTML,Github etc.</p>
            </div>
            <div className='grid grid-cols-1 w-3/4 mx-auto sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-10'>
                {
                    quizesTopicData.map(quizTopic => <QuizTopic
                        key={quizTopic.id}
                        quizTopic={quizTopic}
                    ></QuizTopic>)
                }
            </div>
        </div>
    );
};

export default Home;