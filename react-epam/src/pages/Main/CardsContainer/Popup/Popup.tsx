import React, { Dispatch, SetStateAction, useState } from 'react';
import { DataType } from '../CardsContainer'
import cn from 'classnames';

import styles from './Popup.module.scss';

type PropsType = {
  isPopup: boolean,
  closePopup: () => void,
  onSaveCard: (state: DataType, setState: Dispatch<SetStateAction<DataType>>) => void
}

export function Popup({
  isPopup,
  closePopup,
  onSaveCard,
}: PropsType) {

  const [state, setState] = useState<DataType>({
    title: '',
    price: '',
    imageUrl: '',
    gender: '',
  });

  const onChangeInput = (event: { target: { value: string; id: string; }; }) => {
    const id = event.target.id;
    const value = event.target.value;
    setState({ ...state, [id]: value });
  }

  const blockNames = Object.keys(state).map((el: string, i: number) => {
    return (
      <label key={el}>
        {el}
        <br />
        <input
          type='text'
          id={el}
          className={styles.blockNameItem}
          onChange={onChangeInput}
          value={state[el]}
        />
      </label>
    )
  });

  return (
    <div className={cn(styles.wrapper, {
      [styles.active]: isPopup,
    })
    }>
      <div className={styles.card}>
        <i
          className={`fas fa-times-circle ${styles.close}`}
          onClick={() => closePopup()}
        ></i>
        <div className={styles.blockName}>
          {blockNames}
        </div>
        <button
          className={styles.saveCard}
          onClick={() => onSaveCard(state, setState)}
        >save</button>
      </div>
    </div >
  )
};
