import React from 'react';
import cn from 'classnames';

import styles from './Popup.module.scss';
import { DataCardsType, ErrorCardsType } from '../../../types';

type PropsType = {
  stateInputs: DataCardsType,
  isPopup: boolean,
  errors: ErrorCardsType,
  inputsRef: React.MutableRefObject<{
    [key: string]: HTMLInputElement | null;
  }>,
  closePopup: () => void,
  onMouseDownHandler: () => void,
  onBlurHandler: (event: {
    target: {
      value: any;
      id: any;
    };
  }) => void,
  onChangeInput: (event: {
    target: {
      value: string;
      id: string;
    };
  }) => void,
  onMouseUpHandler: () => void,
}

export function Popup({
  stateInputs,
  isPopup,
  errors,
  inputsRef,
  closePopup,
  onMouseDownHandler,
  onBlurHandler,
  onChangeInput,
  onMouseUpHandler,
}: PropsType) {

  const blockNames = Object.keys(stateInputs).map((el: string) => {
    const errorMessage = errors[el];
    return (
      <label className={styles.blockNameElem} key={el}>
        {el}
        <br />
        <input
          type='text'
          id={el}
          className={cn(styles.blockNameItem, {
            [styles.blockNameError]: errorMessage,
          })}
          onChange={onChangeInput}
          value={stateInputs[el]}
          onBlur={onBlurHandler}
          ref={(element) => inputsRef.current[el] = element}
        />
        <br />
        <span className={styles.errorMessage}>{errorMessage}</span>
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
          onClick={closePopup}
        ></i>
        <div className={styles.blockName}>
          {blockNames}
        </div>
        <button
          className={styles.saveCard}
          onMouseDown={onMouseDownHandler}
          onMouseUp={onMouseUpHandler}
        >save</button>
      </div>
    </div >
  )
};
