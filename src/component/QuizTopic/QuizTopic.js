import React from 'react';

const QuizTopic = ({ quizTopic }) => {
    const { name, logo, total } = quizTopic;
    return (
        <div className="card w-64 bg-gray-300 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={logo} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title font-bold">{name}</h2>
                <p className='font-medium'>Total : {total}</p>
                <div className="card-actions">
                    <button className="btn btn-primary">Start Quiz</button>
                </div>
            </div>
        </div>
    );
};

export default QuizTopic;