import React from 'react';
import { Typography } from "@material-ui/core";
import { makeStyles } from '@material-ui/core';
import { useSelector } from 'react-redux';

import CardItem from './Carditem.react';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import ContainedButton from './Button.react';
import FormPropsTextField from './Quantity.react';

const useStyles = makeStyles({
    productTitle: {
      fontFamily: 'Roboto, Arial, Helvetica, sans-serif',   
      marginTop: 20,
      marginBottom: 16,
      color: '#3a606e',

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
    productImage: {
        height: 200,
        width: 200,
        objectFit: 'contain',
        },  
    formControl: {
        margin: 5,
        minWidth: 80,
        minHeight: 60,
        },
    productDetails: {
        display: 'flex'
    },
    productDescription: {
        color: '#607b7d',
        fontSize: 14,
        
    },
    price: {
        color: '#e07a5f',
        fontSize: 14,
        marginTop: 20,
        marginBottom: 16,
    },
    selectorContainer: {
        display: 'flex',
    }
  });

export default function Product() {
   
    const styles = useStyles();
    
    const handleChange = (event) => {
        const name = event.target.name;
        setState({
            ...state,
            [name]: event.target.value,
        });
    };
    const { selectedProductId  } = useSelector(state => state.app);
    const selectedCategoryName = useSelector(
        state => state.app.selectedCategoryName
    );

    const [state, setState] = React.useState({
        size: '',
      });
    const products= useSelector(
        state => state.products.products
      );

    const productsById = {}
     products.forEach((item, index) => {
        return productsById[item.id] = item
    }
    );

    console.log(productsById);
    console.log(selectedProductId);

    return (
        <>
        <div className={styles.container}>
            
            <CardItem
                    key={selectedProductId}
                    label={productsById[selectedProductId]?.title}
                    imageURL={productsById[selectedProductId]?.image}
                    clickHandler={()=> {}}
                    />
            <div>
             <Typography variant='h5' className={styles.productTitle}>
                {productsById[selectedProductId].title}
            </Typography>   
            <Typography variant='p' color='grey' className={styles.productDescription}>
                {productsById[selectedProductId].description}
            </Typography> 
            <Typography  className={styles.price}>
                <span>Price: ${productsById[selectedProductId].price}</span>
            </Typography>  
            <div className={styles.selectorContainer}>   
            <div className={styles.productDetails}>
                {(selectedCategoryName === "men clothing" || selectedCategoryName === "women clothing") &&  (
                    <>
                    <FormControl variant="outlined" className={styles.formControl}>
                    <InputLabel htmlFor="outlined-size-native-simple" classname={styles.size}>Size</InputLabel>
                    <Select
                        native
                        value={state.size}
                        onChange={handleChange}
                        label="Size"
                        inputProps={{
                            name: 'size',
                            id: 'outlined-size-native-simple',
                        }}
                        >
                        <option aria-label="None" value="" />
                        <option value={10}>S</option>
                        <option value={20}>M</option>
                        <option value={30}>L</option>
                        <option value={30}>XL</option>
                    </Select>
                    </FormControl>
                    </>
                )}
            </div>
            <div><FormPropsTextField /></div>
            </div> 
            <div className={styles.button}>
                <ContainedButton />
            </div>
            </div>

        </div>
        </>
    )
}