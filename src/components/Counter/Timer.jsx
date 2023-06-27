import styles from './Timer.module.css';
import { useEffect, useState } from 'react';

const Timer = (props) => {



    const [weeks, setWeeks] = useState('00');
    const [days, setDays] = useState('00');
    const [hours, setHours] = useState('00');
    const [minutes, setMinutes] = useState('00');
    const [seconds, setSeconds] = useState('00');

    const vacayTime = new Date(props.startTime).getTime();
    let timer;

    useEffect(() => {
         timer = setInterval(() =>{

        
        const currentTime = new Date().getTime();
        
        let timeLeft = vacayTime - currentTime;
        const weeks = Math.floor(timeLeft / 1000 / 60 / 60 / 24 / 7)
        setWeeks(weeks.toString());

        timeLeft = timeLeft - (weeks * 7 * 24 * 60 * 60 * 1000);
        const days = Math.floor(timeLeft / 1000 / 60 / 60 / 24);
        setDays(days.toString());

        timeLeft = timeLeft - (days * 24 * 60 * 60 * 1000);
        const hours = Math.floor(timeLeft / 1000 / 60 / 60);
        setHours(hours.toString());

        timeLeft = timeLeft - (hours * 60 * 60 * 1000);
        const minutes = Math.floor(timeLeft / 1000 / 60);
        setMinutes(minutes.toString());

        timeLeft = timeLeft - (minutes * 60 * 1000);
        const seconds = Math.floor(timeLeft / 1000);
        setSeconds(seconds.toString());
        }, 1000)

        return () => {
            window.clearInterval(timer);
          };

    }, [])

    return(
        <div className={styles.container}>
            <div className={styles.week_1}>{ weeks.length === 2 ? weeks.charAt(0) : 0  }</div>
            <div className={styles.week_2}>{ weeks.length === 2 ? weeks.charAt(1) : weeks.charAt(0) }</div>
            <div className={styles.day_1}>{ days.length === 2 ? days.charAt(0) : 0  }</div>
            <div className={styles.day_2}>{ days.length === 2 ? days.charAt(1) : days.charAt(0) }</div>
            <div className={styles.hour_1}>{ hours.length === 2 ? hours.charAt(0) : 0  }</div>
            <div className={styles.hour_2}>{ hours.length === 2 ? hours.charAt(1) : hours.charAt(0) }</div>
            <div className={styles.minute_1}>{ minutes.length === 2 ? minutes.charAt(0) : 0  }</div>
            <div className={styles.minute_2}>{ minutes.length === 2 ? minutes.charAt(1) : minutes.charAt(0) }</div>
            <div className={styles.weeks}>Weeks</div>
            <div className={styles.days}>Days</div>
            <div className={styles.hours}>Hours</div>
            <div className={styles.minutes}>Minutes</div>
            <div className={styles.secContainer}>
                <div className={styles.seconds}>{seconds}</div>
                <div className={styles.sec}>Sec</div>
            </div> 
        </div>
    )

}

export default Timer