import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <>
            <div className="navbar bg-violet-500">
                <div className="flex-1 ml-8">
                    <a className="btn btn-ghost normal-case text-2xl font-bold text-white">Quiz Coconut</a>
                </div>
                <div className="flex-none">
                    <ul className={`menu menu-horizontal p-0}`}>
                        <Link to={'/'}><li className='font-medium mr-2 text-white'><a>Home</a></li></Link>
                        <Link to={'/statistics'}><li className='font-medium mr-2 text-white'><a>Statistics</a></li></Link>
                        <Link to={'/blog'}><li className='font-medium mr-2 text-white'><a>Blog</a></li></Link>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Header;