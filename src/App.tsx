import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Favorite from './Pages/Favorites';
import './App.css';
import Header from './Components/Header';
import Movie from './Pages/Movie';


function App() {
  return (
    <Routes>
      <Route path='/' element={<Header />}>
        <Route index element={<Home />} />
        <Route path='favorite' element={<Favorite/>} />
        <Route path='movie/:id' element={<Movie />} />
      </Route>
    </Routes>
  )
}

export default App
