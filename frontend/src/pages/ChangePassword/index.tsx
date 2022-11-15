import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";
import styles from "./styles.module.scss";
import background from "./background.png";
import map from "./map.png";
import ChangePasswordForm from "../../components/ChangePasswordForm";
import { getUser } from "../../utils/cookie";

const ChangePassword =(user: { name: string; email: string }) => {
  return (
    // <div className={styles.container}>
    <div>
      <NavBar />
      <div className={styles.main}>
        <div className={styles["main-left"]}>
          <div className={styles["main-left-background-overlay"]} />
          <img
            src={background}
            alt="background"
            className={styles["main-left-background"]}
          />
        </div>
        <div className={styles["main-right"]}>
          <div className={styles["main-right-title"]}>Change Password</div>
          <ChangePasswordForm {...getUser()}/>
        </div>
      </div>
      <div className={styles.location}>
        <div className={styles["location-text"]}>Where We Are</div>
        <img src={map} alt="map" className={styles["location-map"]} />
      </div>
      <Footer />
    </div>
  );
};

export default ChangePassword;
