import "./styles.module.scss";

const Box = () => {
  return (
    <div class="container">
    <div class="box">
      <div class="top">
        <img src="https://cdn.pixabay.com/photo/2014/07/10/17/18/large-home-389271__340.jpg" alt="" />
        <span
          ><i class="fas fa-heart"></i><i class="fas fa-exchange-alt"></i
        ></span>
      </div>
      <div class="bottom">
        <h3>Home In Merrick Way</h3>
        <p>
          Enchanting three bedrooms, three bath home with spacious one
          bedroom, one bath...
        </p>
        <div class="advants">
          <div>
            <span>Bedrooms</span>
            <div><i class="fas fa-th-large"></i><span>3</span></div>
          </div>
          <div>
            <span>Bathrooms</span>
            <div><i class="fas fa-shower"></i><span>3</span></div>
          </div>
          <div>
            <span>Area</span>
            <div>
              <i class="fas fa-vector-square"></i
              ><span>4300<span>Sq Ft</span></span>
            </div>
          </div>
        </div>
        <div class="price">
          <span>For Sale</span>
          <span>$540,000</span>
        </div>
      </div>
    </div>
    <div class="box">
      <div class="top">
        <img src="https://cdn.pixabay.com/photo/2014/07/31/00/30/vw-beetle-405876__340.jpg" alt="" />
        <span
          ><i class="fas fa-heart"></i><i class="fas fa-exchange-alt"></i
        ></span>
      </div>
      <div class="bottom">
        <h3>Villa In Alexandria</h3>
        <p>
          Enjoy serenity of Deering Bay whole day from this spectacular North
          and...
        </p>
        <div class="advants">
          <div>
            <span>Bedrooms</span>
            <div><i class="fas fa-th-large"></i><span>3</span></div>
          </div>
          <div>
            <span>Bathrooms</span>
            <div><i class="fas fa-shower"></i><span>3.5</span></div>
          </div>
          <div>
            <span>Area</span>
            <div>
              <i class="fas fa-vector-square"></i
              ><span>3500<span>Sq Ft</span></span>
            </div>
          </div>
        </div>
        <div class="price">
          <span>For Sale</span>
          <span>$825,000</span>
        </div>
      </div>
    </div>
    <div class="box">
      <div class="top">
        <img src="https://cdn.pixabay.com/photo/2016/11/18/17/46/house-1836070__340.jpg" alt="" />
        <span
          ><i class="fas fa-heart"></i><i class="fas fa-exchange-alt"></i
        ></span>
      </div>
      <div class="bottom">
        <h3>Villa In Cairo</h3>
        <p>
          The very best waterfront location in Tahrir square and beside many
          cool places
        </p>
        <div class="advants">
          <div>
            <span>Bedrooms</span>
            <div><i class="fas fa-th-large"></i><span>3</span></div>
          </div>
          <div>
            <span>Bathrooms</span>
            <div><i class="fas fa-shower"></i><span>2</span></div>
          </div>
          <div>
            <span>Area</span>
            <div>
              <i class="fas fa-vector-square"></i
              ><span>1800<span>Sq Ft</span></span>
            </div>
          </div>
        </div>
        <div class="price">
          <span>For Sale</span>
          <span>$410,000</span>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Box;
