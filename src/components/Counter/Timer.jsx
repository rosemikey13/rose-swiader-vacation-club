import styles from './Timer.module.css';

const Timer = () => {


    return(
        <div className={styles.container}>
            <div className={styles.week_1}>0</div>
            <div className={styles.week_2}>0</div>
            <div className={styles.day_1}>0</div>
            <div className={styles.day_2}>0</div>
            <div className={styles.hour_1}>0</div>
            <div className={styles.hour_2}>0</div>
            <div className={styles.minute_1}>0</div>
            <div className={styles.minute_2}>0</div>
            {/* <div className={styles.weeks}>Weeks</div>
            <div className={styles.days}>Days</div>
            <div className={styles.hours}>Hours</div>
            <div className={styles.minutes}>Minutes</div> */}
        </div>
    )

}

export default Timer