import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import styles from "./styles.module.scss";
import Card_CS from "../../components/Card_CS";

const CollegeStation = () => {
  return (
    <div>
      <NavBar />
      <div className={styles.container}>
        <div className={styles.title}>
          Apartments (塔木校园附近公寓)
        </div>
        <div className={styles["card-container"]}>
          <Card_CS />
        </div>
      </div>


      <div className={styles.container}>
        <div className={styles.title}>
            Individual Leases (獨棟房子)
        </div>
    
        <iframe
            src = "https://www.bcsrealtor.com/index.php?src=directory&view=rets_properties&srctype=lister&query=(category.eq.Rent).and.(address_city.eq.College%20Station)" 
            width="100%"
            height="1000px"
            style={{ border: "1px" }}
          /> 
      </div>
      <Footer />
    </div>
  );
};

export default CollegeStation;
