import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';
// import MenuIcon from '@material-ui/icons';
// import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
  
  title: {
    flexGrow: 1,
    display: 'none',
  },
  search: {
    position: 'relative',
    borderRadius: 5,
    backgroundColor: fade('#fff', 0.15),
    '&:hover': {
      backgroundColor: fade('#fff', 0.25),
    },
    marginLeft: 0,
    width: '100%',
  },
  searchIcon: {
    padding: 2,
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: 1,
    // vertical padding + font size from searchIcon
    paddingLeft: 1,
    width: '100%',
    },
}));

export default function NavBar() {
  const styles = useStyles();

  return (
    <div className={styles.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={styles.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            
          </IconButton>
          <Typography className={styles.title} variant="h6" noWrap>
            Material-UI
          </Typography>
          <div className={styles.search}>
            <div className={styles.searchIcon}>
              
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: styles.inputRoot,
                input: styles.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
