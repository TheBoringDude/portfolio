import { Link } from 'gatsby';
import React from 'react';

const Footer = () => (
  <footer className="px-4 py-8 text-center">
    <div>
      <p className="text-sm text-gray-800 tracking-wide">
        &copy; {new Date().getFullYear()} - <Link to="/">Joshue Abance (TheBoringDude)</Link>
      </p>
      <small className="text-gray-700 tracking-wide">
        <a href="mailto:iamcoderx@gmail.com" title="Send Me an Email">
          iamcoderx@gmail.com
        </a>
      </small>
    </div>
  </footer>
);

export default Footer;
