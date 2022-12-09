import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";
import styles from "./styles.module.scss";
import background from "../../asserts/pictures/background-square.png";
import map from "../../asserts/pictures/map.png";
import MyProfile from "../../components/MyProfile";

type Props = {
  userId: number;
};

const ProfilePage = (props: Props) => {
  const userId = props.userId;
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
          <div className={styles["main-right-title"]}>My Profile</div>
          <MyProfile userId={userId} />
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

export default ProfilePage;
