import APIService from "../../api/APIService";
import { useEffect,useState } from "react";
import styles from "./styles.module.scss";
import classNames from "../../utils/classNames";
type Props = {
  id:string; name:string; city:string; 
  street:string; zipcode:string; price_low:string; price_high:string;
  near_campus:boolean; furnished:boolean; free_parking:boolean;
  free_we:boolean; free_internet:boolean; url:string;picture_url:string;
};
function EditCard(details : Props) {
  const inputClass = classNames(styles.box, styles.input);
  const priceInputClass = classNames(styles.box_price, styles.input);
  const [tempDetail, setTempDetail] = 
  useState({ id: "", name: "test_name", 
  city: "0", street: "test_street", zipcode: "test_zip",
  price_low: "1", price_high: "2", near_campus: false,
  furnished: false, free_parking: false, free_we: false,
  free_internet: false, url: "test_url", picture_url: "test_pic_url"});
  const [city, setCity] = useState("");
  const [error, setError] = useState("");
  const decideCity = () => {
    console.log(details)
    setTempDetail(details);
    if(details.city == "0"){
      setCity("College Station");
    }else if (details.city == "1"){
      setCity("Austin");
    }else{
      setCity("Huston");
    }
  }
  const submitHandler = (e: any) => {
    e.preventDefault();
    console.log(details);
    APIService.edit_apt_info({
      apt_id: tempDetail.id,
      apt_name: tempDetail.name, 
      apt_city: tempDetail.city, 
      apt_street: tempDetail.street, 
      apt_zipcode: tempDetail.zipcode,
      apt_price_low: tempDetail.price_low,
      apt_price_high: tempDetail.price_high, 
      apt_tag_near_campus: tempDetail.near_campus ? 1 : 0 ,
      apt_tag_furnished: tempDetail.furnished ? 1 : 0 , 
      apt_tag_free_parking: tempDetail.free_parking ? 1 : 0 , 
      apt_tag_free_we: tempDetail.free_we ? 1 : 0 ,
      apt_tag_free_internet: tempDetail.free_internet ? 1 : 0 , 
      apt_url: tempDetail.url, 
      apt_picture_url: tempDetail.picture_url,
    }).then((resp) => {
      if (resp.code == 200) {
        console.log("sucessfully sent apt info!");
        window.location.reload();
        setError("");
      } else {
        //didnt sent 
        console.log(resp.error_message);
        setError(resp.error_message);
      }
    });
  };

  useEffect(() => {
    decideCity();
  }, [details]);

  return(
    <div className={styles.form}>
      <div className={styles.section}>
        <div className={styles.container}> 
          <div className={styles.group_text}>
            <label htmlFor="name">Name </label>
            <label htmlFor="city">City  </label>
            <label htmlFor="street">Street  </label>
            <label htmlFor="ZipCode">Zip Code  </label>
            <label htmlFor="Price">Price  </label>
            <label htmlFor="url">URL </label>
            <label htmlFor="picture_url">Pic URL </label>
          </div>

          <div className={styles.group_input}>
            <input
              className={inputClass}
              type="name"
              name="name"
              id="name"
              placeholder={tempDetail.name}
              onChange={(e) => setTempDetail({ ...tempDetail, name: e.target.value })}
              value={tempDetail.name}
            />
            <select
              className={styles.box}
              name="apt_city"
              id="apt_city"
              placeholder={details.city}
              onChange={(e) => setTempDetail({...tempDetail, city: e.target.value})}
              value={tempDetail.city}
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
              placeholder={details.street}
              onChange={(e) => setTempDetail({ ...tempDetail, street: e.target.value })}
              value={tempDetail.street}
            />
            <input
              className={inputClass}
              type="text"
              name="ZipCode"
              id="ZipCode"
              placeholder={details.zipcode}
              onChange={(e) => setTempDetail({ ...tempDetail, zipcode: e.target.value })}
              value={tempDetail.zipcode}
            />
            <div className={styles.price_group}>
              <input
                className={priceInputClass}
                type="number"
                name="price_low"
                id="price_low"
                placeholder={details.price_low}
                onChange={(e) => setTempDetail({ ...tempDetail, price_low: e.target.value })}
                value={tempDetail.price_low}
              />
              <input
                className={priceInputClass}
                type="number"
                name="price_high"
                id="price_high"
                placeholder={details.price_low}
                onChange={(e) => setTempDetail({ ...tempDetail, price_high: e.target.value })}
                value={tempDetail.price_high}
              />
            </div>
            <input
              className={inputClass}
              type="text"
              id="url"
              name="url"
              placeholder={details.url}
              onChange={(e) => setTempDetail({ ...tempDetail, url: e.target.value })}
              value={tempDetail.url}
            />
            <input
              className={inputClass}
              type="text"
              name="picture_url"
              id="picture_url"
              placeholder={details.picture_url}
              onChange={(e) => setTempDetail({ ...tempDetail, picture_url: e.target.value })}
              value={tempDetail.picture_url}
            />

          </div>
          <div className={styles.group_image}>
            <label htmlFor="text">Pic URL preview:</label>
            <img className={styles["card-image"]} src="https://thejunctionatcollegestation.com/wp-content/smush-webp/2022/03/pool.png.webp" />
          </div>
        </div>
        <div className={styles.group_tags}>
          <div className={styles.tags}>
            <label htmlFor="checkbox">near campus:</label>
            <input
                type="checkbox"
                id="tags"
                name="tags"
                onChange={(e) => setTempDetail({ ...tempDetail, near_campus: e.target.checked})}
                checked={tempDetail.near_campus}
              />
          </div>
          <div className={styles.tags}>
            <label htmlFor="checkbox">furnished:</label>
            <input
                type="checkbox"
                id="tags"
                name="tags"
                onChange={(e) => setTempDetail({ ...tempDetail, furnished: e.target.checked})}
                checked={tempDetail.furnished}
              />
          </div>
          <div className={styles.tags}>
            <label htmlFor="checkbox">free parking:</label>
            <input
                type="checkbox"
                id="tags"
                name="tags"
                onChange={(e) => setTempDetail({ ...tempDetail, free_parking: e.target.checked})}
                checked={tempDetail.free_parking}
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
                  onChange={(e) => setTempDetail({ ...tempDetail, free_we: e.target.checked})}
                  checked={tempDetail.free_we}
                />
            </div>
            <div className={styles.tags}>
              <label htmlFor="checkbox">free internet:</label>
              <input
                  type="checkbox"
                  id="tags"
                  name="tags"
                  onChange={(e) => setTempDetail({ ...tempDetail, free_internet: e.target.checked})}
                  checked={tempDetail.free_internet}
                />
            </div>
        </div>
        <div className={styles.container}>
          <button className={styles.buttonforget} onClick={submitHandler}>
            submit
          </button>
        </div>
    </div>
    

    {
      /*ERROR error !== "" ? (
        <div className={styles.error_message}>{error}</div>
      ) : (
        ""
      )*/
    }
  </div> 
  );

}

export default EditCard;
