import React, { useState } from "react";
import { NavLink, withRouter } from "react-router-dom";

const Nabvar = ({ history }) => {
  const [isOpen, setOpen] = useState(false);

  const isAuth = !!localStorage.getItem("token");
  const loginUser = () => {
    localStorage.setItem("token", "some-login-token");
    history.push("/profile/jose");
  };
  const logoutUser = () => {
    localStorage.removeItem("token");
    history.push("/");
  };
  return (
    <nav
      className="navbar is-primary"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="container">
        <div className="navbar-brand">
          <a
            role="button"
            className={`navbar-burger burger ${isOpen && "is-active"}`}
            aria-label="menu"
            aria-expanded="false"
            onClick={() => setOpen(!isOpen)}
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div className={`navbar-menu ${isOpen && "is-active"}`}>
          <div className="navbar-start">
            <NavLink
              className="navbar-item"
              activeClassName="is-active"
              to="/"
              exact
            >
              Beggining
            </NavLink>
            <NavLink
              className="navbar-item"
              activeClassName="is-active"
              to="/about"
            >
              About
            </NavLink>
            <NavLink
              className="navbar-item"
              activeClassName="is-active"
              to="/profile/jose"
            >
              Profile
            </NavLink>
          </div>
          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                {!isAuth ? (
                  <button className="button is-white" onClick={loginUser}>
                    Log In
                  </button>
                ) : (
                  <button className="button is-black" onClick={logoutUser}>
                    Log Out
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default withRouter(Nabvar);
