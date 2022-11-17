import styles from "./styles.module.scss";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import background from "../../asserts/pictures/background-rectangle.png";
import FAQ from "../../components/FAQ";

function Home() {
  return (
    <div>
      <NavBar />
      <div className={styles.home}>
        <div className={styles.item}>
          <div className={styles["item-title"]}>
            <div>We are JJtxhome</div>
            <div>Welcome to Texas !</div>
          </div>
          <div className={styles["item-background-overlay"]} />
          <img
            src={background}
            alt="background"
            className={styles["item-background"]}
          />
        </div>
        <div className={styles.faqs}>
          <div className={styles["faqs-title"]}>Frequently asked questions</div>
          <FAQ />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
