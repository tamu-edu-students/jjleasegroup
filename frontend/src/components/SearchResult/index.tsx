import APIService from "../../api/APIService";
import { useEffect,useState } from "react";
import styles from "./styles.module.scss";
import classNames from "../../utils/classNames";
import EditCard from "../EditCard";
type Props = {
  id:string; name:string; city:string; 
  street:string; zipcode:string; price_low:string; price_high:string;
  near_campus:boolean; furnished:boolean; free_parking:boolean;
  free_we:boolean; free_internet:boolean; url:string;picture_url:string;
};
function SearchResult(details : Props) {
  const before = details;
  const numbers= [1,2,3,4,5,5];
  const inputClass = classNames(styles.box, styles.input);
  const priceInputClass = classNames(styles.box_price, styles.input);
  const [tempDetail, setTempDetail] = 
  useState({ id: "", name: "test_name", 
  city: "0", street: "test_street", zipcode: "test_zip",
  price_low: "1", price_high: "2", near_campus: false,
  furnished: false, free_parking: false, free_we: false,
  free_internet: false, url: "test_url", picture_url: "test_pic_url"});
  const [editing, setEditing] = useState(false);
  const [city, setCity] = useState("");
  const [error, setError] = useState("");
  const decideCity = () => {
    //delete before['index'];
    setTempDetail(details);
    if(details.city == "0"){
      setCity("College Station");
    }else if (details.city == "1"){
      setCity("Austin");
    }else{
      setCity("Huston");
    }
  }
  const editHandler = (e: any) => {
    e.preventDefault();
    console.log("editing");
    if(editing){
      setEditing(false)
    }else{
      setEditing(true)
    }
  }
  const deleteHandler = (e: any) => {
    console.log("delete");
    APIService.delete_apt_info(tempDetail.id).then((resp) => {
      console.log(resp);
      if(resp.code ==200){
        window.location.reload();
        console.log("Sucessfully deleted!!!");
      }else{
        console.log("Something wrong at delete apt!!!");
      }
    });

  }
  const listNothing = numbers.map((number) =>
    <div>
    </div>
  );

  useEffect(() => {
    decideCity();
    console.log("using effect");
  }, [details]);

  return(
    <div className={styles.grid}>
      <div className={styles.card}>
        <div className={styles["card-header"]}>
            <img className={styles["card-image"]} src={tempDetail.picture_url}/>
        </div>
        <div className={styles.name}>
            {tempDetail.name}
        </div>
        <div className={styles.address}>
          <div className={styles.address_component}>
            {tempDetail.street}
          </div>
          <div className={styles.address_component}>
            {city}
          </div>
          <div className={styles.address_component}>
            Texas, {tempDetail.zipcode}
          </div>
        </div>
        <div className={styles.textlink}>
          <div className={styles["textlink-edit"]} onClick={editHandler}>
            edit
          </div>
          <div className={styles.button}>
            |
          </div>
          <div className={styles["textlink-delete"]} onClick={deleteHandler}>
            delete
          </div>
        </div>

      </div>
      {editing?<EditCard {...tempDetail}/>:listNothing}
          
      
    </div>
  );

}

export default SearchResult;
