import React from 'react';

const Contact = () => {


    return (
        <div className='flex justify-center'>
            <div class="my-5 card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <div className='card-body'>
                    <form method="POST" action="https://formsubmit.co/mdjasimf@gmail.com" enctype="multipart/form-data">
                        <input class="input input-bordered my-2" type="email" name="email" placeholder="Your email" />
                        <input class="input input-bordered my-2" type="text" name="name" placeholder="Your name" />
                        <textarea class="input input-bordered my-2" name="message" placeholder="Write Details" /><br />
                        <button type="submit">Send</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;