import './App.scss';
import Footer from './containers/Footer';
import Header from './containers/Header';
import Main from './containers/Main';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
