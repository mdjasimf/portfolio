import React from 'react';
import jasim from '../../jasim.png'

const Banner = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div>
                        <img className='hover:scale-105 duration-700' src={jasim} />
                    </div>
                    <div className='mr-5'>
                        <h1>hi there!</h1>
                        <h1 className="text-6xl font-bold animate-pulse	text-red-500">I AM JASIM</h1>
                        <p className="py-6">A JUNIOR WEB DEVELOPER</p>
                        <button className="btn btn-primary hover:scale-110 hover:bg-indigo-500 duration-300"><a href="https://drive.google.com/u/0/uc?id=15NesVV4UX6a0p1neM3LQI6PQrocfkVOe&export=download">DOWNLOAD MY RESUME</a></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;