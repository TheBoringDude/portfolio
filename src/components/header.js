import React from 'react';
import { Link } from 'gatsby';

const Header = () => (
  <header className="py-4">
    <div className="w-5/6 mx-auto flex items-center justify-between">
      <Link to="/">
        <h1 className="font-bold text-xl text-blue-500">Joshue Abance</h1>
      </Link>

      <ul className="flex items-center">
        <li className="mx-8">
          <Link to="/blog" className="text-gray-600 hover:text-blue-500">
            blog
          </Link>
        </li>
        <li className="ml-8">
          <Link to="/works" className="text-gray-600 hover:text-blue-500">
            works
          </Link>
        </li>
      </ul>
    </div>
  </header>
);

export default Header;
