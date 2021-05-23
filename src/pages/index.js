import React from 'react';

import Layout from '../components/layout';

const IndexPage = () => (
  <Layout title="Home">
    <section className="py-32 text-center w-5/6 mx-auto">
      <div>
        <h3 className="text-4xl font-bold text-gray-500">
          hi! my name is <strong className="text-blue-500">Joshue Abance</strong>
        </h3>
        <p className="text-xl tracking-wide text-gray-500 mt-4">hope you enjoy your stay!</p>
      </div>
    </section>
  </Layout>
);

export default IndexPage;
