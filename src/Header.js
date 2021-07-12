import React from "react";
import PropTypes from "prop-types";
import { ReactComponent as Logo } from "./logo.svg";

/** Simple app header */
const Header = ({ profilePicture }) => {
  return (
    <div className="header">
      <h4>Messenger</h4>
      <Logo className="logo" />
    </div>
  );
};

Header.propTypes = {
  profilePicture: PropTypes.string,
};

export default Header;
