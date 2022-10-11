import React from 'react';


const Quiz = ({ singleQuestion }) => {
    console.log(singleQuestion)
    const { question, options } = singleQuestion;
    return (
        <div>
            <h1>{question}</h1>
            <div>
                <input type="radio" />
                <label>{options[0]}</label>

                <input type="radio" />
                <label>{options[1]}</label>

                <input type="radio" />
                <label>{options[2]}</label>

                <input type="radio" />
                <label>{options[3]}</label>
            </div>
        </div>
    );
};

export default Quiz;