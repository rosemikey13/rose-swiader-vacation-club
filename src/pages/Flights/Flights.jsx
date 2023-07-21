import styles from './Flights.module.css';
import plane from '../../assets/plane.png';

const Flights = () => {

return(
    <div className={styles.filterBar}>
        <img className={styles.plane} src={plane}/>
        <div className={styles.title}>FLIGHT INFORMATION</div>
        <div className={styles.filter}>FILTER</div>
    </div>
)

}

export default Flights