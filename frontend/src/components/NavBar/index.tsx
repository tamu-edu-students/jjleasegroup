import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import styles from "./styles.module.scss";
import logo from "../../asserts/pictures/logo.svg";
import { getUser } from "../../utils/cookie";
import { useEffect } from "react";

function NavBar() {
  useEffect(() => {
    console.log(getUser());
  }, []);
  return (
    <Navbar className={styles.nav} expand="lg">
      <Container>
        <Navbar.Brand bsPrefix={"styles"} className={styles.brand} href="/">
          <img src={logo} alt="logo" className={styles.logo} />
          JJtxhome
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse bsPrefix={"styles"} className={styles.collapse}>
          {/*<Navbar.Collapse>*/}
          <Nav className="justify-content-end">
            <Nav.Link bsPrefix={"styles"} className={styles.item} href="/">
              Home
            </Nav.Link>
            <NavDropdown
              bsPrefix={"styles"}
              className={styles.item}
              title="Leasing"
            >
              <NavDropdown.Item href="/Austin">Austin</NavDropdown.Item>
              <NavDropdown.Item href="/CollegeStation">
                College Station
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        {!getUser() ? (
          <Nav.Link bsPrefix={"styles"} className={styles.item} href="/Login">
            Login
          </Nav.Link>
        ) : (
          <NavDropdown
            bsPrefix={"styles"}
            className={styles.item}
            title={getUser().name}
          >
            <NavDropdown.Item href="/MyProfile">Profile</NavDropdown.Item>
            <NavDropdown.Item href="/ContactUs">Contact Us</NavDropdown.Item>
            <NavDropdown.Item href="/ChangePassword">
              Change Password
            </NavDropdown.Item>
            <NavDropdown.Item href="/Success">Logout</NavDropdown.Item>
          </NavDropdown>
        )}
      </Container>
    </Navbar>
  );
}

export default NavBar;
