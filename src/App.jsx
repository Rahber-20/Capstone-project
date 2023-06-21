import './App.css';
import {BrowserRouter ,Routes,Route} from 'react-router-dom'
import Flixxit from './app/Components/Flixxit';
import Login from './app/Components/Login';
import Signup from './app/Components/Signup';
import Player from './app/Components/Player';
import Movies from './app/Components/Movies';
import TvShows from './app/Components/TVShows';
import MyList from './app/Components/MyList';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Flixxit/>}/>
        <Route exact path='/login' element={<Login/>} />
        <Route exact path='/player' element={<Player/>} />
        <Route exact path='/movies' element={<Movies/>} />
        <Route exact path='/tv' element={<TvShows/>} />
        <Route exact path='/mylist' element={<MyList/>} />
        <Route exact path='/signup' element={<Signup/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
