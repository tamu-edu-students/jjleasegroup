// import './styles.module.scss';

const Hero = () => {
  return (
    <section>
      <div
        style={{
          height: "50vh",
          backgroundImage:
            "url(https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80)",
          backgroundSize: "cover",
          backgroundPosition: "center;",
        }}
        className="position-relative w-100"
      >
        <div
          className="position-absolute text-white d-flex flex-column align-items-center justify-content-center"
          style={{
            top: "0",
            right: "0",
            bottom: "0",
            left: "0",
            backgroundColor: "rgba(0,0,0,.6)",
          }}
        >
          <h1 className="mb-4 mt-2 font-weight-bold text-center">
            JJ Group Lease
          </h1>
          <h5>SubHeadline</h5>
          <br />
          <br />
          <br />
          <div className="text-center">
            {/* <!-- hover background-color: white; color: black; --> */}
            <a
              href="#"
              id="filled"
              className="btn px-5 py-3 text-white mt-3 mt-sm-0 mx-1"
              style={{ borderRadius: "20px", backgroundColor: "#9B5DE5" }}
            >
              Austin{" "}
            </a>
            <br />
            <br />
            {/* <!-- hover background-color: #9B5DE5; color: white; --> */}
            <a
              href="#"
              id="outlined"
              className="btn px-5 py-3 text-white mt-3 mt-sm-0 mx-1"
              style={{ borderRadius: "20px", backgroundColor: "#9B5DE5" }}
            >
              College Station
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
