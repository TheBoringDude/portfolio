/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from 'react';
import PropTypes from 'prop-types';

import Header from './header';
import Seo from './seo';
import Footer from './footer';

const Layout = ({ children, title, description }) => {
  return (
    <>
      <Seo title={title} description={description} />
      <Header />
      <hr />

      <main>{children}</main>

      <hr />
      <Footer />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string
};

export default Layout;
