import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Login from './pages/Login/Login'
import { AuthContext } from './context/auth-context'
import Home from './pages/Home/Home'
import { useNavigate } from 'react-router-dom';

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

  let routes;



  return (
    <AuthContext.Provider value={{isLoggedIn: isLoggedIn, login: login, logout: logout}}>
    <Routes>
       {!isLoggedIn && <Route path="*" element={<Login/>}/>}
       {isLoggedIn && <Route path="/" element={<Home/>}/>}
    </Routes>
    </AuthContext.Provider>
  )
}

export default App
