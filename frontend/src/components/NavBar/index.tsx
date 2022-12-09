import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import styles from "./styles.module.scss";
import logo from "../../asserts/pictures/logo.svg";
import { getUser, deleteUser } from "../../utils/cookie";
import { useEffect } from "react";
import classNames from "../../utils/classNames";

function NavBar() {
  const userInfo = getUser();

  return (
    <Navbar className={styles.nav} expand="lg">
      <Container>
        <Navbar.Brand bsPrefix={"styles"} className={styles.brand} href="/">
          <img src={logo} alt="logo" className={styles.logo} />
          JJtxhome
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        {/*<Navbar.Collapse*/}
        {/*  bsPrefix={"styles"}*/}
        {/*  className={classNames(styles.collapse, "collapse")}*/}
        {/*>*/}
        <Navbar.Collapse>
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
            <Nav.Link
              bsPrefix={"styles"}
              className={styles.item}
              href={userInfo ? "/ContactUs" : "/Login"}
            >
              Contact Us
            </Nav.Link>
            {!userInfo ? (
              <Nav.Link
                bsPrefix={"styles"}
                className={styles.item}
                href="/Login"
              >
                Login
              </Nav.Link>
            ) : (
              <NavDropdown
                bsPrefix={"styles"}
                className={styles.item}
                title={userInfo.name}
              >
                <NavDropdown.Item href="/MyProfile">Profile</NavDropdown.Item>
                <NavDropdown.Item href="/MyMessages">Messages</NavDropdown.Item>
                <NavDropdown.Item href="/ChangePassword">
                  Change Password
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item
                  onClick={() => {
                    deleteUser();
                    window.location.href = "/";
                  }}
                >
                  Logout
                </NavDropdown.Item>
              </NavDropdown>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
