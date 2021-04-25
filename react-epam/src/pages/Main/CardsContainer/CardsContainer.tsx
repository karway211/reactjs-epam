import React, { Dispatch, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ThunkAction } from 'redux-thunk';
import { MockedResponseType } from '../../../api/mockedResponse';
import { AppStateType } from '../../../redux/store';
import { actions, ActionsType, getDataWarehouse } from '../../../redux/user-reducer';
import { Card } from './Card/Card';

import styles from './CardsContainer.module.scss';

type ThunkType = Dispatch<ActionsType> | ThunkAction<void, AppStateType, unknown, ActionsType>;

export function CardsContainer() {

  const [data, setData] = useState([] as MockedResponseType);

  const warehouse = useSelector((state: AppStateType) => state.userData.warehouse);

  const dispatch: any = useDispatch();

  useEffect(() => {
    dispatch(getDataWarehouse());
  }, [dispatch]);

  useEffect(() => {
    setData(warehouse);
  }, [warehouse]);


  const onDeleteItem = (id: number) => {
    const { deleteWarehouseItem } = actions;
    dispatch(deleteWarehouseItem(id));
  }

  const cards = data.map(card => <Card key={card.id} onDeleteItem={onDeleteItem} {...card} />);
  const noCards = <div className={styles.stub}>No cards yet</div>

  return (

    <div className={styles.CardsContainer}>
      {data.length ? cards : noCards}
    </div>
  )
}
