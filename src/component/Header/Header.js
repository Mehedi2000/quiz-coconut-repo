import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div>
            <div className="navbar bg-cyan-300">
                <div className="flex-1">
                    <a className="btn btn-ghost normal-case text-xl">Quiz Coconut</a>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal p-0">
                        <Link to={'/'}><li className='font-medium'><a>Home</a></li></Link>
                        <Link to={'/statistics'}><li className='font-medium'><a>Statistics</a></li></Link>
                        <Link to={'/blog'}><li className='font-medium'><a>Blog</a></li></Link>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;