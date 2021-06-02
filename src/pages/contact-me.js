import React, { useRef, useState } from 'react';

import Layout from '../components/layout';
import PageHeader from '../components/pageheader';

// phurma: https://phurma.vercel.app/api/YaCJ0ns6

const ContactMe = () => {
  const [error, setError] = useState('');

  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const messageRef = useRef(null);

  const handleFormSubmit = e => {
    e.preventDefault();

    const m = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      message: messageRef.current.value
    };

    if (!m.name) {
      setError('Please enter your name!');
      return;
    }
    if (!m.email) {
      setError('Please enter your email!');
      return;
    }
    if (!m.message) {
      setError('Please enter your message!');
      return;
    }

    // there is no error in here
    setError('');

    fetch('https://phurma.vercel.app/api/YaCJ0ns6', {
      method: 'POST',
      body: JSON.stringify(m),
      headers: {
        'content-type': 'application/json'
      }
    })
      .then(r => r.json())
      .then(data => {
        console.log(data);
      })
      .catch(e => {
        console.error(e);
      });
  };

  return (
    <Layout title="Send Me a Message">
      <PageHeader title="Contact Me" info="Send me a quote, message or something that you want to tell me." />

      <div className="w-1/3 mx-auto py-12">
        {error !== '' && <p className="text-center text-red-500 tracking-wider mb-4">{error}</p>}

        <form method="post" onSubmit={handleFormSubmit}>
          <div className="flex flex-col my-2">
            <label className="text-gray-600" for="input-name">
              your name:
            </label>
            <input
              ref={nameRef}
              id="input-name"
              name="name"
              type="text"
              placeholder="what is your name?"
              className="mt-1 py-2 px-3 border rounded-lg tracking-wide text-gray-700"
            />
          </div>
          <div className="flex flex-col my-2">
            <label className="text-gray-600" for="einput-mail">
              your email:
            </label>
            <input
              ref={emailRef}
              id="input-email"
              name="email"
              type="text"
              placeholder="what is your email?"
              className="mt-1 py-2 px-3 border rounded-lg tracking-wide text-gray-700"
            />
          </div>
          <div className="flex flex-col my-2">
            <label className="text-gray-600" for="mesinput-sage">
              your message:
            </label>
            <textarea
              ref={messageRef}
              id="input-message"
              name="message"
              className="mt-1 py-2 px-3 border rounded-lg tracking-wide text-gray-700 h-56"
              placeholder="what is your message?"
            ></textarea>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="mx-auto mt-4 py-2 px-8 bg-blue-400 hover:bg-blue-500 text-white rounded-lg tracking-wide duration-300"
            >
              send message
            </button>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default ContactMe;
