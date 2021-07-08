import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

const Header = () => (
  <header className="py-4">
    <div className="w-5/6 mx-auto flex items-center justify-between">
      <Link to="/">
        <div className="inline-flex items-center">
          <StaticImage src="../images/user.jpg" className="object-top object-cover rounded-full h-12 w-12" />
          <h1 className="font-bold text-xl text-blue-500 ml-2">Joshue Abance</h1>
        </div>
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
