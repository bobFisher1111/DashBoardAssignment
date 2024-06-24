import React from 'react';
import {
  AppBar,
  Box,
  CardMedia,
  Grid,
  Typography,
} from '@mui/material';
import { 
  AppBarStyles,
  GridRootStyles,
  LogoRootStyles,
  LogoStyles,
  RootStyles,
  TitleStyles,
  UserAvatarStyles,
  UserNameStyles,
  UserRootStyles,
} from './KStarAppBarStyles';

const KStarAppBar: React.FC = () => {
  
  return (
    <Box
      sx={RootStyles}
    >
      <AppBar
        sx={AppBarStyles}
      >
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          sx={GridRootStyles}
        >
          <Grid
            item
            xs={3}
            sm={3}
            md={3}
            lg={4}
            xl={4}
            container
            justifyContent="flex-start"
            alignItems="center"
            sx={LogoRootStyles}
          >
            <a
              href="https://www.ksam.com/"
            >
              <Box 
                component="img"
                src="https://www.ksam.com/wp-content/themes/ksam/dist/images/kstar-logo.png"
                alt="K-Star Logo" 
                sx={LogoStyles}
              />
            </a>
          </Grid>
          <Grid
            item
            xs={6}
            sm={6}
            md={6}
            lg={4}
            xl={4}
            container
            justifyContent="center"
            alignItems="center"
          >
            <Typography
              sx={TitleStyles}
            >
              Real Estate Dashboard
            </Typography>
          </Grid>
          <Grid
            item
            xs={3}
            sm={3}
            md={3}
            lg={4}
            xl={4}
            container
            justifyContent="flex-end"
            alignItems="center"
            sx={UserRootStyles}
          >
            <Typography
              sx={UserNameStyles}
            >
              Robert Roseberry
            </Typography>
            <CardMedia
              component="img"
              image={'/avatar.png'}
              alt="Avatar Image"
              sx={UserAvatarStyles}
            />
          </Grid>
        </Grid>
      </AppBar>
    </Box>
  );
};

export default KStarAppBar;
