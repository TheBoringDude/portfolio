import { faFacebook, faGithub, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { LinkPrimary } from 'empty-ui';
import React from 'react';

export const SocialIcons = () => (
  <ul className="my-8 flex items-center justify-center text-2xl text-gray-700">
    <li>
      <LinkPrimary
        target="_blank"
        rel="noreferrer"
        href="https://web.facebook.com/joshue1337/"
        className="transform transition-all mx-1 hover:scale-105 duration-300"
      >
        <FontAwesomeIcon icon={faFacebook} />
      </LinkPrimary>
    </li>
    <li>
      <LinkPrimary
        target="_blank"
        rel="noreferrer"
        href="https://web.facebook.com/joshue1337/"
        className="transform transition-all mx-1 hover:scale-105 duration-300"
      >
        <FontAwesomeIcon icon={faTwitter} />
      </LinkPrimary>
    </li>
    <li>
      <LinkPrimary
        target="_blank"
        rel="noreferrer"
        href="https://web.facebook.com/joshue1337/"
        className="transform transition-all mx-1 hover:scale-105 duration-300"
      >
        <FontAwesomeIcon icon={faInstagram} />
      </LinkPrimary>
    </li>
    <li>
      <LinkPrimary
        target="_blank"
        rel="noreferrer"
        href="https://web.facebook.com/joshue1337/"
        className="transform transition-all mx-1 hover:scale-105 duration-300"
      >
        <FontAwesomeIcon icon={faGithub} />
      </LinkPrimary>
    </li>
  </ul>
);
