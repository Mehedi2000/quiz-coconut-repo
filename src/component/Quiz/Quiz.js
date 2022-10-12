import React, { useState } from 'react';
import { EyeIcon } from '@heroicons/react/24/solid'
import { toast } from 'react-toastify';


const Quiz = ({ singleQuestion }) => {
    // console.log(singleQuestion)
    const { question, options, correctAnswer } = singleQuestion;

    const handleChange = event => {
        const value = event.target.value;
        if (value === correctAnswer) {
            toast.success('Success: Correct Answer!', { autoClose: 1000 })
        }
        else {
            toast.warning('Warning: Incorrect Answer!', { autoClose: 1000 })
        }
    }

    const handleClick = () => {
        toast.info(`Correct Answer: ${correctAnswer}`, { autoClose: 1000 })
    }

    return (
        <div className='bg-gray-200 w-3/4 mx-auto p-6'>
            <div className='grid grid-cols-1 gap-3 md:flex justify-between lg:flex justify-between'>
                <h1 className='text-lg font-medium'><span>Quiz : </span>{question}</h1>
                <EyeIcon onClick={handleClick} className="h-6 w-6 text-center text-black-500" />
            </div>
            <div className='mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3'>
                <div className='bg-violet-300 p-2 rounded-lg'>
                    <input className='mr-2' type="radio" name="topic" onChange={handleChange} value={options[0]} />
                    <label className='font-medium'>{options[0]}</label>
                </div>

                <div className='bg-violet-300 p-2 rounded-lg'>
                    <input className='mr-2' type="radio" name="topic" onChange={handleChange} value={options[1]} />
                    <label className='font-medium'>{options[1]}</label>
                </div>

                <div className='bg-violet-300 p-2 rounded-lg'>
                    <input className='mr-2' type="radio" name="topic" onChange={handleChange} value={options[2]} />
                    <label className='font-medium'>{options[2]}</label>
                </div>

                <div className='bg-violet-300 p-2 rounded-lg'>
                    <input className='mr-2' type="radio" name="topic" onChange={handleChange} value={options[3]} />
                    <label className='font-medium'>{options[3]}</label>
                </div>
            </div>
        </div>
    );
};

export default Quiz;