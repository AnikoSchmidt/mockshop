import {useSelector} from 'react-redux';
import { makeStyles } from '@material-ui/core';
import CardItem from './Carditem.react';


const useStyles = makeStyles({
    categoryTitle: {
      fontFamily: 'Roboto, Arial, Helvetica, sans-serif',
      textAlign: 'center',
    },
    container: {
        padding: '20px',
        display: 'flex',
        justifyContent: 'center',
      },
    title: {
        textTransform: 'capitalize',
        margin: 'auto',
        color: '#3a606e',
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

export default function SearchResult() {
    const styles = useStyles();
    const products = useSelector(
        state => state.products.products
    );
    
    console.log(products);
    const resultProducts = [];
    const getResultProducts = () => {
        products.forEach((product, index) => {
                const title = product.title.toLowerCase();
                const searchTermLowerCase = searchTerm.toLowerCase();
                console.log(product.title);
                console.log(product.title.indexOf(searchTerm))
                if(title.indexOf(searchTermLowerCase) > -1) {
                    resultProducts.push(<CardItem
                    key={product.id}
                    label={product.title}
                    imageURL={product.image}
                    clickHandler={()=> {}}
                    />)
                }
            }
        )
        console.log(resultProducts);
        return resultProducts;
    }
    const { searchTerm } = useSelector(state => state.app);
    const renderSearchResult = () => {
        if(searchTerm.length >= 3) { 
            return (
            <div className={styles.container}> 
            {getResultProducts()}
            </div>
            )
        }
    } 
    return (
        <div>
            <h1>Search Results for</h1>
            <p>"{searchTerm}"</p>
            {renderSearchResult()}
        </div>
    )
}