import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'gatsby';
import React from 'react';
import Layout from '../components/layout';
import { SocialIcons } from '../components/social-icons';

const IndexPage = () => (
  <Layout title="Home">
    <section className="py-40 text-center w-5/6 mx-auto">
      <h3 className="text-4xl font-bold text-gray-500">
        hi! my name is <strong className="text-blue-500">Joshue Abance</strong>
      </h3>
      <p className="text-xl tracking-wide text-gray-500 mt-4">hope you enjoy your stay!</p>

      <SocialIcons />

      <div className="inline-flex items-center mt-8">
        <Link
          title="Send me a message"
          to="/contact-me"
          className="py-2 px-6 border border-gray-300 rounded-lg text-gray-600 mx-1 inline-flex items-center hover:text-blue-500 hover:border-blue-500 duration-300"
        >
          <FontAwesomeIcon icon={faEnvelope} className="text-base mr-2" />
          send me a message
        </Link>
        <Link
          title="See my works"
          to="/works"
          className="py-2 px-6 border border-gray-300 rounded-lg text-gray-600 mx-1 inline-flex items-center hover:bg-blue-500 hover:border-blue-500 hover:text-white duration-300"
        >
          <FontAwesomeIcon icon={faCode} className="text-base mr-2" />
          my works
        </Link>
      </div>
    </section>
  </Layout>
);

export default IndexPage;
