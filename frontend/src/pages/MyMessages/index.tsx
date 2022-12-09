import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";
import styles from "./styles.module.scss";
import background from "../../asserts/pictures/background-square.png";
import map from "../../asserts/pictures/map.png";
import MessageList from "../../components/MessageList";

type Props = {
  userId: number;
  isAdmin: boolean;
};

const MyMessages = (props: Props) => {
  const { userId, isAdmin } = props;
  return (
    <div>
      <NavBar />
      <div className={styles.main}>
        <div className={styles["main-title"]}>My Messages</div>
        <MessageList userId={userId} isAdmin={isAdmin} />
      </div>
      <div className={styles.location}>
        <div className={styles["location-text"]}>Where We Are</div>
        <img src={map} alt="map" className={styles["location-map"]} />
      </div>
      <Footer />
    </div>
  );
};

export default MyMessages;
