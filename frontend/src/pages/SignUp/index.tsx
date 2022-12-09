import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";
import styles from "./styles.module.scss";
import background from "../../asserts/pictures/background-square.png";
import map from "../../asserts/pictures/map.png";
import SignUp from "../../components/SignUp";

const SignUpPage = () => {
  return (
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
          <div className={styles["main-right-title"]}>Sign Up</div>
          <SignUp />
          {/*<div className={styles["main-right-bottom"]}>*/}
          {/*  <a href={"/SignUp"}>Sign Up</a>*/}
          {/*  <a href={"/ForgetPassword"}>Forget Password</a>*/}
          {/*</div>*/}
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

export default SignUpPage;
