import styles from "./styles.module.scss";
import logo from "../../asserts/pictures/logo.svg";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.heading}>
        <div className={styles["heading-title"]}>
          <img src={logo} alt="JJ" className={styles["heading-title-icon"]} />
          <div className={styles["heading-title-text"]}>Get In Touch</div>
        </div>
        <div className={styles["heading-content"]}>
          We'd love to hear from you
        </div>
      </div>
      <div className={styles.lists}>
        <div className={styles.email}>
          <div className={styles["list-title"]}>Email</div>
          <div className={styles["list-content"]}>jjgrouplease@gmail.com</div>
          <div className={styles["list-content"]}>jjgroupleaseut@gmail.com</div>
          <div className={styles["list-content"]}>
            jjgroupleasetamu@gmail.com
          </div>
        </div>
        <div className={styles.phone}>
          <div className={styles["list-title"]}>Phone</div>
          <div className={styles["list-content"]}>+1-512-221-0777</div>
          <div className={styles["list-content"]}>+1-512-888-4656</div>
        </div>
        <div className={styles.social}>
          <div className={styles["list-title"]}>WeChat</div>
          <img
            src="wechat"
            alt="WeChat_QR_Code"
            className={styles["list-icon"]}
          />
        </div>
      </div>
      <div className={styles.divider} />
      <div className={styles["copy-right"]}>© 2023 by JJtxhome Co.</div>
    </div>
  );
};

export default Footer;
