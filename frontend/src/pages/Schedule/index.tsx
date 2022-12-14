import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";
import styles from "./styles.module.scss";
import background from "../../asserts/pictures/background-square.png";
import map from "../../asserts/pictures/map.png";
import { InlineWidget } from "react-calendly";

// type Props = {
//   userId: number;
// };

const Schedule = () => {
  return (
    <div>
      <NavBar />
      <div className={styles.main}>
        <div className={styles["main-left"]}>
          <div className={styles["main-left-title"]}>
            Schedule A Meeting With US!
          </div>
          <div className={styles["main-left-background-overlay"]} />
          <img
            src={background}
            alt="background"
            className={styles["main-left-background"]}
          />
        </div>
        <div className={styles["main-right"]}>
          {/*<div className={styles["main-right-title"]}>*/}
          {/*  Schedule A Meeting With US:*/}
          {/*</div>*/}
          <div className={styles.embed}>
            <InlineWidget url="https://calendly.com/ky1015/15-mins-meeting" />
          </div>
          {/* Scheduling feature embedded */}
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

export default Schedule;
