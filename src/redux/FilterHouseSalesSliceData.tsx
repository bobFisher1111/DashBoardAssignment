import { createSlice } from '@reduxjs/toolkit';
import GetHouseSalesData from './GetHouseSalesData';

const FilterHouseSalesSliceData = createSlice({
  name: 'filterHouseSalesData',
  initialState: {
    loading: false,
    data: [],
    error: false,
  },
  reducers: {
    filterData: (state: any, action: any) => {
      state.data = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(GetHouseSalesData.pending, (state: any) => {
      state.loading = true;
    });
    builder.addCase(GetHouseSalesData.fulfilled, (state: any, { payload }) => {
      state.loading = false;
      state.data = payload;
    });
    builder.addCase(GetHouseSalesData.rejected, (state: any) => {
      state.loading = false;
      state.error = true
    });
  }
});

export const { filterData } = FilterHouseSalesSliceData.actions;
export default FilterHouseSalesSliceData.reducer;
