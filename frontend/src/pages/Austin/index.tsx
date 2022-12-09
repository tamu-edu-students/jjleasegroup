import Footer from "../../components/Footer";
import Card_Austin from "../../components/Card_Austin";
import NavBar from "../../components/NavBar";
import styles from "./styles.module.scss";

const Austin = () => {
  return (
    <div>
      <NavBar />
      <div className={styles.container}>
        <div className={styles.title}>Apartments (UT校园附近公寓)</div>

        <div className={styles["card-container"]}>
          {/* The card has to be dynamically fetched from the database.
          APIService.get_apt_info().resp[i] contains all info of an apartment.
          If resp[i].apt_city == 1, then we need to display all these instance in Austin
          If resp[i].apt_city == 0, then we need to dispaly all these instance in College station
          */}

          <div className={styles.wrapper}>
            <Card_Austin />
          </div>
        </div>
      </div>

      <div className={styles.container}>
        <div className={styles.title}>Individual Leases (獨棟房子)</div>

        <iframe
          src="https://www.abor.com/for-rent?filters={%22geohash%22:%229v6mh2fb56t4,9v6eecdbgkvh%22}"
          width="100%"
          height="1000px"
          style={{ border: "1px" }}
        />
      </div>

      <Footer />
    </div>
  );
};

export default Austin;
