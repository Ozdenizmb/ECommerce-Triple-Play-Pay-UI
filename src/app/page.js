import Slider from "@/components/Slider";
import styles from "./page.module.css";

const Home = () => {
    return (
        <div className={styles.page}>
            <main className={styles.main}>
                <Slider />
            </main>
        </div>
    )
}

export default Home