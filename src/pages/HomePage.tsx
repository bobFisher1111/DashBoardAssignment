import React from 'react';
import Layout from '../layout/Layout';
import DashBoardComponent from '../components/dashboard/DashBoardComponent';

const HomePage: React.FC = () => {
  return (
    <>
      <Layout />
      <DashBoardComponent />
    </>
  );
};

export default HomePage;
