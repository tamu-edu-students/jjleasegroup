import "./styles.module.scss";
import { IonIcon } from "react-ion-icon";

const Box = () => {
  return (
    <section className="property" id="property">
      <div className="container">
        <p className="section-subtitle">Properties</p>

        <h2 className="h2 section-title">Featured Listings</h2>

        <ul className="property-list has-scrollbar">
          <li>
            <div className="property-card">
              <figure className="card-banner">
                {/* <a href="#" > */}
                {/* src\jj-img\Austin\OffCampus\Acacia Cliffs\acacia5.jpg */}
                {/* <img src={require('./acacia5.jpg')} alt="Acacia Cliffs" className="w-100"/> */}
                {/* </a> */}

                {/* <div className="card-badge green">For Rent</div> */}

                <div className="banner-actions">
                  <button className="banner-actions-btn">
                    <IonIcon name="location" />

                    <address>Austin, Texas</address>
                  </button>

                  <button className="banner-actions-btn">
                    <IonIcon name="camera" />
                    <span>4</span>
                  </button>
                </div>
              </figure>

              <div className="card-content">
                <div className="card-price">
                  <strong>$34,900</strong>/Month
                </div>

                <h3 className="h3 card-title">
                  <a href="#">The Enclave</a>
                </h3>

                <p className="card-text">Description:</p>

                <ul className="card-list">
                  <li className="card-item">
                    <strong>3</strong>
                    <IonIcon name="bed-outline" />
                    <span>Bedrooms</span>
                  </li>

                  <li className="card-item">
                    <strong>2</strong>
                    <IonIcon name="man-outline" />
                    <span>Bathrooms</span>
                  </li>

                  <li className="card-item">
                    <strong>3450</strong>
                    <IonIcon name="square-outline" />
                    <span>Square Ft</span>
                  </li>
                </ul>
              </div>

              <div className="card-footer">
                <div className="card-author">
                  <figure className="author-avatar">
                    {/* <img src="./assets/images/author.jpg" alt="William Seklo" className="w-100"> */}
                  </figure>

                  {/* <div>
                      <p className="author-name">
                        <a href="#">William Seklo</a>
                      </p>

                      <p className="author-title">Estate Agents</p>
                    </div> */}
                </div>
                <div className="card-footer-actions">
                  <button className="card-footer-actions-btn">
                    <IonIcon name="resize-outline" />
                  </button>

                  <button className="card-footer-actions-btn">
                    <IonIcon name="heart-outline" />
                  </button>

                  <button className="card-footer-actions-btn">
                    <IonIcon name="add-circle-outline" />
                  </button>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Box;
