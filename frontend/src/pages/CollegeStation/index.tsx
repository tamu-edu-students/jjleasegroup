import NavBar from "../../components/NavBar";
import Card from "../../components/Card";
import Footer from "../../components/Footer";
import styles from "./styles.module.scss";

const CollegeStation = () => {
  return (
    <div>
      <NavBar />
      <div className={styles.container}>
        <div className={styles.title}>
          On TAMU Campus Apartments (塔木校园附近公寓)
        </div>
        <div className={styles["card-container"]}>
          <Card />
          {/*<Card />*/}
          {/*<Card />*/}
          {/*<Card />*/}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CollegeStation;
