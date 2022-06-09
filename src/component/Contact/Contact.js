import React from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {

    const sentEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_pvxox0i', 'template_jjhgsrb', e.target,);
    }



    return (
        <div className='flex justify-center'>
            <div class="my-5 card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <div className='card-body'>
                    <form onSubmit={sentEmail}>
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Your Name</span>
                            </label>
                            <input type="text" placeholder="Your Name" name="name" class="input input-bordered" />
                        </div>
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Write Something</span>
                            </label>
                            <textarea rows="4" type="text" name="message" placeholder="Write something" class="input input-bordered" />
                        </div>
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="email" name="email" class="input input-bordered" />
                        </div>
                        <button type='submit' className='btn btn-outline btn-success my-2'>Send</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;