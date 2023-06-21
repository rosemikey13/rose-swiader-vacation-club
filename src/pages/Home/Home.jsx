import styles from "./Home.module.css";
import NavBar from "../../components/NavBar/NavBar";
import Counter from "../../components/Counter/Counter";


const Home = () => {



    return (
        <div className={styles.page}>
            <NavBar/>
            <Counter/>
        </div>
    )

}

export default Home;