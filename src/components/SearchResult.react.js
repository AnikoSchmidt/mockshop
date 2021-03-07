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
        width: 1000,
        flexWrap: 'wrap', 
        margin: 'auto',
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
    result: {
        marginLeft: 30,
    },
    searchTerm: {
        marginLeft: 30,
    }
  });

export default function SearchResult() {
    const styles = useStyles();
    const products = useSelector(
        state => state.products.products
    );

    const resultProducts = [];
    const getResultProducts = () => {
        products.forEach((product, index) => {
                const title = product.title.toLowerCase();
                const description = product.description.toLowerCase();
                const category = product.category.toLowerCase();
                const searchTermLowerCase = searchTerm.toLowerCase();
                
                if(title.indexOf(searchTermLowerCase) > -1 || description.indexOf(searchTermLowerCase) > -1 || category.indexOf(searchTermLowerCase) > -1) {
                    resultProducts.push(<CardItem
                    key={product.id}
                    label={product.title}
                    imageURL={product.image}
                    clickHandler={()=> {}}
                    />)
                }
            }
        )
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
            <h1 className={styles.result}>Search Results for</h1>
            <p className={styles.searchTerm}>"{searchTerm}"</p>
            {renderSearchResult()}
        </div>
    )
}