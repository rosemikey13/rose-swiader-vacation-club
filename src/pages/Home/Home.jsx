import styles from "./Home.module.css";
import NavBar from "../../components/NavBar/NavBar";
import Counter from "../../components/Counter/Counter";

const vacation = {startTime: "Feb 11, 2024 12:00:00", vacationLocation: "Hawaii",}


const Home = () => {



    return (
        <div className={styles.page}>
            <NavBar/>
            <Counter startTime={vacation.startTime} location={vacation.vacationLocation}/>
        </div>
    )

}

export default Home;