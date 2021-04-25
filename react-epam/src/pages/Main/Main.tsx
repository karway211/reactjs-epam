import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import { AppStateType } from '../../redux/store';
import { CardsContainer } from './CardsContainer';
import { PopupContainer } from './Popup';

import styles from './Main.module.scss';

export function Main() {

  const [isPopup, setIsPopup] = useState(false);

  const { image, alt } = useSelector((state: AppStateType) => state.userData.avatar);

  const createCard = (isPopup: boolean) => {
    setIsPopup(isPopup);
  }

  const closePopup = () => {
    setIsPopup(false);
  }

  return (
    <div className={styles.main}>
      <div className={styles.wrapper}>
        <div className={styles.card}>
          <div className={styles.description}>
            <span>Front-End Developer</span>
          </div>
          <img src={image} alt={alt} />
        </div>
        <button
          className={styles.addCard}
          onClick={() => createCard(true)}

        >add card</button>
      </div>
      <CardsContainer />
      <PopupContainer isPopup={isPopup} closePopup={closePopup} />
    </div>
  )
}
