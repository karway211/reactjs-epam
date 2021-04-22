import React, { Component } from 'react';
import { connect } from 'react-redux';
import { MockedResponseType } from '../../../api/mockedResponse';
import { AppStateType } from '../../../redux/store';
import { getDataWarehouse } from '../../../redux/user-reducer';
import { Card } from './Card/Card';

import styles from './CardsContainer.module.scss';

type MapStateType = {
  warehouse: MockedResponseType,
}

type MapDispatchType = {
  getDataWarehouse: () => void,
}

class CardsContainer extends Component<MapStateType & MapDispatchType> {
  state = {
    data: [] as MockedResponseType,
  }

  componentDidMount() {
    const { getDataWarehouse } = this.props;
    getDataWarehouse();
  }

  componentDidUpdate(prevProps: MapStateType) {
    const { warehouse } = this.props
    if (JSON.stringify(warehouse) !== JSON.stringify(prevProps.warehouse)) {
      this.setState({ data: warehouse });
    }
  }

  render() {
    const { data } = this.state;

    const cards = data.map(card => <Card key={card.id} {...card} />);
    const noCards = <div className={styles.stub}>No cards yet</div>

    return (

      <div className={styles.CardsContainer}>
        {data.length ? cards : noCards}
      </div>
    )
  }
}

const mapStateToProps = (state: AppStateType) => ({
  warehouse: state.userData.warehouse,
});

export default connect(mapStateToProps, { getDataWarehouse })(CardsContainer);
