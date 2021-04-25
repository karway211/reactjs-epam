import React, { Component } from 'react';
import { connect } from 'react-redux';
import cn from 'classnames';

import { actions } from '../../../redux/user-reducer';
import { MockedResponseItemType } from '../../../api/mockedResponse';

import styles from './Popup.module.scss';

type DataType = {
  [key: string]: string,
  price: string,
  title: string,
  imageUrl: string,
  gender: string,
}

type PropsType = {
  isPopup: boolean,
  setWarehouseItem: (payload: MockedResponseItemType) => void
  closePopup: () => void
}

const { setWarehouseItem } = actions;

class Popup extends Component<PropsType> {

  state: DataType = {
    title: '',
    price: '',
    imageUrl: '',
    gender: '',
  }

  onChangeInput = (event: { currentTarget: { value: string; id: string; }; }) => {
    const id = event.currentTarget.id;
    const value = event.currentTarget.value;
    this.setState({ [id]: value });
  }

  onSaveCard = () => {
    const { setWarehouseItem, closePopup } = this.props;
    const isFullField = Object.values(this.state).some((el: string) => !el);
    if (!isFullField) {
      setWarehouseItem({ id: new Date().getTime(), ...this.state });
    }
    this.setState({
      title: '',
      price: '',
      imageUrl: '',
      gender: '',
    });
    closePopup();
  }

  render() {
    const blockNames = Object.keys(this.state).map((el: string, i: number) => {
      return (
        <label key={el}>
          {el}
          <br />
          <input
            type='text'
            id={el}
            className={styles.blockNameItem}
            onChange={this.onChangeInput}
            value={this.state[el]}
          />
        </label>
      )
    });

    const { closePopup, isPopup } = this.props;

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
          <button className={styles.saveCard} onClick={this.onSaveCard}>save</button>
        </div>
      </div >
    )
  }
};

export const PopupContainer = connect(null, { setWarehouseItem })(Popup);
