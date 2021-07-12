import React from "react";
import PropTypes from "prop-types";

const ClassicWindow = ({ windowWidth, windowTitle, children }) => {
  return (
    <div style={{ width: windowWidth, margin: "50px" }} className="window">
      <div className="title-bar">
        <div className="title-bar-text">{windowTitle}</div>
        <div className="title-bar-controls">
          <button aria-label="Minimize" />
          <button aria-label="Maximize" />
          <button aria-label="Close" />
        </div>
      </div>
      <div className="window-body">{children}</div>
    </div>
  );
};

ClassicWindow.propTypes = {
  windowWidth: PropTypes.number,
  windowTitle: PropTypes.string,
  children: PropTypes.object,
};

export default ClassicWindow;
