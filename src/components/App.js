import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'; 
import { makeStyles } from '@material-ui/core';
import CategoriesList from './CategoriesList.react';
import { getProducts } from '../actions/productsActions';
import Category from './Category.react.js'

const useStyles = makeStyles({
  app: {
    fontFamily: 'Roboto, Arial, Helvetica, sans-serif',
  },
});

function App() {
  const dispatch = useDispatch();
  const styles = useStyles();

  const { selectedCategoryName } = useSelector(state => state.app);

  useEffect(() => dispatch(getProducts()), [dispatch]);
  return (
    <div className={styles.app}>
      {selectedCategoryName != null ? (
        <Category selectedCategory={selectedCategoryName} />
      ) : (
        <CategoriesList />
      )}
    </div>
  );
}

export default App;