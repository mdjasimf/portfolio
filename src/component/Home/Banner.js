import React from 'react';
import jasim from '../../jasim.png'

const Banner = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div>
                        <img src={jasim} />
                    </div>
                    <div className='mr-5'>
                        <h1>hi there!</h1>
                        <h1 className="text-6xl font-bold">I AM JASIM</h1>
                        <p className="py-6">A PROFESSIONAL WEB DEVELOPER</p>
                        <button className="btn btn-primary"><a href="https://drive.google.com/u/0/uc?id=15NesVV4UX6a0p1neM3LQI6PQrocfkVOe&export=download">DOWNLOAD MY RESUME</a></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;