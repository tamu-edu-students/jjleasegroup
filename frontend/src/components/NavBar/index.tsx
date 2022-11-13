import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import styles from "./styles.module.scss";

function NavBar() {
  return (
    <Navbar className={styles.nav} expand="lg">
      <Container>
        <Navbar.Brand className={styles.brand} href="/">
          JJtxhome
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className={styles.collapse}>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <NavDropdown title="Leasing">
              <NavDropdown.Item href="/Austin">Austin</NavDropdown.Item>
              <NavDropdown.Item href="/CollegeStation">
                College Station
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/ContactUs">Contact Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
