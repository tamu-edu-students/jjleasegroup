import NavBar from "../../components/NavBar";
import Box from "../../components/Box";
import Footer from "../../components/Footer";
import Hero from "../../components/Hero";
import FAQ from "../FAQ";

const CollegeStation = () => {
  return (
    <div>
      {/* NavBar not function correctly once the window shrink */}
      <NavBar />
      {/*<Box />*/}
      {/*<FAQ />*/}
      <Footer />
    </div>
  );
};

export default CollegeStation;
