import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizTopic from '../QuizTopic/QuizTopic';
import './Home.css'

const Home = () => {
    const quizesTopic = useLoaderData();
    let quizesTopicData = quizesTopic.data;
    return (
        <div className='mt-8 bg-violet-300 py-10'>
            <div className='w-3/4 mx-auto grid grid-cols-1 sm:grid grid-cols-1 md:flex justify-start lg:flex justify-start'>
                <div className='1/4'>
                    <img className='w-3/4 rounded-xl' src="https://blog.hubspot.com/hubfs/google-quiz.jpg" alt="" />
                </div>
                <span className='w-3/4 mt-2'>
                    <p className='font-medium text-xl'>Quiz coconut is a quiz website for beginner.It provides some question for importent topics like React,Javascript,HTML,Github etc.</p>
                </span>
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