import React, { Dispatch, SetStateAction, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ThunkAction } from 'redux-thunk';
import { AppStateType } from '../../../redux/store';
import { actions, ActionsType, getDataWarehouse } from '../../../redux/user-reducer';
import { Popup } from './Popup';
import { Card } from './Card/Card';

import styles from './CardsContainer.module.scss';

type ThunkType = Dispatch<ActionsType> | ThunkAction<void, AppStateType, unknown, ActionsType>;

export type DataType = {
  [key: string]: string,
  price: string,
  title: string,
  imageUrl: string,
  gender: string,
}

type PropsType = {
  isPopup: boolean,
  closePopup: () => void
}

export function CardsContainer({
  closePopup,
  isPopup,
}: PropsType) {

  const warehouse = useSelector((state: AppStateType) => state.userData.warehouse);

  const dispatch: any = useDispatch();

  useEffect(() => {
    dispatch(getDataWarehouse());
  }, [dispatch]);


  const onDeleteItem = (id: number) => {
    const { deleteWarehouseItem } = actions;
    dispatch(deleteWarehouseItem(id));
  }

  const onSaveCard = (
    state: DataType,
    setState: Dispatch<SetStateAction<DataType>>
  ) => {
    const { setWarehouseItem } = actions;

    const isFullField = Object.values(state).some((el: string) => !el);

    if (!isFullField) {
      dispatch(setWarehouseItem({ id: new Date().getTime(), ...state }));
    }

    setState({
      ...state,
      title: '',
      price: '',
      imageUrl: '',
      gender: '',
    });

    closePopup();
  }

  const cards = warehouse.map(card => <Card key={card.id} onDeleteItem={onDeleteItem} {...card} />);
  const noCards = <div className={styles.stub}>No cards yet</div>

  return (

    <div className={styles.CardsContainer}>
      {warehouse.length ? cards : noCards}
      <Popup
        isPopup={isPopup}
        closePopup={closePopup}
        onSaveCard={onSaveCard}
      />
    </div>
  )
}
