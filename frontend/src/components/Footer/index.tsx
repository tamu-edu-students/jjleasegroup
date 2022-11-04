import "./styles.module.scss";
import { IonIcon } from "react-ion-icon";

const Footer = () => {
  return (
    <section>
      <footer>
        <div className="main">
          <div className="col1">
            <h3 className="heading">Get in touch</h3>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
              <li>
                <a href="#">About us</a>
              </li>
              <li>
                <a href="#">FAQ</a>
              </li>
              <li>
                <a href="#">Leasing</a>
              </li>
            </ul>
          </div>

          <div className="col1">
            <h3 className="heading">Phone</h3>

            <li>
              <a>+1-512-221-0777</a>
            </li>

            <li>
              <a>+1-512-888-4656</a>
            </li>
          </div>

          <div className="col3">
            <h3 className="heading">Wechat</h3>
            <div className="social">
              <a href="#">
                <IonIcon name="logo-wechat" />
              </a>
              {/* <a href="#">
          <IonIcon name="mail-outline"/>
        </a> */}
            </div>
          </div>
        </div>

        {/* <p className="terms">
    <a href="#">Terms of purchase</a>
    <a href="#">Security and privacy</a>
    <a href="#">Newsletter</a>
  </p> */}
      </footer>

      {/* <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
<script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script> */}
    </section>
  );
};

export default Footer;
