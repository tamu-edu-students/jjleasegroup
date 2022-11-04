import styles from "./styles.module.scss";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";

function Home() {
  return (
    <div>
      <NavBar />
      <div className={styles.home}>
        <a href={"/ContactForm"}>Contact Form</a>
        <a href={"/SignUp"}>Sign Up</a>
        <a href={"/Login"}>Login</a>
      </div>
      <Footer />
    </div>
  );
}


export default Home;
