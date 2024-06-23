import React, {useEffect, useState} from 'react';
import { useSelector } from 'react-redux';
import { Grid } from '@mui/material';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-quartz.css';
import {
  TableRootStyles,
} from './TableComponentStyles';

const TableComponents: React.FC = () => {
  const houseSalesData = useSelector((state: any) => state?.filterHouseSalesData?.data);
  const [pagination, setPagination] = useState<boolean>(true);
  const [screenWidth, setScreenWidth] = useState(window.screen.width);

  const screenSize = () => {
    setScreenWidth(window?.innerWidth);
  };

  useEffect(() => {
    if (screenSize) {
      window?.addEventListener("resize", screenSize);
    }
    return () => window.removeEventListener("resize", screenSize);
  }, []);

  useEffect(() => {
    if (screenWidth <= 700) {
      setPagination(false);
    }
    if (screenWidth >= 700) {
      setPagination(true);
    }
  }, [screenWidth, pagination]);

  const data = houseSalesData?.map((item: any) => item);

  const rowD = () => data?.map((item: any) => ({
    Address: item.Address,
    Town: item.Town,
    ListPrice: item.List_Price,
    SoldPrice: item.Sold_Price,
    DaysOnMarket: item.Days_On_Market,
    ClosedDate: item['Closed Date'],
    PercentPremium:  ((item.Sold_Price - item.List_Price) / item.List_Price * 100),
    YearBuilt: item.Year_Built !== '' ? item.Year_Built : null,
    Style: item.Style,
    NumberRoom: item.Num_Room,
    NumberBedrooms: item.Num_Bedrooms,
    TBT: item.TBT,
    NumberGarages: item.Num_Garages,
    Basement: item.Basement,
    MLS: item.MLS
  }));

  const colDefs: any = [
    {
      field: "Address",
      checkboxSelection: true,
    },
    {
      field: "Town"
    },
    {
      field: "ListPrice"
    },
    {
      field: "SoldPrice"
    },
    {
      field: 'DaysOnMarket'
    },
    {
      field: 'ClosedDate'
    },
    {
      field: 'PercentPremium'
    },
    {
      field: 'YearBuilt'
    },
    {
      field: 'Style'
    },
    {
      field: 'NumberRoom'
    },
    {
      field: 'NumberBedrooms'
    },
    {
      field: 'TBT'
    },
    {
      field: 'NumberGarages'
    },
    {
      field: 'Basement'
    },
    {
      field: 'MLS',
    }
  ];
  
  return (
    <Grid
      className='ag-theme-quartz-dark'
      sx={TableRootStyles}
    >
      <AgGridReact
        columnDefs={colDefs}
        rowData={rowD()}
        rowSelection='multiple'
        pagination={pagination}
        paginationPageSize={10}
        paginationPageSizeSelector={[10, 20, 30]}
      />
    </Grid>     
  );
};

export default TableComponents;
