import APIService from "../../api/APIService";
import styles from "./styles.module.scss";
import { useState } from "react";


// const LISTMAGIN = 10;
// const WIDTH = Dimensions.get("screen").width - LISTMAGIN * 2;

const Card = () =>{
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

    const get_Apt_Info = (apt: any) =>{
        console.log(apt);
        setName(apt.Name);
        setState(apt.State);
        setCity(apt.City);
        setStreet(apt.Street);
        setZipCode(apt.ZipCode);
        setPriceLow(apt.PriceLow);
        setPriceHigh(apt.PriceHigh);
        setTagCampus(apt.TagCampus);
        setTagFurnished(apt.TagFurnished);
        setTagParking(apt.TagParking);
        setTagWE(apt.TagWE);
        setTagInternet(apt.TagInternet);
        setUrl(apt.Url);
        setPicUrl(apt.PicUrl);
    };


    // const property = {
    //     images:[
    //         "https://www.google.com/maps/uv?pb=!1s0x864683bc6ba7693f%3A0xc3afc84e139c626b!3m1!7e115!4shttps%3A%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipPCsc9wQIrkMgaYpG9UuquuAn-um457rPGw7Xjx%3Dw239-h160-k-no!5s12north%20-%20Google%20Search!15sCgIgAQ&imagekey=!1e10!2sAF1QipPCsc9wQIrkMgaYpG9UuquuAn-um457rPGw7Xjx&hl=en&sa=X&ved=2ahUKEwiw05_jpar7AhXdl2oFHbhuCvkQoip6BAhvEAM",
    //     ],
    //     rentLow: 3750,
    //     rentHigh: 10000,
    //     name: "The G", // resp.apt_name
    //     bedroomLow: 1,
    //     bedroomHigh: 5,
    //     street: "301 Church Ave",
    //     city: "College Station",
    //     state: "Texas",
    //     zip: "77840",
    //     tags: ["Near campus"],
    // };

    return (
        // <image className={styles.img}></image>
        <div className={styles.grid}>
            <div className={styles.card}>
                <div className={styles["card-header"]}>
                    <img className={styles["card-image"]} src="https://source.unsplash.com/6WrKKQcEnXk"/>
                    
                </div>
                    <div className={styles.name}>
                        The G
                    </div>
                
                    <div className={styles.advants}>
                        <div>
                            {/* <span>price:</span> */}
                            <div  className={styles.price}><span>$1000 - 3000</span></div>
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
                        <button className={styles["btn-outline"]}>More info</button>
                    </div>
            </div>
        </div>
    );
        
};

export default Card;