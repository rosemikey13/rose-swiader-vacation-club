import styles from './Login.module.css';
import logo from "../../assets/logo.png";
import { AuthContext } from '../../context/auth-context';
import { useContext } from 'react';

const Login = () => {

const auth = useContext(AuthContext);

    return(
        <div className={styles.background}>
        <div className={styles.signIn}>
            <img className={styles.logo} src={logo}/>
            <input type="text" placeholder='Email' className={styles.textField} />
            <input type="password" placeholder='Password' className={styles.textField} />
            <button className={styles.loginButton} onClick={auth.login}>Login</button>
        </div>
        </div>
    )

};

export default Login;