import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import HouseSalesDataSlice from './HouseSalesDataSlice';
import FilterHouseSalesSliceData from './FilterHouseSalesSliceData';

export const store = configureStore({
  reducer: {
    houseSalesData: HouseSalesDataSlice,
    filterHouseSalesData: FilterHouseSalesSliceData
  }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;