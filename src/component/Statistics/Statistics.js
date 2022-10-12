import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './Statistics.css'

const Statistics = () => {
    const quizesTopic = useLoaderData();
    let data = quizesTopic.data;
    console.log(data)
    return (
        <div>
            <h1 className='text-3xl font-bold mt-10'>Statistical Chart For All The Topics</h1>
            <ResponsiveContainer className='mx-auto mt-16' width="70%" aspect={3}>
                <LineChart width={500} height={300} data={data}>
                    <Line type="monotone" dataKey="total" stroke="#82ca9d" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

export default Statistics;