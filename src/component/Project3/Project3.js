import React from 'react';
import project3s1 from '../../project3s1 (1).png';
import project3s2 from '../../project3s2 (1).png';
import project3s3 from '../../project3s3 (1).png'

const Project3 = () => {
    return (
        <div>
            <div class="card bg-base-100 shadow-xl">
                <h2 class="text-center text-success text-5xl my-5 ">Health Couch</h2>
                <div className='flex justify-center shadow-xl border-purple-800 p-5'>
                    <figure class="px-2 pt-2">
                        <img src={project3s1} alt="Shoes" class="rounded-xl w-80" />
                    </figure>
                    <figure class="px-2 pt-2">
                        <img src={project3s2} alt="Shoes" class="rounded-xl w-80" />
                    </figure>
                    <figure class="px-2 pt-2">
                        <img src={project3s3} alt="Shoes" class="rounded-xl w-80" />
                    </figure>
                </div>
                <div class="card-body items-center text-center">
                    <div class="card-actions flex justify-center">
                        <button className='btn btn-outline'><a href="https://my-10th-assignment.web.app/?fbclid=IwAR0hA1mo2ywAKnGrqm2Y7iR5qXJiy2IzJnxM82OrP4IGsRN93XK1j-3wU2Q" target="_blank">live link</a></button>
                        <button className='btn btn-outline'><a href="https://github.com/mdjasimf/my-10-assignment" target="_blank">github client link</a></button>
                    </div>
                    <div>
                        <p>This a health couch website. The technology I used to create this website that react,react router and bootstrap framework. Email and google login system implemented.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Project3;