import React, { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ThunkAction } from 'redux-thunk';
import { AppStateType } from '../../../redux/store';
import { actions, ActionsType, getDataWarehouse } from '../../../redux/user-reducer';
import { Popup } from './Popup';
import { Card } from './Card/Card';

import { DataCardsType } from '../../../types';

import styles from './CardsContainer.module.scss';
import { getErrorMessage } from './helper';

type ThunkType = Dispatch<ActionsType> | ThunkAction<void, AppStateType, unknown, ActionsType>;

type PropsType = {
  isPopup: boolean,
  setIsPopup: Dispatch<SetStateAction<boolean>>,
}

export function CardsContainer({ isPopup, setIsPopup }: PropsType) {

  const [state, setState] = useState<DataCardsType>({
    title: '',
    price: '',
    imageUrl: '',
    gender: '',
  });

  const inputsRef = useRef<{ [key: string]: HTMLInputElement | null }>({});

  const warehouse = useSelector((state: AppStateType) => state.userData.warehouse);
  const errors = useSelector((state: AppStateType) => state.userData.errors);

  const dispatch: any = useDispatch();

  const {
    clearErrors,
    deleteWarehouseItem,
    setWarehouseItem,
    setErrors
  } = actions;

  useEffect(() => {
    dispatch(getDataWarehouse());
  }, [dispatch]);

  const closePopup = () => {
    setState({
      ...state,
      title: '',
      price: '',
      imageUrl: '',
      gender: '',
    });
    dispatch(clearErrors());
    setIsPopup(false);
  }

  const onDeleteItem = (id: number) => {
    dispatch(deleteWarehouseItem(id));
  }

  const onChangeInput = (event: { target: { value: string; id: string; }; }) => {
    const id = event.target.id;
    const value = event.target.value;
    setState({ ...state, [id]: value });
  }

  const onMouseDownHandler = async () => {
    const isFullField = Object.values(state).some((el: string) => !el);
    const isError = Object.values(errors).some((el: string | boolean) => el);

    if (!isFullField && !isError) {
      dispatch(setWarehouseItem({ id: new Date().getTime(), ...state }));
      setState({
        ...state,
        title: '',
        price: '',
        imageUrl: '',
        gender: '',
      });

      closePopup();
    } else {
      Object.keys(state).forEach((key: string) => {
        const errorMessage = getErrorMessage(key, state[key]);
        dispatch(setErrors({ [key]: errorMessage }));
      });
    }
  }

  const onMouseUpHandler = () => {
    const firstElemError = Object.keys(errors)
      .find((el: string) =>
        errors[el] === Object.values(errors).find((el: string | boolean) => el));
    firstElemError && inputsRef.current[firstElemError]?.focus();
  }

  const onBlurHandler = (event: { target: { value: any; id: any; }; }) => {
    const { value, id } = event.target as { value: string, id: string };
    const errorMessage = getErrorMessage(id, value);
    dispatch(setErrors({ [id]: errorMessage }));
  }

  const cards = warehouse.map(card => <Card key={card.id} onDeleteItem={onDeleteItem} {...card} />);
  const noCards = <div className={styles.stub}>No cards yet</div>

  return (

    <div className={styles.CardsContainer}>
      {warehouse.length ? cards : noCards}
      <Popup
        isPopup={isPopup}
        closePopup={closePopup}
        onMouseDownHandler={onMouseDownHandler}
        onMouseUpHandler={onMouseUpHandler}
        onBlurHandler={onBlurHandler}
        errors={errors}
        inputsRef={inputsRef}
        onChangeInput={onChangeInput}
        stateInputs={state}
      />
    </div>
  )
}
