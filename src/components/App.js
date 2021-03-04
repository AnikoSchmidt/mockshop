import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'; 
import { makeStyles } from '@material-ui/core';
import CategoriesList from './CategoriesList.react';
import { getProducts } from '../actions/productsActions';
import Category from './Category.react';
import Product from './Product.react';

const useStyles = makeStyles({
  app: {
    fontFamily: 'Roboto, Arial, Helvetica, sans-serif',
  },
});

function App() {
  const dispatch = useDispatch();
  const styles = useStyles();

  const { selectedCategoryName, activePage, selectedProductId  } = useSelector(state => state.app);
  
  useEffect(() => dispatch(getProducts()), [dispatch]);

  const renderPage = () => {
    switch(activePage) {
      case 'CATEGORY': 
      return (<Category selectedCategory={selectedCategoryName} />)
      case 'PRODUCT':
      return (<Product selectedProductId={selectedProductId} />)
      case 'HOME':
      default: 
      return (<CategoriesList />)
    }
  }
  return (

    <div className={styles.app}>
      {renderPage()}
    </div>
  );
}

export default App;