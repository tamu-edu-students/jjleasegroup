import Box from "../../components/Box";
import Footer from "../../components/Footer";
import Hero from "../../components/Hero";
import FAQ from "../FAQ";
import NavBar from "../../components/NavBar";

const Austin = () => {
  return (
    <div>
      {/* NavBar not function correctly once the window shrink */}
      <NavBar />
      <iframe
        src="https://www.abor.com/for-rent?filters={%22geohash%22:%229v6mh2fb56t4,9v6eecdbgkvh%22}"
        width="100%"
        height="1000px"
        style={{ border: "1px" }}
      />

      {/*<Box />*/}
      {/*<FAQ />*/}
      <Footer />
    </div>
  );
};

export default Austin;
