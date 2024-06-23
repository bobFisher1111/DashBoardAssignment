export const AppBarStyles = {
  display: 'inline-flex',
  position: 'fixed',
  component: 'nav',
  boxShadow: 'none',
  background: '#b3a369',
  zIndex: 2,
  '&.MuiPaper-root': {
    '&.MuiAppBar-root': {
      paddingRight: '0px !important',
    }
  },
};

export const GridRootStyles = {
  height: '64px',
};

export const LogoRootStyles = {
  paddingLeft: '16px',
};

export const RootStyles = {
  display: 'block',
};

export const TitleStyles = {
  fontSize: '20px',
  color: '#212322',
  fontFamily: '"Roboto","Helvetica","Arial",sans-serif',
  fontWeight: 500,
  textTransform: 'uppercase',
  letterSpacing: '.1em',
  '@media only screen and (max-width: 600px)': {
    fontSize: '16px',
  },
};

export const UserAvatarStyles = {
  height: '45px',
  width: '45px',
  borderRadius: '50%',
};

export const UserNameStyles = {
  letterSpacing: '.1em',
  color: '#212322',
  fontSize: '20px',
  paddingRight: '8px',
  '@media only screen and (max-width: 780px)': {
    display: 'none',
  },
};

export const UserRootStyles = {
  paddingRight: '16px',
};
