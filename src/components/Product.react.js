import { Typography } from "@material-ui/core";
import { makeStyles } from '@material-ui/core';
import { useSelector } from 'react-redux';

import CardItem from './Carditem.react';
// import InputLabel from '@material-ui/core/InputLabel';
// import FormControl from '@material-ui/core/FormControl';
// import Select from '@material-ui/core/Select';


const useStyles = makeStyles({
    productTitle: {
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
    productImage: {
        height: 200,
        width: 200,
        objectFit: 'contain',
        },  
    // formControl: {
    //     margin: theme.spacing(1),
    //     minWidth: 120,
    //     },
    // selectEmpty: {
    //     marginTop: theme.spacing(2),
    //     },
  });

export default function Product({selectedProduct}) {
   
    const styles = useStyles();
    
    // const handleChange = (event) => {
    // const name = event.target.name;
    //     setState({
    //       ...state,
    //       [name]: event.target.value,
    //     });
    //   };
    const products= useSelector(
        state => state.products.products
      );

    
    const productsById = {

    }
     products.forEach((item, index) => {
        return productsById[item.id] = item
    }
    
    );
    
    return (
        <>
        <div className={styles.container}>
            <Typography variant='h4' color='primary' className={styles.titleCase}>
                {selectedProduct.title}
            </Typography> 
            <CardItem
                    key={selectedProduct}
                    label={productsById[selectedProduct]?.title}
                    imageURL={productsById[selectedProduct]?.image}
                    clickHandler={()=> {}}
                    />
            <div>
            {/* <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel htmlFor="outlined-age-native-simple">Size</InputLabel>
            <Select
                native
                value={state.age}
                onChange={handleChange}
                label="Size"
                inputProps={{
                    name: 'size',
                    id: 'outlined-age-native-simple',
                }}
                >
                <option aria-label="None" value="" />
                <option value={10}>S</option>
                <option value={20}>M</option>
                <option value={30}>L</option>
                <option value={30}>XL</option>
            </Select>
        </FormControl> */}
 </div>

        </div>
        </>
    )
}