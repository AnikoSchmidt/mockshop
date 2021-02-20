import { Typography } from "@material-ui/core";
import { makeStyles } from '@material-ui/core';
import { useSelector } from 'react-redux';
import CardItem from './Carditem.react';

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
  });

//   const useStyles = makeStyles({
  
//     c
//     categoryImage: {
//       height: 200,
//       objectFit: 'contain',
//     },
//     titleCase: {
//       textTransform: 'capitalize',
//     }
//   }) 



export default function Category({ selectedCategory }) {
    const styles = useStyles();
    const products = useSelector(
        state => state.products.productsByCategory[selectedCategory]
    );

    return (
        <>
        <div className={styles.categoryTitle}>
            <Typography variant='h3' className={styles.titleCase}>
                {selectedCategory}
            </Typography>
        </div>
        <div className={styles.container}> 
            {products.map((product, index) => (
                <CardItem
                    key={product.id}
                    label={product.title}
                    imageURL={product.image}
                    clickHandler={()=> {}}
                    />
            ))}
        </div>
        </>
    )
}