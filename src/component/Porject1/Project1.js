import React from 'react';
import project1s1 from '../../screencapture-my-12-assignment-web-app-2022-06-10-14_38_37 (2).png';
import project1s2 from '../../project1s1.png';
import project1s3 from '../../project1s3 (1).png'

const Project1 = () => {

    return (
        <div>
            <div class="card bg-base-100 shadow-xl">
                <h2 class="text-center text-success text-5xl my-5 ">Metalwork Manufacturer.</h2>
                <div className='flex justify-center shadow-xl border-purple-800 p-5'>
                    <figure class="px-2 pt-2">
                        <img src={project1s1} alt="Shoes" class="rounded-xl w-80" />
                    </figure>
                    <figure class="px-2 pt-2">
                        <img src={project1s2} alt="Shoes" class="rounded-xl w-80" />
                    </figure>
                    <figure class="px-2 pt-2">
                        <img src={project1s3} alt="Shoes" class="rounded-xl w-80" />
                    </figure>
                </div>
                <div class="card-body items-center text-center">
                    <div class="card-actions flex justify-center">
                        <button className='btn btn-primary hover:scale-110 hover:bg-indigo-500 duration-700'><a href="https://my-12-assignment.web.app/" target="_blank">live link</a></button>
                        <button className='btn btn-primary hover:scale-110 hover:bg-indigo-500 duration-700'><a href="https://github.com/mdjasimf/my-12-assignment" target="_blank">github client link</a></button>
                        <button className='btn btn-primary hover:scale-110 hover:bg-indigo-500 duration-700'><a href="https://github.com/mdjasimf/my-12-server" target="_blank">github server link</a></button>
                    </div>
                    <div>
                        <p>This a metalwork manufacturer website. The technology I used to create this website tht is react, react router, react hook form,firebase ,react firebase hook, daisyui framework,react query ,axios and normal fetch for load data,mongodb for store data, heroku for deploy server site etc</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Project1;