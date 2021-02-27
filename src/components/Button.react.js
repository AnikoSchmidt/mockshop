import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
  

const useStyles = makeStyles(() => ({
    button: {
      
    },
  }));
  

export default function ContainedButton() {
    const styles = useStyles();
  
    return (
      <div className={styles.button}>
        <Button variant="contained" color="primary">
          ADD TO CART
        </Button>
      </div>
    );
  }
  