import React from 'react';

const Contact = () => {


    return (
        <div>
            <h1 className='text-center'>feel free to contact me</h1>
            <div className='flex justify-center'>
                <div class="my-5 card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className='card-body'>
                        <form method="POST" action="https://formsubmit.co/mdjasimf@gmail.com" enctype="multipart/form-data">
                            <input class="input w-80 input-bordered my-2" type="email" name="email" placeholder="Your email" />
                            <input class="input w-80 input-bordered my-2" type="text" name="name" placeholder="Your name" />
                            <textarea class="input w-80 input-bordered my-2" name="message" placeholder="Write Details" /><br />
                            <button className='btn btn-primary btn-success w-80' type="submit">Send</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;