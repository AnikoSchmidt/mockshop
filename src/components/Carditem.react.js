import React from 'react';
import { makeStyles } from '@material-ui/core';
import {
    Card, 
    CardActionArea,
    CardMedia, 
    CardContent, 
    Typography,
} from '@material-ui/core';

const useStyles = makeStyles({
    cardContainer: {
      fontFamily: 'Roboto, Arial, Helvetica, sans-serif',
        padding: '20px',
        display: 'flex',
        justifyContent: 'center',
        width: '200px',
      },
      card: {
        marginLeft: 8,
        width: 200,
      },
      categoryImage: {
        height: 200,
        objectFit: 'contain',
      },
      
      image: {
          width: '200px',
          height: '200px',
          backgroundSize: 'contain',
          marginLeft: '10px'
      },
      title: {
          
          textTransform: 'capitalize',
          textOverflow: 'ellipsis',
          overflow: 'hidden',
          whiteSpace: 'nowrap',
          textAlign: 'center',
          color: '#3a606e',
      },
  });

export default function CardItem({ label, imageURL, clickHandler }) {
    const styles = useStyles();

    return (
        <div className={styles.cardContainer}>
            <Card >
                  <CardActionArea onClick={clickHandler}>
                    <CardMedia
                      className={styles.image}
                      image={imageURL}
                    />
                    <CardContent>
                      <Typography
                        variant='h6'
                        color='#05668d'
                        className={styles.title}
                      >
                        {label}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
        </div>


    );
};
