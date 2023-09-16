import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { INavbar } from "../Interfaces/interfaces";


export function NavbarComponenet({ navbarList , setPage }: INavbar) {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand >JS</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          {navbarList.map((item: any) => {
            return <Nav.Link href="#"  onClick={()=>setPage(item.routeAdress)} >{item.title}</Nav.Link>;
          })}
          </Nav>
         </Navbar.Collapse>
        
      </Container>
    </Navbar>
  );
}
