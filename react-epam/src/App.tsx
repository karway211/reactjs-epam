import { FooterContainer } from './pages/FooterContainer';
import { Header } from './pages/Header';
// import { Main } from './pages/Main';

import './App.scss';
import { Login } from './pages/Login';
import { Home } from './pages/Home';
import { Profile } from './pages/Profile';
import { CardsContainer } from './pages/CardsContainer';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppStateType } from './redux/store';
import { Route, RouteComponentProps, withRouter } from 'react-router-dom';
import { getDataWarehouse } from './redux/cards-reducer';

function App({ history }: RouteComponentProps) {

  const isAuth = useSelector((state: AppStateType) => state.auth.isAuth);
  const dispatch: any = useDispatch();

  useEffect(() => {
    isAuth ? history.push('/home') : history.push('/login');
  }, [isAuth, history]);
  useEffect(() => {
    dispatch(getDataWarehouse());
  }, [dispatch]);

  return (
    <div className="App">
      <Header />
      <Route path='/login' render={() => <Login />} />
      <Route path='/home' render={() => <Home />} />
      <Route path='/profile' render={() => <Profile />} />
      <Route path='/cards' render={() => <CardsContainer />} />

      {/* <Main /> */}
      <FooterContainer />
    </div>
  );
}

export const AppContainer = withRouter(App);
