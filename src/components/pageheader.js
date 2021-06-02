import React from 'react';
import PropTypes from 'prop-types';

const PageHeader = ({ title, info }) => (
  <div className="w-5/6 mx-auto">
    <div className="py-12 text-center">
      <h3 className="leading-relaxed text-3xl font-black text-blue-500 tracking-wide">{title}</h3>
      <p className="text-gray-700 tracking-wide">{info}</p>
    </div>

    <hr />
  </div>
);

PageHeader.propTypes = {
  title: PropTypes.string.isRequired,
  info: PropTypes.string.isRequired
};

export default PageHeader;
