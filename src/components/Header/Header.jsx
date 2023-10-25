import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./Header.css";
import { Link, NavLink } from "react-router-dom";
import React from "react";
import Home from '../../Pages/Home/Home';
import { useSelector } from "react-redux";
const Header = () => {
  const favorites = useSelector((state) => state.favorites.favorite);
  return (
    <Navbar bg="dark" data-bs-theme="dark" style={{ position: "fixed", width: "100%", zIndex: 1, top: 0 }}>
      <Container>
        <Navbar.Brand href="#home"><img src="../../../public/imdb_logo.jpeg" alt="" style={{ width: "50px" }} /></Navbar.Brand>
        <Nav className="me-auto">
          <NavLink to={"/"} style={({ isActive }) => (isActive) ? { color: 'red' } : {}} className="mx-4"  >Home</NavLink>
          <NavLink to={"/about"} style={({ isActive }) => (isActive) ? { color: 'red' } : {}} className="mx-4">About us</NavLink>
          <NavLink to={"/contact"} style={({ isActive }) => (isActive) ? { color: 'red' } : {}} className="mx-4">Contact us</NavLink>
          <NavLink to={"/movies"} style={({ isActive }) => (isActive) ? { color: 'red' } : {}} className="mx-4">Movies</NavLink>
          <NavLink to="favorites" style={({ isActive }) => (isActive) ? { color: 'red' } : {}} className="mx-4">Favorites ({favorites.length})
          </NavLink>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
