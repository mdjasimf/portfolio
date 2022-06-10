import React from 'react';
import { useNavigate } from 'react-router-dom';
import project1 from '../../screencapture-my-12-assignment-web-app-2022-06-10-14_38_37 (2).png';
import project2 from '../../project2s1.png';
import project3 from '../../project3s1 (1).png';

const Projects = () => {
    const navigate = useNavigate();

    const handleProject1 = () => {
        navigate('/project1')
    }
    const handleProject2 = () => {
        navigate('/project2')
    }
    const handleProject3 = () => {
        navigate('/project3')
    }

    return (
        <div>
            <h1 className='text-success text-center text-5xl font-bold my-4 animate-pulse'>MY PROJECTS</h1>
            <div className='flex justify-center'>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure class="px-2 pt-2">
                        <img src={project1} alt="Shoes" class="rounded-xl w-80 hover:skew-y-12 duration-700" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Metalwork Manufacturer.</h2>
                        <p>It is a Manufacturer Website</p>
                        <div className="card-actions">
                            <button onClick={handleProject1} className="btn btn-primary hover:scale-110 hover:bg-indigo-500 duration-700">DETAILS</button>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure class="px-2 pt-2">
                        <img src={project2} alt="Shoes" class="rounded-xl w-80 hover:skew-y-12 duration-700

" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">fruits warehouse</h2>
                        <p>It is a warehouse Website</p>
                        <div className="card-actions">
                            <button onClick={handleProject2} className="btn btn-primary hover:scale-110 hover:bg-indigo-500 duration-700">DETAILS</button>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure class="px-2 pt-2">
                        <img src={project3} alt="Shoes" class="rounded-xl w-80 hover:skew-y-12 duration-700

" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Health Couch</h2>
                        <p>It is a Health tips Website</p>
                        <div className="card-actions">
                            <button onClick={handleProject3} className="btn btn-primary hover:scale-110 hover:bg-indigo-500 duration-700">DETAILS</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;