import styles from "./styles.module.scss";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import AddAptInfo from "../../components/AddAptInfo";
import EditAptInfo from "../../components/EditAptInfo";
import background from "../../asserts/pictures/background-rectangle.png";

function Admin() {
  return (
    <div>
      <NavBar />
      <div className={styles.home}>
        <div className={styles.item}>
          <div className={styles["item-title"]}>
            <div>ADMIN</div>
          </div>
          <div className={styles["item-background-overlay"]} />
          <img
            src={background}
            alt="background"
            className={styles["item-background"]}
          />
        </div>

        <div className={styles.faqs}>
          <div className={styles["faqs-title"]}>Add New Apartment</div>
          <AddAptInfo />
        </div>
        <div className={styles.faqs}>
          <div className={styles["faqs-title"]}>Edit Apartment</div>
          <EditAptInfo />
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Admin;
