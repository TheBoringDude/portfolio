import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import React from 'react';

const WorksContainer = ({ name, description, repo, website }) => {
  return (
    <div className="relative border border-gray-300 rounded-lg p-6 group hover:scale-105 transform duration-300">
      {/* TODO: this needs a re-work! (implement gatsby-plugin-image) */}
      <img src={`screenshots/${name}.jpeg`} alt={name} className="h-56 w-full object-cover object-top" />

      <hr className="my-2" />

      <a
        href={website ? website : repo}
        target="_blank"
        rel="noreferrer"
        title="Visit project website"
        className="absolute -top-1 -right-1 bg-white border p-1 rounded-lg text-blue-300 hover:text-blue-500"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
          <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
        </svg>
      </a>

      <h3 className="text-2xl font-black tracking-wide text-blue-500 leading-loose">{name}</h3>

      <p className="line-clamp-2 my-1 text-gray-700 lg:text-lg tracking-wide">{description}</p>

      <div className="mt-4">
        <a
          href={repo}
          target="_blank"
          rel="noreferrer"
          title="Visit project repository"
          className="bg-gray-300 hover:bg-blue-500 px-6 py-2 rounded-lg text-gray-600"
        >
          <FontAwesomeIcon icon={faGithub} /> repo
        </a>
      </div>
    </div>
  );
};

WorksContainer.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  repo: PropTypes.string.isRequired,
  website: PropTypes.string
};

export default WorksContainer;
