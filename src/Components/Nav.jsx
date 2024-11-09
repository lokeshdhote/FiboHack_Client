import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <div className='w-full absolute z-10 top-0 h-20 flex items-center justify-between p-10'>
            <div>
                <img className='w-44 ml-14' src="https://eventally.vercel.app/_next/static/media/logo-transparent-svg.ccd037f9.svg" alt="" />
            </div>
            <div className='flex gap-5'>

                <Link
                    to=""
                    className="cursor-pointer font-medium hover:bg-[#A485F9] hover:text-white duration-300 bg-[#b498ff] mr-10 rounded-lg  flex items-center px-6 py-3"
                >
                    Login
                </Link>
            </div>
        </div>
    );
}

export default Nav;
