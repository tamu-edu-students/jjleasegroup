import APIService from "../../api/APIService";
import styles from "./styles.module.scss";
import React, { useState,useEffect } from "react"
import { render } from "@testing-library/react";





function Card_Austin() {
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
        APIService.get_apt_info_card().then((resp) => {       
            console.log("sucessfully get apt info!"); 

            for(let i = 0; i< resp.length; i++ ){
                if (resp[i].apt_city === 1){
                    
                    setResults(results => [...results, {
                        id: resp[i].apt_id,
                        name: resp[i].apt_name,
                        city: resp[i].apt_city,
                        street:  resp[i].apt_street,
                        zipcode:  resp[i].apt_zipcode,
                        price_low:  resp[i].apt_price_low,
                        price_high: resp[i].apt_price_high,

                        near_campus: resp[i].apt_near_campus,
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
   
    
    const renderApt = results.slice(1+(results.length/2)).map((Apt) => 
     
        // let a = {Apt.near_campus};
        <div className={styles.card}>
            {Apt.near_campus}
            <div className={styles["card-header"]} key={Apt.id}>
                <img className={styles["card-image"]} src={Apt.picture_url}/>
            </div>
        
            <div className={styles.name}>
                {Apt.name}
            </div>
            
                    
            <div  className={styles.price}><span>${Apt.price_low} - {Apt.price_high}</span></div>
        

            <div className={styles.address}>
                {Apt.street}, Austin, Texas, {Apt.zipcode}
            </div>

            
            <button className={styles.btn}>Contact Us</button>
            <button className={styles["btn-outline"]}><a href={Apt.url}>More Info</a></button>

            <div className={styles.footer}>   
                <div className={styles.TagGrid}>
                
                    <div className={styles.tag}>Near Campus: {Apt.near_campus ? "Yes": "No"}</div>
                    <div className={styles.tag}>Furnished: {Apt.furnished ? "Yes": "No"}</div>
                    {/* {Apt.near_campus 
                            ? <div className={styles.tag}>Near Campus</div> 
                            : <div></div>} </div> */}
                </div>    
                
                <div className={styles.TagGrid}>
                    <div className={styles.tag}>Free Parking: {Apt.free_parking ? "Yes":"No"} </div>
                    <div className={styles.tag}>Free Uiltility: {Apt.free_parking ? "Yes":"No"}</div>
                </div>
                <div className={styles.TagGrid}>
                    <div className={styles.tag}>Free wifi: {Apt.free_parking ? "Yes":"No"}</div>    
                </div>    
                
            </div>
        </div>  
    );
    

    return (
       
        <div className={styles.grid}>
            {renderApt}
            {/* {test[1].name} */}
        </div>
        
    );



   
    
    
}

export default Card_Austin;