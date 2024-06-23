import React, { useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from './redux/store';
import GetHouseSalesData from './redux/GetHouseSalesData';
import HomePage from './pages/HomePage';

const App = () => {
  const dispatch = useDispatch<AppDispatch>();
  useMemo(() => {
    dispatch(GetHouseSalesData());
  }, [dispatch]);
  
  return (
    <>
      <HomePage />
    </>
  );
}

export default App;
