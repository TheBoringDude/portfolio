import React from 'react';
import WebApps from '../../content/works/webapps.json';
import Websites from '../../content/works/websites.json';
import Layout from '../components/layout';
import PageHeader from '../components/pageheader';
import WorksContainer from '../components/works-container';

const WorksPage = () => (
  <Layout title="Works">
    <PageHeader
      title="Discover my projects"
      info="I try to code and learn on new stuff everyday. Try to check on them..."
    />

    <div className="w-5/6 mx-auto">
      <div className="py-6">
        <h2 className="text-xl mb-5 text-gray-600 font-bold">Web Apps</h2>

        <div className="grid grid-cols-1  sm:grid-cols-2 gap-8">
          {WebApps.map((proj, index) => (
            <WorksContainer key={index} {...proj} />
          ))}
        </div>
      </div>

      <div className="py-6">
        <h2 className="text-xl mb-5 text-gray-600 font-bold">Websites</h2>

        <div className="grid grid-cols-1  sm:grid-cols-2 gap-8">
          {Websites.map((proj, index) => (
            <WorksContainer key={index} {...proj} />
          ))}
        </div>
      </div>
    </div>
  </Layout>
);

export default WorksPage;
