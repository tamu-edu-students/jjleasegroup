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
  const [searchName, setSearchName] = useState("");
  const [error, setError] = useState("");
  const inputClass = classNames(styles.box, styles.input);

  const [results, setResults] = useState([{ id: "1", name: "test", 
  city: "0", street: "test street", zipcode: "test_zip",
  price_low: "test_low", price_high: "test_high", near_campus: false,
  furnished: false, free_parking: false, free_we: false,
  free_internet: false, url: "test_url", picture_url: "test_pic_url"},]);

  const aptInfoGetter = (e: any) => {
    e.preventDefault();
    //setResults();
    console.log(results);
  
    APIService.get_apt_info({
      apt_name: searchName, 
    }).then((resp) => {
      if (resp.code === 200) {
        console.log("sucessfully get apt info!");
        setError("");
        //loop through all results and generate an array.
        for(let i = 0; i< resp.length;i++ ){
          setResults(results=>[...results, 
          { id: resp[i].apt_id,
            name: resp[i].apt_name,
            city: resp[i].apt_city,
            street:  resp[i].apt_street,
            zipcode:  resp[i].apt_zipcode,
            price_low:  resp[i].apt_price_low,
            price_high: resp[i].apt_price_high,
            near_campus:resp[i].apt_near_campus,
            furnished:  resp[i].apt_furnished,
            free_parking: resp[i].apt_free_parking,
            free_we:  resp[i].apt_free_we,
            free_internet: resp[i].apt_free_internet,
            url: resp[i].apt_url,
            picture_url: resp[i].apt_picture_url
          }])
        }
      } else {
        //didnt sent 
        console.log(resp.error_message);
        
        setError(resp.error_message);
      }
    });
  }
  const SearchResults = results.map((searchResult,index, array) =>
    <SearchResult {...searchResult}/>
  );

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
        {SearchResults}
      </div>
    </div>
  );

}

export default EditAptInfo;
