import { FooterContainer } from './pages/FooterContainer';
import { Header } from './pages/Header';
import { Main } from './pages/Main';

import './App.scss';

export function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <FooterContainer />
    </div>
  );
}
