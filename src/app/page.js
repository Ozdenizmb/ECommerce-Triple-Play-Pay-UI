import Slider from "@/components/Slider";
import styles from "./page.module.css";
import Card from "@/components/Card";
import data from "../../data.json";

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
                        
                        <div className="row">
                                {data.products.map((product) => (
                                    <div className="col-lg-3 col-md-4 col-sm-6" key={product.id}>
                                        <Card {...product} />
                                    </div>
                                ))}
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}

export default Home