import React, { useState } from "react";
import { Navbar, Nav, Container, NavDropdown, Form, FormControl, Button } from "react-bootstrap";
import { FaShoppingCart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { logout } from '../../JS/action/auth.action';

const NavBar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAuth = useSelector(state => state.authReducer.isAuth);

  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim() !== "") {
      navigate(`/search/${searchTerm}`);
      setSearchTerm("");
    }
  };

  return (
    <Navbar expand="lg" style={{ backgroundColor: '#003366' }} variant="dark">
      <Container>
        {/* Brand Logo + Name */}
        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
          <img
            src="/balls-sports.png" // <-- public folder
            alt="logo"
            width={40}
            style={{ borderRadius: "50%", marginRight: "10px" }}
          />
          <span className="text-white fw-bold">Turbo-Fit</span>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          {/* Left links */}
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/" className="text-white">Home</Nav.Link>

            {isAuth && (
              <NavDropdown title="Categories" id="categories-dropdown">
                <NavDropdown.Item as={Link} to="/shoes">Shoes</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/tshirts">Tshirts</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/BasketBall-Jersey">BasketBall-Jersey</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/balls">Balls</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/accessoires">Accessories</NavDropdown.Item>
              </NavDropdown>
            )}
          </Nav>

          {/* Right side */}
          <Nav className="ms-auto align-items-center">
            {/* Search Form */}
            <Form className="d-flex me-3" onSubmit={handleSearch}>
              <FormControl
                type="search"
                placeholder="Search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                size="sm"
                style={{ width: '150px' }}
              />
              <Button type="submit" variant="outline-light" size="sm" className="ms-1">
                Go
              </Button>
            </Form>

            {isAuth ? (
              <>
                <Nav.Link as={Link} to="/profile" className="text-white">Profile</Nav.Link>
                <Nav.Link href="#" onClick={() => dispatch(logout(navigate))} className="text-white">LogOut</Nav.Link>
                <Nav.Link as={Link} to="/cart" className="text-white d-flex align-items-center">
                  <FaShoppingCart size={22} />
                </Nav.Link>
              </>
            ) : (
              <>
                <Nav.Link as={Link} to="/login" className="text-white">Login</Nav.Link>
                <Nav.Link as={Link} to="/register" className="text-white">Register</Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
