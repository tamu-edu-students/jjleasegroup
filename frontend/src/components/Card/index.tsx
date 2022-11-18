import APIService from "../../api/APIService";
import styles from "./styles.module.scss";
import { useState } from "react";


// const LISTMAGIN = 10;
// const WIDTH = Dimensions.get("screen").width - LISTMAGIN * 2;

function Card() {
    const [Name,setName] = useState("");
    const [State,setState] = useState("");
    const [City,setCity] = useState("");
    const [Street,setStreet] = useState("");
    const [ZipCode,setZipCode] = useState("");
    const [PriceLow,setPriceLow] = useState("");
    const [PriceHigh,setPriceHigh] = useState("");
    const [TagCampus,setTagCampus] = useState("");
    const [TagFurnished,setTagFurnished] = useState("");
    const [TagParking,setTagParking] = useState("");
    const [TagWE,setTagWE] = useState("");
    const [TagInternet,setTagInternet] = useState("");
    const [Url,setUrl] = useState("");
    const [PicUrl,setPicUrl] = useState("");

    // const get_Apt_Info = (apt: any) =>{
    //     console.log(apt);
    //     setName(apt.Name);
    //     setState(apt.State);
    //     setCity(apt.City);
    //     setStreet(apt.Street);
    //     setZipCode(apt.ZipCode);
    //     setPriceLow(apt.PriceLow);
    //     setPriceHigh(apt.PriceHigh);
    //     setTagCampus(apt.TagCampus);
    //     setTagFurnished(apt.TagFurnished);
    //     setTagParking(apt.TagParking);
    //     setTagWE(apt.TagWE);
    //     setTagInternet(apt.TagInternet);
    //     setUrl(apt.Url);
    //     setPicUrl(apt.PicUrl);
    // };
    APIService.get_apt_info({
        apt_name: Name,
        apt_city: City, 
        apt_street: Street,
        apt_zipcode: ZipCode,
        apt_price_low: PriceLow,
        apt_price_high: PriceHigh,
        apt_tag_near_campus: TagCampus,
        apt_tag_furnished: TagFurnished,
        apt_tag_free_parking: TagParking,
        apt_tag_free_we: TagWE, 
        apt_tag_free_internet: TagInternet,
        apt_url: Url,
        apt_picture_url: PicUrl, 
    })


    return (
        // <image className={styles.img}></image>
        <div className={styles.grid}>
            <div className={styles.card}>
                <div className={styles["card-header"]}>
                    <img className={styles["card-image"]} src="https://source.unsplash.com/6WrKKQcEnXk"/>
                </div>
                    <div className={styles.name}>
                        {Name}
                    </div>
                
                    <div className={styles.advants}>
                        <div>
                            {/* <span>price:</span> */}
                            <div  className={styles.price}><span>${PriceLow} - {PriceHigh}</span></div>
                        </div>

                        <div className={styles.address}>
                            207 street, City, Texas, Zipcode
                        </div>

                        <div className={styles.margin}>
                            <div className={styles.TagGrid}>
                                <div className={styles.tag}>Near Campus</div>
                                <div className={styles.tag}>Furnished</div>
                            </div>
                            <div className={styles.TagGrid}>
                                <div className={styles.tag}>Free Parking</div>
                                <div className={styles.tag}>Free Uiltility</div>
                            </div>
                            <div className={styles.tag}>Free wifi</div>

                        </div>
                    
                    </div>
                   
                    <div className={styles.footer}>
                        <button className={styles.btn}>Contact Us</button>
                        <button className={styles["btn-outline"]}>More Info</button>
                    </div>
            </div>
        </div>
    );
        
}

export default Card;