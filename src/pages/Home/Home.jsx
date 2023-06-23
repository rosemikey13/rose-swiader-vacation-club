import styles from "./Home.module.css";
import NavBar from "../../components/NavBar/NavBar";
import Counter from "../../components/Counter/Counter";

const vacation = {startTime: "Jul 31, 2023 12:00:00"}


const Home = () => {



    return (
        <div className={styles.page}>
            <NavBar/>
            <Counter startTime={vacation.startTime}/>
        </div>
    )

}

export default Home;