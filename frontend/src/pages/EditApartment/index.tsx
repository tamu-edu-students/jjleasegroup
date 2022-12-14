import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";
import styles from "./styles.module.scss";
import EditAptInfo from "../../components/EditAptInfo";

const EditApartment = () => {
  return (
    <div>
      <NavBar />
      <div className={styles.main}>
        <div className={styles["main-title"]}>Edit Apartment Info</div>
        <EditAptInfo />
      </div>
      {/*<div className={styles.location}>*/}
      {/*  <div className={styles["location-text"]}>Where We Are</div>*/}
      {/*  <img src={map} alt="map" className={styles["location-map"]} />*/}
      {/*</div>*/}
      <Footer />
    </div>
  );
};

export default EditApartment;
