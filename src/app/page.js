import Slider from "@/components/Slider";
import styles from "./page.module.css";
import Card from "@/components/Card";

const Home = () => {
    return (
        <div className={styles.page}>
            <main className={styles.main}>
                <Slider />
                <section className="pt-3">
                    <div className="container">
                        <header>
                            <h3 className="mb-md-3 mb-0">Son Eklenenler</h3>
                        </header>
                        <Card />
                    </div>
                </section>
            </main>
        </div>
    )
}

export default Home