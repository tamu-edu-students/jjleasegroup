import APIService from "../../api/APIService";
import styles from "./styles.module.scss";
import { useState,useEffect } from "react";


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


    useEffect(() => {
        APIService.get_apt_info().then((resp) => {
            console.log(resp);
            console.log('200');
            setName(resp[0].apt_name);
            setStreet(resp[0].apt_street);
            setCity(resp[0].apt_city);
            setZipCode(resp[0].apt_zipcode);
            setPriceHigh(resp[0].apt_price_high);
            setPriceLow(resp[0].apt_price_low);
            setTagInternet(resp[0].apt_tag_free_internet);
            setTagParking(resp[0].apt_tag_free_parking);
            setTagFurnished(resp[0].apt_tag_furnished);
            setTagCampus(resp[0].apt_tag_near_campus);
            setTagWE(resp[0].apt_tag_free_we);
            setUrl(resp[0].apt_url);
            setPicUrl(resp[0].apt_picture_url);

        });
    });


    return (
        // <image className={styles.img}></image>
        <div className={styles.grid}>
            <div className={styles.card}>
                <div className={styles["card-header"]}>
                    <img className={styles["card-image"]} src="https://drive.google.com/uc?export=view&id=1pdARSw-qu7-ESYwDZulRZWo8BLoR_xB2"/>
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
                            {Street}, {City}, Texas, {ZipCode}
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
                        <button className={styles["btn-outline"]}><a href={Url}>More Info</a></button>
                    </div>
            </div>
        </div>
    );
        
}

export default Card;