import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
    quantity: {
        margin: 5,
        maxWidth: 100,
  },
}));

export default function FormPropsTextField() {
  const styles = useStyles();

  return (
    <form className={styles.quantity} noValidate autoComplete="off">
      <div>
        <TextField
          id="outlined-number"
          label="Quantity"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
        />
      </div>
    </form>
  );
}
