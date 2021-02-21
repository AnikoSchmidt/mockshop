import { Typography } from "@material-ui/core";
import { makeStyles } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import CardItem from './Carditem.react';
import { setProduct } from '../actions/appActions';
import Product from './Product.react';

const useStyles = makeStyles({
    categoryTitle: {
      fontFamily: 'Roboto, Arial, Helvetica, sans-serif',
      justifyContent: 'center',
    },
    container: {
        padding: '20px',
        display: 'flex',
        justifyContent: 'center',
        
      },
    titleCase: {
        textTransform: 'capitalize',
    },
    card: {
        marginLeft: 8,
        width: 200,
      },
    categoryImage: {
        height: 200,
        objectFit: 'contain',
            },
  });

export default function Category({ selectedCategory }) {
    const styles = useStyles();
    const products = useSelector(
        state => state.products.productsByCategory[selectedCategory]
    );
    const dispatch = useDispatch();
    const clickHandler = selectedProduct => {
        dispatch(setProduct(selectedProduct));
      }
    const selectedItem = useSelector(
        state => state.app.selectedProduct
    );
    console.log(selectedItem);
    return (
        <>
        {selectedItem ? (<Product selectedProduct={selectedItem}/>) : (
            <>
            <div className={styles.categoryTitle}>
            <Typography variant='h4' className={styles.titleCase}>
                {selectedCategory}
            </Typography>
            </div>
            <div className={styles.container}> 
            {products.map((product, index) => (
                <CardItem
                    key={product.id}
                    label={product.title}
                    imageURL={product.image}
                    clickHandler={()=> clickHandler(product.id)}
                    />
            ))}
            </div>
            </>
        )
        }







        
        </>
    )
}