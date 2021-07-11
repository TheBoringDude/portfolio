/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import UIProvider from 'empty-ui';
import PropTypes from 'prop-types';
import * as React from 'react';
import Footer from './footer';
import Header from './header';
import Seo from './seo';

const Layout = ({ children, title, description }) => {
  return (
    <UIProvider
      config={{
        buttons: {
          primary: 'border text-gray-700 hover:bg-blue-500 hover:text-white',
          info: 'border text-gray-700 hover:text-blue-500 hover:border-blue-300'
        },
        links: {
          primary: 'hover:text-blue-500'
        },
        headings: {
          h3: 'text-2xl underline font-black tracking-wide text-blue-500 leading-loose'
        }
      }}
    >
      <Seo title={title} description={description} />
      <Header />
      <hr />

      <main>{children}</main>

      <hr />
      <Footer />
    </UIProvider>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string
};

export default Layout;
