import React, {useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { AppDispatch } from '../../redux/store';
import { filterData } from '../../redux/FilterHouseSalesSliceData';
import {
  FormControlStyles,
  TextcolorStyles,
} from './DropDownComponentStyles';

const DropDownComponent = () => {
  const houseSalesData = useSelector((state: any) => state?.houseSalesData?.data);
  const dispatch = useDispatch<AppDispatch>();
  const [town, setTown] = useState<any>('All Towns');

  const FilterTown = (town: any) => houseSalesData && houseSalesData.filter((item: any) => {
    return item.Town === town;
  });

  useEffect(() => {
    if (town === 'All Towns') {
      dispatch(filterData(houseSalesData));
    }
    if (town === 'Montclair Twp.') {
      dispatch(filterData(FilterTown('Montclair Twp.')));
    }
    if (town === 'Glen Ridge Boro Twp.') {
      dispatch(filterData(FilterTown('Glen Ridge Boro Twp.')));
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [town, dispatch, houseSalesData]);

  const handleChange = (event: any) => {
    setTown(event.target.value);
  };

  return (
    <>
      <FormControl
        aria-label="Towns dropdown"
        size="small"
        sx={FormControlStyles}
      >
        <Select
          aria-label="select from drop down"
          value={town}
          onChange={handleChange}
          displayEmpty
          sx={TextcolorStyles}
        >
          <MenuItem
            aria-label="All Towns drop down"
            value={'All Towns'}
            sx={TextcolorStyles}
          >
            All Towns
          </MenuItem>
          <MenuItem
            aria-label="Montclair Twp drop down"
            value={'Montclair Twp.'}
            sx={TextcolorStyles}
          >
            Montclair Twp
          </MenuItem>
          <MenuItem
            aria-label="Glen Ridge Boro Twp drop down"
            value={'Glen Ridge Boro Twp.'}
            sx={TextcolorStyles}
          >
            Glen Ridge Boro Twp
          </MenuItem>
        </Select>
      </FormControl>
    </>
  );
};

export default DropDownComponent;
