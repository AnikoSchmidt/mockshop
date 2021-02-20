import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { setCategory } from '../actions/appActions';
import {
  makeStyles, 
  CircularProgress
} from '@material-ui/core';
import CardItem from "./Carditem.react";


const useStyles = makeStyles({
  container: {
    padding: '20px',
    display: 'flex',
    justifyContent: 'center',
  },
  card: {
    marginLeft: 8,
    width: 200,
  },
  categoryImage: {
    height: 200,
    objectFit: 'contain',
  },
  titleCase: {
    textTransform: 'capitalize',
  }
}) 



export default function CategoriesList() {
  const productsByCategory = useSelector(
    state => state.products?.productsByCategory
  );
  
  const styles = useStyles();
  const dispatch = useDispatch();

  const clickHandler = selectedCategoryName => {
    dispatch(setCategory(selectedCategoryName));
  }

  return (
        <div className={styles.container}>
          {productsByCategory != null ? (
            Object.keys(productsByCategory).map((category, index) => {
              return (
                <CardItem
                  key={index}
                  label={category}
                  imageURL={productsByCategory[category][0].image}
                  clickHandler={() => clickHandler(category)}
                  />
              );
            })
        ) : (
           <CircularProgress size={24} />
        )}
        </div>
    );
  }



