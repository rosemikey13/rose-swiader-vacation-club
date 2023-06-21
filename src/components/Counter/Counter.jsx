import styles from './Counter.module.css';
import map from '../../assets/map.png'
import Timer from './Timer';
const Counter = () => {

    return (

        <div className={styles.container}>
            <img src={map} />
            <h3 className={styles.header}>Vacation Countdown</h3>
            <Timer/>
        </div>

    );


}

export default Counter;