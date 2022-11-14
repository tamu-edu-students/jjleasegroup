
import styles from "./styles.module.scss";

import { Screen } from "./Screen";
// import React from "react";

// const LISTMAGIN = 10;
// const WIDTH = Dimensions.get("screen").width - LISTMAGIN * 2;

const Card = () =>{
    // const property = {
    //     images:[
    //         "https://www.google.com/maps/uv?pb=!1s0x864683bc6ba7693f%3A0xc3afc84e139c626b!3m1!7e115!4shttps%3A%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipPCsc9wQIrkMgaYpG9UuquuAn-um457rPGw7Xjx%3Dw239-h160-k-no!5s12north%20-%20Google%20Search!15sCgIgAQ&imagekey=!1e10!2sAF1QipPCsc9wQIrkMgaYpG9UuquuAn-um457rPGw7Xjx&hl=en&sa=X&ved=2ahUKEwiw05_jpar7AhXdl2oFHbhuCvkQoip6BAhvEAM",
    //         "https://www.google.com/maps/uv?pb=!1s0x864683bc6ba7693f%3A0xc3afc84e139c626b!3m1!7e115!4shttps%3A%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipPCsc9wQIrkMgaYpG9UuquuAn-um457rPGw7Xjx%3Dw239-h160-k-no!5s12north%20-%20Google%20Search!15sCgIgAQ&imagekey=!1e10!2sAF1QipNf106tw-tifjrlaeiIybc4CHtOnO1nogIdaGez&hl=en&sa=X&ved=2ahUKEwiw05_jpar7AhXdl2oFHbhuCvkQoip6BAhvEAM"    
    //     ],
    //     rentLow: 3750,
    //     rentHigh: 10000,
    //     name: "The G",
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
                        Gardens Apartment
                    </div>

                    <div className={styles.price}>
                        price
                    </div>

                    <div className={styles.tag}>
                        tag
                    </div>

                    <div className={styles.des}>
                        des
                    </div>

                    <div className={styles.footer}>
                        <button className={styles.btn}>Contact Us</button>
                        <button className={styles["btn-outline"]}>More info</button>
                    </div>
            </div>

            {/* <div className={styles.card}>
                <div className={styles["card-header"]}>123 Main</div>
                    <div className={styles.body}>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio 
                        quis, accusamus culpa, facilis error, quibusdam vitae similique 
                        cupiditate eos alias consequatur rem qui voluptatibus. Laboriosam 
                        voluptas laudantium expedita iste deserunt.
                    </div>

                    <div className={styles.footer}>
                        <button className={styles.btn}>Contact Us</button>
                        <button className={styles["btn-outline"]}>More info</button>
                    </div>
            </div> */}
        </div>
    );
        
};

export default Card;