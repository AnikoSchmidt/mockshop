import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { fade, makeStyles } from '@material-ui/core/styles';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import SearchIcon from '@material-ui/icons/Search';
import SearchBar from "material-ui-search-bar";
import { useDispatch} from 'react-redux';
import { setSearch } from '../actions/appActions';

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
    display: 'flex'
  },
  
  title: {
    flexGrow: 1,
    // display: 'none',
  },
  search: {
    position: 'relative',
    borderRadius: 5,
    backgroundColor: fade('#fff', 0.15),
    '&:hover': {
      backgroundColor: fade('#fff', 0.25),
    },
    marginLeft: 20,
    width: '30%',
    
  },
  searchIcon: {
    paddingLeft: 10,
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
    marginLeft: 10,
    padding: 7,
    // vertical padding + font size from searchIcon
    paddingLeft: 10,
    width: '100%',
    },
    homeButton: {
      marginRight: 10,
    },
    toolBar: {
      display: 'flex',
    }
   
}));

export default function NavBar() {
  const styles = useStyles();
  const dispatch = useDispatch();
  const searchHandler = searchTerm => {
    dispatch(setSearch(searchTerm));
  }

  return (
    <div className={styles.root}>
      <AppBar position="static">
        <Toolbar className={styles.toolBar}>
          <HomeRoundedIcon
            edge="start"
            className={styles.homeButton}
            color="inherit"
            aria-label="open drawer"
          >
          </HomeRoundedIcon>
          <Typography className={styles.title} variant="h6" noWrap>
           
          </Typography >
          <div className={styles.search}>
            <div className={styles.searchIcon}>
            <div className={styles.searchIcon}>
              <SearchIcon />
            </div>
            </div >
            <SearchBar
                value={""}
                onChange={(searchTerm) => searchHandler(searchTerm)}
                onRequestSearch={() => {}}  
           />
            
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
