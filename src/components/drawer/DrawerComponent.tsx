import React from 'react';
import {
  Grid,
  Typography,
  Button
} from '@mui/material';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import HomeIcon from '@mui/icons-material/Home';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import DropDownComponent from './DropDownComponent';
import {
  AnalyticsButtonStyles,
  AnalyticsGridRootStyles,
  AnalyticsIconStyles,
  AnalyticsTitleStyles,
  FilterGridRootStyles,
  GridRootStyles,
  HomeButtonGridRootStyles,
  HomeButtonStyles,
  HomeGridTitleStyles,
  HomeTitleStyles,
  IconStyles,
  RootStyles,
  TitleStyles,
} from './DrawerComponentStyles';

const DrawerComponent: React.FC = () => {
  
  return (
    <Grid
      container
      sx={RootStyles}
    >
      <Grid
        item
        xs={12}
        container
        sx={GridRootStyles}
      >
        <Grid>
          <Typography
            sx={TitleStyles}
          >
            DashBoards
          </Typography>
        </Grid>
      </Grid>
      <Button
        sx={HomeButtonStyles}
      >
        <a 
          href="https://www.kkr.com/" 
          target="_blank" 
          rel="noreferrer"
          style={{
            textDecoration: 'none',
          }}
        >
          <Grid
            item
            container
            justifyContent={'flex-start'}
            alignContent='center'
            xs={12}
            sx={HomeButtonGridRootStyles}
          >
            <Grid>
              <HomeIcon 
                fontSize="medium"
                sx={IconStyles}
              /> 
            </Grid>
            <Grid
              sx={HomeGridTitleStyles}
            >
              <Typography
                sx={HomeTitleStyles}
              >
                Home
              </Typography>
            </Grid>
          </Grid>
        </a>
      </Button>
      <Grid
        item
        container
        xs={10}
        sx={AnalyticsGridRootStyles}
      >
        <Button
          sx={AnalyticsButtonStyles}
        >
          <Grid>
            <AnalyticsIcon 
              fontSize="medium"
              sx={AnalyticsIconStyles}
            /> 
          </Grid>
          <Grid
            sx={HomeGridTitleStyles}
          >
            <Typography
              sx={AnalyticsTitleStyles}
            >
              Analytics
            </Typography>
          </Grid>
        </Button>
      </Grid>
      <Grid
        item
        container
        xs={12}
        sx={FilterGridRootStyles}
      >
        <Grid>
          <Typography
            sx={TitleStyles}
          >
            Filter
          </Typography>
        </Grid>
      </Grid>
      <Grid
        item
        container
        xs={12}
        sx={GridRootStyles}
      >
        <Grid>
          <LocationCityIcon
            fontSize="medium"
            sx={IconStyles}
          />
        </Grid>
        <Grid>
          <DropDownComponent />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default DrawerComponent;
