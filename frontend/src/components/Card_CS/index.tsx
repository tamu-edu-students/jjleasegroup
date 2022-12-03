import APIService from "../../api/APIService";
import styles from "./styles.module.scss";
import React, { useState,useEffect } from "react"
import { responsivePropType } from "react-bootstrap/esm/createUtilityClasses";





const Card_CS = () =>{

    const [city,setCity] = useState("");

    const [results, setResults] = useState([{ 
        id: "1", name: "test", 
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
        picture_url: "test_pic_url"}
    ]);
    
    const aptInfoGetter = () => {
        APIService.get_apt_info().then((resp) => {       
            console.log("sucessfully get apt info!"); 

            for(let i = 0; i< resp.length; i++ ){
                if (resp[i].apt_city == "0"){
                    setResults(results => [...results, {
                        id: resp[i].apt_id,
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
                        }]);
                }
            }
        });
    }
    useEffect(() => {
        aptInfoGetter();
      }, []);
   
    const renderApt = results.slice(1).map((Apt) =>  
        <div className={styles.card}>
            <div className={styles["card-header"]}>
                <img className={styles["card-image"]} src={Apt.picture_url}/>
            </div>
        
            <div className={styles.name}>
                {Apt.name}
            </div>
        
            <div className={styles.advants}>
                <div>
                    {/* <span>price:</span> */}
                    <div  className={styles.price}><span>${Apt.price_low} - {Apt.price_high}</span></div>
                </div>

                <div className={styles.address}>
                    {Apt.street}, Austin, Texas, {Apt.zipcode}
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
                <button className={styles["btn-outline"]}><a href={Apt.url}>More Info</a></button>
            </div>
        </div>  
    );

    
    return (
       
        <div className={styles.grid}>
            {renderApt}
        </div>
        
    );
   
    
    
}

export default Card_CS;