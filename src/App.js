import logo from './logo.svg';
import './App.css';
import Header from './component/Header';
import Home from './component/Home';
import CartItem from './component/CartItem';
import {Routes,Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <Header/>
      {/* <Home/> */}
      <Routes>
        <Route path='/' element={ <Home/>}></Route>
        <Route path='/cartDetails' element={ <CartItem/>}></Route>
      </Routes>
    </>
  );
}

export default App;
