import styles from "./styles.module.scss";

const Box = () => {
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        
        <div className={styles.top}>
            <img src="https://cdn.pixabay.com/photo/2014/07/31/00/30/vw-beetle-405876__340.jpg" alt="" />
            <span><i className="fas fa-heart"></i><i className="fas fa-exchange-alt"></i></span>
        </div>

        <div className={styles.bottom}>
          <h3>Villa In Cairo</h3>
          <p>
            The very best waterfront location in Tahrir square and beside many
            cool places
          </p>
          <div className={styles.advants}>
            <div>
              <span>Bedrooms</span>
              <div><span>3</span></div>
            </div>
            <div>
              <span>Bathrooms</span>
              <div><span>2</span></div>
            </div>
            {/* <div>
              <span>Area</span>
              <div>
                <span>1800<span>Sq Ft</span></span>
              </div>
            </div> */}
          </div>
          <div className={styles.price}>
            <span>For Sale</span>
            <span>$410,000</span>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Box;
