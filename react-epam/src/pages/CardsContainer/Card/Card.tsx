import React from 'react';
import styles from './Card.module.scss';

type CardType = {
  id: number,
  price: string,
  title: string,
  imageUrl: string,
  gender: string,
};

type PropsType = {
  onDeleteItem: (id: number) => void
}

export const Card: React.FC<CardType & PropsType> = ({
  id,
  price,
  title,
  imageUrl,
  gender,
  onDeleteItem
}) => {
  return (
    <div className={styles.card}>
      <div>{title}</div>
      <img src={imageUrl} alt='weapon' className={styles.image} />
      <div>{price} $</div>
      <div>{gender}</div>
      <i
        className={`fas fa-trash-alt ${styles.delete}`}
        onClick={() => onDeleteItem(id)}
      ></i>
    </div>
  )
}
