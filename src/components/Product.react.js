// import { Typography } from "@material-ui/core";
import { makeStyles } from '@material-ui/core';
import { useSelector } from 'react-redux';

import CardItem from './Carditem.react';
// import InputLabel from '@material-ui/core/InputLabel';
// import FormControl from '@material-ui/core/FormControl';
// import Select from '@material-ui/core/Select';


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
        <CardItem
                    key={selectedProduct}
                    label={productsById[selectedProduct]?.title}
                    imageURL={productsById[selectedProduct]?.image}
                    clickHandler={()=> {}}
                    />
       
        </>
    )
}