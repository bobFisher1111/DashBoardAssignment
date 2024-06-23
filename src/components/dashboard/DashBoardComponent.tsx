import React from 'react';
import { useSelector } from 'react-redux';
import {
  Box,
  Drawer,
  Grid,
  Typography,
} from '@mui/material';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import ScatterPlotGraphComponent from '../graphs/ScatterPlotGraphComponent';
import TableComponents from '../tables/TableComponents';
import DrawerComponent from '../drawer/DrawerComponent';
import DropDownComponent from '../drawer/DropDownComponent';
import {
  BodyStyles,
  DrawerRootStyles,
  DrawerStyles,
  DropDownGridStyles,
  GraphGridStyles,
  GraphTitleStyles,
  RootStyles,
  TownsIconStyles,
} from './DashBoardComponentStyles';

const DashBoardComponent = () => {
  const houseSalesData = useSelector((state: any) => state?.filterHouseSalesData?.data);

  const data = () => houseSalesData && houseSalesData?.map((item: any) => {
    const calculateNumber = () => {
      return ((item.Sold_Price - item.List_Price) / item.List_Price * 100);
    }
    const splitData = () => {
      if (item['Closed Date'] === undefined) {
        return
      }
      const splitClosedDoor = item['Closed Date'].split("/");
      const formatData = `${splitClosedDoor[0]}/${splitClosedDoor[1]}/20${splitClosedDoor[2]}`
      return formatData;
    }
    splitData();
    const dataObject = {
      'data': [{
        "x": splitData(),
        "y": calculateNumber()
      }]
    }
    return dataObject;
  });

  return (
    <Grid 
      sx={RootStyles}
    >
      <Drawer
        variant="permanent"
        anchor="left"
        sx={DrawerStyles}
      >
        <DrawerComponent />
      </Drawer>
      <Box
        component="main"
        sx={DrawerRootStyles}
      >
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Grid
            item
            container
            justifyContent="flex-start"
            alignItems="center"
            sx={BodyStyles}
          >
            <Grid
              item
              container
              justifyContent="flex-start"
              xs={12}
              sx={DropDownGridStyles}
            >
              <LocationCityIcon
                fontSize="medium"
                sx={TownsIconStyles}
              />
              <DropDownComponent />
            </Grid>
            <Grid
              item
              xs={12}
            >
              <Typography
                sx={GraphTitleStyles}
              >
                Premium Home Trends Over Time
              </Typography>
            </Grid>
          </Grid>
          <Grid
            item
            xs={12}
            sx={GraphGridStyles}
          >
            {houseSalesData.length !== 0 && 
              <ScatterPlotGraphComponent data={data()}/> 
            }
          </Grid>
          <Grid
            item
            xs={12}
          >
            <TableComponents />
          </Grid>
        </Grid>
      </Box>
    </Grid>
  );
};

export default DashBoardComponent;
