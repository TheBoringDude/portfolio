import { faFacebook, faGithub, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

export const SocialIcons = () => (
  <ul className="my-8 flex items-center justify-center text-2xl text-gray-700">
    <li>
      <a
        target="_blank"
        rel="noreferrer"
        href="https://web.facebook.com/joshue1337/"
        className="hover:text-blue-500 transform transition-all mx-1 hover:scale-105 duration-300"
      >
        <FontAwesomeIcon icon={faFacebook} />
      </a>
    </li>
    <li>
      <a
        target="_blank"
        rel="noreferrer"
        href="https://twitter.com/joshabance"
        className="hover:text-blue-500 transform transition-all mx-1 hover:scale-105 duration-500"
      >
        <FontAwesomeIcon icon={faTwitter} />
      </a>
    </li>
    <li>
      <a
        target="_blank"
        rel="noreferrer"
        href="https://www.instagram.com/_3uhsoj/"
        className="hover:text-blue-500 transform transition-all mx-1 hover:scale-105 duration-300"
      >
        <FontAwesomeIcon icon={faInstagram} />
      </a>
    </li>
    <li>
      <a
        target="_blank"
        rel="noreferrer"
        href="https://github.com/TheBoringDude/"
        className="hover:text-blue-500 transform transition-all mx-1 hover:scale-105 duration-300"
      >
        <FontAwesomeIcon icon={faGithub} />
      </a>
    </li>
  </ul>
);
