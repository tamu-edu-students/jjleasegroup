import APIService from "../../api/APIService";
import styles from "./styles.module.scss";
import { useState, useEffect } from "react";

const Card_CS = () => {
  const [results, setResults] = useState([
    {
      id: "1",
      name: "Null",
      city: "0",
      street: "test street",
      zipcode: "test_zip",
      price_low: "test_low",
      price_high: "test_high",
      near_campus: false,
      furnished: false,
      free_parking: false,
      free_we: false,
      free_internet: false,
      url: "test_url",
      picture_url: "test_pic_url",
    },
  ]);

  const aptInfoGetter = () => {
    APIService.get_apt_info_card().then((resp) => {
      for (let i = 0; i < resp.length; i++) {
        if (resp[i].apt_city === 0) {
          setResults((results) => [
            ...results,
            {
              id: resp[i].apt_id,
              name: resp[i].apt_name,
              city: resp[i].apt_city,
              street: resp[i].apt_street,
              zipcode: resp[i].apt_zipcode,
              price_low: resp[i].apt_price_low,
              price_high: resp[i].apt_price_high,
              near_campus: resp[i].apt_tag_near_campus,
              furnished: resp[i].apt_tag_furnished,
              free_parking: resp[i].apt_tag_free_parking,
              free_we: resp[i].apt_tag_free_we,
              free_internet: resp[i].apt_tag_free_internet,
              url: resp[i].apt_url,
              picture_url: resp[i].apt_picture_url,
            },
          ]);
        }
      }
      console.log("sucessfully get apt info!");
    });
  };

  useEffect(() => {
    // console.log('i fire once');
    aptInfoGetter();
    // console.log(results.length);
  }, []);

  const renderApt = results.slice(1).map((Apt, index) => (
    <div className={styles.grid}>

    <div className={styles.card}>
    <div className={styles["card-header"]} key={Apt.id}>
      <img className={styles["card-image"]} src={Apt.picture_url} />
    </div>

    <div className={styles.name}>{Apt.name}</div>

    <div className={styles.price}>
      <span>
        ${Apt.price_low} - {Apt.price_high}
      </span>
    </div>

    <div className={styles.address}>
      {Apt.street}, College Station, Texas, {Apt.zipcode}
    </div>

    <button className={styles.btn}>Contact Us</button>
    <button className={styles["btn-outline"]}>
      <a href={Apt.url}>More Info</a>
    </button>

    <div className={styles.footer}>
      <div className={styles.TagGrid}>
        {Apt.near_campus ? (
          <div className={styles.tag}>Near Campus</div>
        ) : (
          <div></div>
        )}
        {Apt.furnished ? (
          <div className={styles.tag}>Furniture Included</div>
        ) : (
          <div></div>
        )}
      </div>

      <div className={styles.TagGrid}>
        {Apt.free_parking ? (
          <div className={styles.tag}>Free parking</div>
        ) : (
          <div></div>
        )}
        {Apt.free_we ? (
          <div className={styles.tag}>Uiltity fee included</div>
        ) : (
          <div></div>
        )}{" "}
      </div>
      <div className={styles.TagGrid}>
        {Apt.free_internet ? (
          <div className={styles.tag}>Provide Internet</div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
    </div>
    </div>
    
  ));

  // const Apts = results.map((searchResult, index, array) => {
  //   if (index != 0) {
      
  //     return <SearchResult {...searchResult} />;
  //   }
  // });

  return(
    <div className={styles.cards}>{renderApt}</div>
  ); 
};

export default Card_CS;
