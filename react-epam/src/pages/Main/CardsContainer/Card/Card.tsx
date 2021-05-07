import React from 'react';
import styles from './Card.module.scss';

type CardType = {
  id: number,
  price: number,
  title: string,
  imageUrl: string,
  gender: string,
};

export const Card: React.FC<CardType> = ({ id, price, title, imageUrl, gender }) => {
  return (
    <div className={styles.card}>
      <div>{title}</div>
      <img src={imageUrl} alt='weapon' className={styles.image} />
      <div>{price} $</div>
      <div>{gender}</div>
    </div>
  )
}
