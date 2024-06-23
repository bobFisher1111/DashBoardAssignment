import { createAsyncThunk } from '@reduxjs/toolkit';

export const GetHouseSalesData = createAsyncThunk('getHouseSalesData', async (arg, {
  rejectWithValue
}) => {
  try {
    const data = await fetch('house_sales.json').then((response: any) => {
      return response.json();
    });
    return data;
  }
  catch (error: any) {
    rejectWithValue(error.response.data)
  }
});

export default GetHouseSalesData;
