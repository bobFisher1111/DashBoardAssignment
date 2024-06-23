export const BodyStyles = {
  margin: '35px 0px 20px 0px',
};

export const DrawerRootStyles = {
  position: 'abosolute',
  flexGrow: 1,
  bgcolor: 'background.default',
  p: 3,
  margin: '32px',
  '@media only screen and (max-width: 600px)': {
    margin: '20px 0px 0px 0px',
    position: 'abosolute',
  },
  '@media only screen and (min-width: 600px & max-width: 1435px)': {
    position: 'fixed',
  },
};

export const DrawerStyles = {
  width: 275,
  flexShrink: 0,
  '& .MuiDrawer-paper': {
    width: 275,
    boxSizing: 'border-box',
    top: '65px',
  },
  '@media only screen and (max-width: 1435px)': {
    display: 'none',
  },
};

export const DropDownGridStyles = {
  alignItems: 'center',
  '@media only screen and (min-width: 1435px)': {
    display: 'none',
    paddingRight: '36px',
  },
};

export const GraphGridStyles = {
  height: '425px',
  width: '1200px',
  marginBottom: '32px',
  '@media only screen and (max-width: 1155px)': {
    width: '400px',
    height: '400px',
    overflow: 'hidden',
    marginBottom: '0px',
  },
};

export const GraphTitleStyles = {
  fontSize: '36px',
  color: '#072535',
  '@media only screen and (max-width: 600px)': {
    fontSize: '24px',
  },
};

export const RootStyles = {
  display: 'flex',
  '@media only screen and (max-width: 1435px)': {
    display: 'block'
  },
};

export const TownsIconStyles = {
  color: '#072535',
  alignItems: 'center'
};

