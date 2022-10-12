import React from 'react';


const Quiz = ({ singleQuestion }) => {
    console.log(singleQuestion)
    const { question, options } = singleQuestion;
    return (
        <div className='bg-gray-200 w-3/4 mx-auto p-6'>
            <h1 className='text-lg font-medium'><span>Quiz : </span>{question}</h1>
            <div className='mt-4 grid grid-cols-2 gap-3'>
                <div className='bg-violet-300 p-2 rounded-lg'>
                    <input className='mr-2' type="radio" />
                    <label className='font-medium'>{options[0]}</label>
                </div>

                <div className='bg-violet-300 p-2 rounded-lg'>
                    <input className='mr-2' type="radio" />
                    <label className='font-medium'>{options[1]}</label>
                </div>

                <div className='bg-violet-300 p-2 rounded-lg'>
                    <input className='mr-2' type="radio" />
                    <label className='font-medium'>{options[2]}</label>
                </div>

                <div className='bg-violet-300 p-2 rounded-lg'>
                    <input className='mr-2' type="radio" />
                    <label className='font-medium'>{options[3]}</label>
                </div>
            </div>
        </div>
    );
};

export default Quiz;