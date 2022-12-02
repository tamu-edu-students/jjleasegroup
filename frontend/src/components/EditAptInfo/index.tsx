import APIService from "../../api/APIService";
import { useState } from "react";
import styles from "./styles.module.scss";
import SearchResult from "../SearchResult";
import classNames from "../../utils/classNames";
import { type } from "os";
type Props = {
  id:string; name:string; city:string; 
  street:string; zipcode:string; price_low:string; price_high:string;
  near_campus:boolean; furnished:boolean; free_parking:boolean;
  free_we:boolean; free_internet:boolean; url:string;picture_url:string;
};
function EditAptInfo() {
 
  const [details, setDetails] = 
    useState({ id: "", name: "test_name", 
    city: "0", street: "test_street", zipcode: "test_zip",
    price_low: "1", price_high: "2", near_campus: false,
    furnished: false, free_parking: false, free_we: false,
    free_internet: false, url: "test_url", picture_url: "test_pic_url"});
  const passDetails =details;
  const [searchName, setSearchName] = useState("");
  const [error, setError] = useState("");
  const inputClass = classNames(styles.box, styles.input);
  const priceInputClass = classNames(styles.box_price, styles.input);
  const [editing, setEditing] = useState("0");
  const [result, setResult] = 
    useState({name: "test_result_name", street: "test_street", city: "1",});
  const aptInfoGetter = (e: any) => {
    e.preventDefault();
    console.log(typeof(details));
    APIService.get_apt_info({
      apt_name: searchName, 
    }).then((resp) => {
      if (resp.code === 200) {
        console.log("sucessfully get apt info!");
        setError("");
        setResult({ name: resp.name, street: resp.street,city: resp.city});
      } else {
        //didnt sent 
        console.log(resp.error_message);
        
        setError(resp.error_message);
      }
    });
  }
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
      apt_tag_near_campus: details.near_campus ? 1 : 0 ,
      apt_tag_furnished: details.furnished ? 1 : 0 , 
      apt_tag_free_parking: details.free_parking ? 1 : 0 , 
      apt_tag_free_we: details.free_we ? 1 : 0 ,
      apt_tag_free_internet: details.free_internet ? 1 : 0 , 
      apt_url: details.url, 
      apt_picture_url: details.picture_url,
    }).then((resp) => {
      if (resp.code === 200) {
        console.log("sucessfully sent apt info!");
        setError("");
      } else {
        //didnt sent 
        console.log(resp.error_message);
        setError(resp.error_message);
      }
    });
  };
  if(editing === "0"){
    return(
      <div className={styles.search_container}>
        <div className={styles.search_bar}>
          <input
                className={inputClass}
                type="search"
                name="search"
                id="search"
                placeholder="Enter Apartment Name Here"
                onChange={(e) => setSearchName(e.target.value)}
              />
          <button className={styles.button_search} onClick={aptInfoGetter}>
            search
          </button>
        </div>
        <div className={styles.search_result}>
          <SearchResult {...details} />
        </div>
      </div>
    );

  }else{//found the apartment
    return (  
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
                placeholder={details.name}
                onChange={(e) => setDetails({ ...details, name: e.target.value })}
                value={details.name}
              />
              <select
                className={styles.box}
                name="apt_city"
                id="apt_city"
                placeholder={details.city}
                onChange={(e) => setDetails({...details, city: e.target.value})}
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
                placeholder={details.street}
                onChange={(e) => setDetails({ ...details, street: e.target.value })}
                value={details.street}
              />
              <input
                className={inputClass}
                type="text"
                name="ZipCode"
                id="ZipCode"
                placeholder={details.zipcode}
                onChange={(e) => setDetails({ ...details, zipcode: e.target.value })}
                value={details.zipcode}
              />
              <div className={styles.price_group}>
                <input
                  className={priceInputClass}
                  type="number"
                  name="price_low"
                  id="price_low"
                  placeholder={details.price_low}
                  onChange={(e) => setDetails({ ...details, price_low: e.target.value })}
                  value={details.price_low}
                />
                <input
                  className={priceInputClass}
                  type="number"
                  name="price_high"
                  id="price_high"
                  placeholder={details.price_low}
                  onChange={(e) => setDetails({ ...details, price_high: e.target.value })}
                  value={details.price_high}
                />
              </div>
              <input
                className={inputClass}
                type="text"
                id="url"
                name="url"
                placeholder={details.url}
                onChange={(e) => setDetails({ ...details, url: e.target.value })}
                value={details.url}
              />
              <input
                className={inputClass}
                type="text"
                name="picture_url"
                id="picture_url"
                placeholder={details.picture_url}
                onChange={(e) => setDetails({ ...details, picture_url: e.target.value })}
                value={details.picture_url}
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
                    value="near campus"
                    onChange={() => setDetails({ ...details, near_campus: !details.near_campus})}
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
                    onChange={() => setDetails({ ...details, furnished: !details.furnished})}
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
                    onChange={() => setDetails({ ...details, free_parking: !details.free_parking})}
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
                      onChange={() => setDetails({ ...details, free_we: !details.free_we})}
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
                      onChange={() => setDetails({ ...details, free_internet: !details.free_internet})}
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
  

}

export default EditAptInfo;
