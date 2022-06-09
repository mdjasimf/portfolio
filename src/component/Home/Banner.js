import React from 'react';
import jasim from '../../jasim.png'

const Banner = () => {
    return (
        <div>
            <div class="hero min-h-screen bg-base-200">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <div>
                        <img src={jasim} />
                    </div>
                    <div className='mr-5'>
                        <h1>hi there!</h1>
                        <h1 class="text-6xl font-bold">I AM JASIM</h1>
                        <p class="py-6">A PROFESSIONAL WEB DEVELOPER</p>
                        <button class="btn btn-primary"><a href="https://drive.google.com/file/d/1JaH92RiISIIhnKjy34BEjMXBeN4G-uiS/view?usp=sharing">DOWNLOAD MY RESUME</a></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;