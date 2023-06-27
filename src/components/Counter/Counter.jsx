import styles from './Counter.module.css';
import map from '../../assets/map.png'
import Timer from './Timer';
const Counter = (props) => {

    return (

        <div className={styles.container}>
            <img src={map} />
            <h3 className={styles.header}>Vacation Countdown</h3>
            <Timer startTime={props.startTime} />
            <h2 className={styles.location}>Until {props.location}!</h2>
        </div>

    );


}

export default Counter;