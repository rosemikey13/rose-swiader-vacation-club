import { Fragment, useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Login from './pages/Login/Login'
import { AuthContext } from './context/auth-context'
import Home from './pages/Home/Home'
import { useNavigate } from 'react-router-dom';
import Itinerary from './pages/Itinerary/Itinerary'
import NavBar from './components/NavBar/NavBar';
import Flights from './pages/Flights/Flights'
import About from './pages/About/About'

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const navigate = useNavigate();

  const login = () => {
    setIsLoggedIn(true);
    navigate("/");
  }

  const logout = () => {
    setIsLoggedIn(false);
  };




  return (
    <AuthContext.Provider value={{isLoggedIn: isLoggedIn, login: login, logout: logout}}>
    {isLoggedIn && <NavBar/>}

    <Routes>
       {!isLoggedIn && <Route path='*' element={<Login/>}/>}
       {
       isLoggedIn && (
        <Fragment>
       <Route path='/' element={<Home/>}/>
       <Route path='/itinerary' element={<Itinerary/>}/>
       <Route path='/flights' element={<Flights/>}/>
       <Route path='/about' element={<About/>}/>
       </Fragment>
       )
       }
    </Routes>
    </AuthContext.Provider>
  )
}

export default App
