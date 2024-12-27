
import './App.css';
import HomePage from './Pages/HomePage/HomePage';
import { BrowserRouter, Route, Routes,} from 'react-router-dom';
import ListOfCoins from './Pages/ListOfCoins/ListOfCoins';
import CoinDetails from './Pages/CoinDescription/CoinDescription';
import LoginPage from './AdminPanel/Login/login';
import AdminPanel from './AdminPanel/AdminIndex';

const App = ()=>{
  return(
    <div className="app">
      <BrowserRouter>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/categories/:id' element={<ListOfCoins />} />
            <Route path='/listOfCoins' element={<ListOfCoins />} />
            <Route path='/coin/:id' element={<CoinDetails />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/admin/*' element={<AdminPanel />} />
          </Routes>
        </BrowserRouter>
    </div>
  )
}
export default App;
