import styles from "./NavBar.module.css";
import { AuthContext } from "../../context/auth-context";
import { useContext } from "react";
import logo from "../../assets/logo.png";
import { NavLink } from "react-router-dom";



const NavBar = () => {
    const auth = useContext(AuthContext);

    return (
        <div className={styles.nav}>
        <img src={logo} className={styles.logo}/>
        <nav>
        <NavLink className={styles.link}to="/itinerary">Itinerary</NavLink>
        <NavLink className={styles.link} to="/flights">Flights</NavLink>
        <NavLink className={styles.link} to="/about">About</NavLink>
        </nav>
        <button className={styles.logout} onClick={auth.logout}>Log Out</button>
        </div>
    )

};

export default NavBar;