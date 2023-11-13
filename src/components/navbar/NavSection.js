import React, { useState } from "react";
import "./navsection.css";
import { Link, NavLink } from "react-router-dom";
import AronLogo from "../../assets/aron-logo.png";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const NavSection = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [activeNavItem, setActiveNavItem] = useState();

  const handleNavItemClick = (navItem) => {
    setActiveNavItem(navItem);
  };
  return (
    <>
      <div className="navbarsection">
        <div className="logo">
          <Link to="/">
            <img src={AronLogo} alt="aronlogo" />
          </Link>

          <h3 className="navbarname1"> </h3>
          <h3 className="navbarname">ARON </h3>
          <h3 className="navbarname">ENGINEERING</h3>
          <h3 className="navbarname">PVT.LTD</h3>
        </div>
        <div className="navbar">
          <nav className="nav-items">
            <NavLink to="/">
              <p>HOME</p>
            </NavLink>
            <NavLink to="/portfolio">
              <p>PORTFOLIO</p>
            </NavLink>

            <NavLink to="/services">
              <p>SERVICES</p>
            </NavLink>

            <NavLink to="/teameverest">
              <p>MEET US</p>
            </NavLink>
            <NavLink to="/carrier">
              <p>CAREER</p>
            </NavLink>
            <NavLink to="/contact">
              <p>CONTACT US</p>
            </NavLink>
          </nav>
        </div>
        <div className="navbar-mob">
          {!navOpen ? (
            <div className="nav-close" onClick={() => setNavOpen(true)}>
              <MenuIcon style={{ fontSize: "2.5rem" }} />
            </div>
          ) : (
            <div className="nav-open" onClick={() => setNavOpen(false)}>
              <div className="close-icon">
                <CloseIcon style={{ fontSize: "2.5rem" }} />
              </div>

              <div className="navbar-items">
                <li>
                  <Link to="/">
                    <p
                      className={activeNavItem === "home" ? "active" : ""}
                      onClick={() => handleNavItemClick("home")}
                    >
                      HOME
                    </p>
                  </Link>
                </li>
                <li>
                  <Link to="/portfolio">
                    <p
                      className={activeNavItem === "portfolio" ? "active" : ""}
                      onClick={() => handleNavItemClick("portfolio")}
                    >
                      PORTFOLIO
                    </p>
                  </Link>
                </li>
                <li>
                  <Link to="/services">
                    <p
                      className={activeNavItem === "services" ? "active" : ""}
                      onClick={() => handleNavItemClick("services")}
                    >
                      SERVICES
                    </p>
                  </Link>
                </li>

                <li class="dropdown-mob">
                  <button class="dropbtn-mob">
                    MEET US
                    <ArrowDropDownIcon />
                  </button>
                  <div class="dropdown-content-mob">
                    <Link to="/teameverest">
                      <p
                        className={
                          activeNavItem === "teameverest" ? "active" : ""
                        }
                        onClick={() => handleNavItemClick("teameverest")}
                      >
                        Team Everest
                      </p>
                    </Link>
                    {/* <Link to="/teamelbert">
                  <p
                    className={activeNavItem === "teamelbert" ? "active" : ""}
                    onClick={() => handleNavItemClick("teamelbert")}
                  >
                    Team Elbert
                  </p>
                </Link> */}
                  </div>
                </li>

                <li>
                  <Link to="/carrier">
                    <p
                      className={activeNavItem === "carrier" ? "active" : ""}
                      onClick={() => handleNavItemClick("carrier")}
                    >
                      CARRIERS
                    </p>
                  </Link>
                </li>
                <li>
                  <Link to="/contact">
                    <button
                      className={activeNavItem === "contact"}
                      onClick={() => handleNavItemClick("contact")}
                    >
                      CONTACT US
                    </button>
                  </Link>
                </li>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default NavSection;
