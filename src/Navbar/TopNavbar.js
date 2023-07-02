import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
// import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, NavLink, useNavigate } from "react-router-dom";

const TopNavbar = () => {
  const [token, setToken] = useState("");

  const navigate = useNavigate();

  useEffect(()=>{
    const sessionToken = JSON.parse(localStorage.getItem('loggedInUser'));
    setToken(sessionToken);
  },[navigate]);

  const handleLogout=()=>{
    navigate('/login');
    localStorage.removeItem("loggedInUser");
    localStorage.removeItem("dashboard");
    setColor("white")
    
  }

  const [color ,setColor] = useState("#CADDE8")

  

  return (
    <Navbar  sticky="top" style={{height:"50px",background:color,boxShadow:"0px 0px 5px 0px black"}}>
      <Container>
        
          <NavLink
            to={"/"}
            onClick={()=>setColor("#CADDE8")}
            className={(isActive) =>
              isActive.isActive ? "activeClassName navlink" : "navlink"
            }
          >
            Home
          </NavLink>

          <NavLink
          onClick={()=>setColor("#CADDE8")}
            className={(isActive) =>
              isActive.isActive ? "activeClassName navlink" : "navlink"
            }
            to={"/dashboard"}
          >
            Dashboard
          </NavLink>

          <NavLink onClick={()=>setColor("#CADDE8")} className={ "navlink"}>About Us</NavLink>

          <NavLink onClick={()=>setColor("#CADDE8")} className={ "navlink"}>Contact US</NavLink>
       
      </Container>

      {
        !token?
        <Container id="cont2">
      <Link className="btn btn-outline-danger" onClick={()=>setColor("white")}  to={'/login'} style={{borderRadius:"40px"}}>Login</Link>
      </Container>
      :
      <Container id="cont2">
      <Link className="btn btn-outline-dark"   to={'/login'} style={{borderRadius:"40px"}} onClick={handleLogout}>LogOut</Link>
      </Container>
      }
    </Navbar>
  );
};

export default TopNavbar;
