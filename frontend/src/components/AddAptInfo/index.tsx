import APIService from "../../api/APIService";
import { useState } from "react";
import styles from "./styles.module.scss";
import classNames from "../../utils/classNames";

function AddAptInfo() {
  const [details, setDetails] = useState({
    id: "",
    name: "",
    city: "0",
    street: "",
    zipcode: "",
    price_low: "",
    price_high: "",
    near_campus: false,
    furnished: false,
    free_parking: false,
    free_we: false,
    free_internet: false,
    url: "",
    picture_url: "",
  });
  const [error, setError] = useState("");
  const inputClass = classNames(styles.box, styles.input);
  const priceInputClass = classNames(styles.box_price, styles.input);
  const submitHandler = (e: any) => {
    e.preventDefault();
    console.log(details);
    APIService.add_apt_info({
      apt_name: details.name,
      apt_city: details.city,
      apt_street: details.street,
      apt_zipcode: details.zipcode,
      apt_price_low: details.price_low,
      apt_price_high: details.price_high,
      apt_tag_near_campus: details.near_campus ? 1 : 0,
      apt_tag_furnished: details.furnished ? 1 : 0,
      apt_tag_free_parking: details.free_parking ? 1 : 0,
      apt_tag_free_we: details.free_we ? 1 : 0,
      apt_tag_free_internet: details.free_internet ? 1 : 0,
      apt_url: details.url,
      apt_picture_url: details.picture_url,
    }).then((resp) => {
      console.log(resp);
      //window.location.reload();
      if (resp.code == "200") {
        console.log("sucessfully sent apt info!");
        setError("");
        window.location.reload();
      } else {
        //didnt sent
        console.log(resp.error_message);
        setError(resp.error_message);
      }
    });
  };

  return (
    <div className={styles.form}>
      <div className={styles.section}>
        <div className={styles.container}>
          <div className={styles.group_text}>
            <label htmlFor="name">Name </label>
            <label htmlFor="city">City </label>
            <label htmlFor="street">Street </label>
            <label htmlFor="ZipCode">Zip Code </label>
            <label htmlFor="Price">Price </label>
            <label htmlFor="url">URL </label>
            <label htmlFor="picture_url">Pic URL </label>
          </div>

          <div className={styles.group_input}>
            <input
              className={inputClass}
              type="name"
              name="name"
              id="name"
              onChange={(e) => setDetails({ ...details, name: e.target.value })}
              value={details.name}
            />
            <select
              className={styles.box}
              name="apt_city"
              id="apt_city"
              onChange={(e) => setDetails({ ...details, city: e.target.value })}
              value={details.city}
            >
              <option value="0">College Station</option>
              <option value="1">Austin</option>
              <option value="2">Houston</option>
            </select>
            <input
              className={inputClass}
              type="text"
              name="street"
              id="street"
              onChange={(e) =>
                setDetails({ ...details, street: e.target.value })
              }
              value={details.street}
            />
            <input
              className={inputClass}
              type="text"
              name="ZipCode"
              id="ZipCode"
              onChange={(e) =>
                setDetails({ ...details, zipcode: e.target.value })
              }
              value={details.zipcode}
            />
            <div className={styles.price_group}>
              <input
                className={priceInputClass}
                type="number"
                name="price_low"
                id="price_low"
                placeholder="lowest"
                onChange={(e) =>
                  setDetails({ ...details, price_low: e.target.value })
                }
                value={details.price_low}
              />
              <input
                className={priceInputClass}
                type="number"
                name="price_high"
                id="price_high"
                placeholder="highest"
                onChange={(e) =>
                  setDetails({ ...details, price_high: e.target.value })
                }
                value={details.price_high}
              />
            </div>
            <input
              className={inputClass}
              type="text"
              id="url"
              name="url"
              onChange={(e) => setDetails({ ...details, url: e.target.value })}
              value={details.url}
            />
            <input
              className={inputClass}
              type="text"
              name="picture_url"
              id="picture_url"
              onChange={(e) =>
                setDetails({ ...details, picture_url: e.target.value })
              }
              value={details.picture_url}
            />
          </div>
        </div>

        <div className={styles.group_tags}>
          <div className={styles.tags}>
            <label htmlFor="checkbox">near campus:</label>
            <input
              type="checkbox"
              id="tags"
              name="tags"
              value="near campus"
              onChange={() =>
                setDetails({ ...details, near_campus: !details.near_campus })
              }
              checked={details.near_campus}
            />
          </div>
          <div className={styles.tags}>
            <label htmlFor="checkbox">furnished:</label>
            <input
              type="checkbox"
              id="tags"
              name="tags"
              value="furnished"
              onChange={() =>
                setDetails({ ...details, furnished: !details.furnished })
              }
              checked={details.furnished}
            />
          </div>
          <div className={styles.tags}>
            <label htmlFor="checkbox">free parking:</label>
            <input
              type="checkbox"
              id="tags"
              name="tags"
              value="free_parking"
              onChange={() =>
                setDetails({ ...details, free_parking: !details.free_parking })
              }
              checked={details.free_parking}
            />
          </div>
        </div>
        <div className={styles.group_tags}>
          <div className={styles.tags}>
            <label htmlFor="checkbox">free water/electricity:</label>
            <input
              type="checkbox"
              id="tags"
              name="tags"
              value="free_we"
              onChange={() =>
                setDetails({ ...details, free_we: !details.free_we })
              }
              checked={details.free_we}
            />
          </div>
          <div className={styles.tags}>
            <label htmlFor="checkbox">free internet:</label>
            <input
              type="checkbox"
              id="tags"
              name="tags"
              value="free_internet"
              onChange={() =>
                setDetails({
                  ...details,
                  free_internet: !details.free_internet,
                })
              }
              checked={details.free_internet}
            />
          </div>
        </div>
        <div className={styles.container}>
          <button className={styles.buttonforget} onClick={submitHandler}>
            submit
          </button>
        </div>
      </div>

      {error !== "" ? <div className={styles.error_message}>{error}</div> : ""}
    </div>
  );
}

export default AddAptInfo;
