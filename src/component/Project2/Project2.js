import React from 'react';
import project2s1 from '../../project2s1.png';
import project2s2 from '../../project2s2 (1).png';
import project2s3 from '../../project2s3 (1).png';

const Project2 = () => {
    return (
        <div>
            <div class="card bg-base-100 shadow-xl">
                <h2 class="text-center text-success text-5xl my-5 ">FRUITS WAREHOUSE</h2>
                <div className='flex justify-center shadow-xl border-purple-800 p-5'>
                    <figure class="px-2 pt-2">
                        <img src={project2s1} alt="Shoes" class="rounded-xl w-80" />
                    </figure>
                    <figure class="px-2 pt-2">
                        <img src={project2s2} alt="Shoes" class="rounded-xl w-80" />
                    </figure>
                    <figure class="px-2 pt-2">
                        <img src={project2s3} alt="Shoes" class="rounded-xl w-80" />
                    </figure>
                </div>
                <div class="card-body items-center text-center">
                    <div class="card-actions flex justify-center">
                        <button className='btn btn-primary hover:scale-110 hover:bg-indigo-500 duration-700'><a href="https://my-11th-assignment.firebaseapp.com/" target="_blank">live link</a></button>
                        <button className='btn btn-primary hover:scale-110 hover:bg-indigo-500 duration-700'><a href="https://github.com/mdjasimf/my-11th-assignment" target="_blank">github client link</a></button>
                        <button className='btn btn-primary hover:scale-110 hover:bg-indigo-500 duration-700'><a href="https://github.com/mdjasimf/my-11th-assignment-server" target="_blank">github server link</a></button>
                    </div>
                    <div>
                        <p>This a warehouse website. The technology I used to create this website tht is react, react router,firebase ,react firebase hook, bootstrap framework, normal fetch for load data,mongodb for store data, heroku for deploy server site etc</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Project2;