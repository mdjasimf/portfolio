import React from 'react';
import { useNavigate } from 'react-router-dom';

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
            <h1 className='text-success text-center text-5xl font-bold my-4'>MY PROJECTS</h1>
            <div className='flex justify-center'>
                <div class="card w-96 bg-base-100 shadow-xl">
                    <div class="card-body items-center text-center">
                        <h2 class="card-title">Metalwork Manufacturer.</h2>
                        <p>It is a Manufacturer Website</p>
                        <div class="card-actions">
                            <button onClick={handleProject1} class="btn btn-primary">DETAILS</button>
                        </div>
                    </div>
                </div>
                <div class="card w-96 bg-base-100 shadow-xl">
                    <div class="card-body items-center text-center">
                        <h2 class="card-title">fruits warehouse</h2>
                        <p>It is a warehouse Website</p>
                        <div class="card-actions">
                            <button onClick={handleProject2} class="btn btn-primary">DETAILS</button>
                        </div>
                    </div>
                </div>
                <div class="card w-96 bg-base-100 shadow-xl">
                    <div class="card-body items-center text-center">
                        <h2 class="card-title">Health Couch</h2>
                        <p>It is a Health tips Website</p>
                        <div class="card-actions">
                            <button onClick={handleProject3} class="btn btn-primary">DETAILS</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;