import React from "react";

// IMPORT OTHERS HERE //
import "./TextButton.scss";

const TextButton = (props) => {
  const {
    btnText,
    btnCallback,
    onHoverRequired,
    iconOnRight,
    customBtnClass,
    customDropdownClass,
    customBtnStyle,
    children,
  } = props;

  return (
    <div
      role="button"
      onClick={btnCallback}
      className={`text-button ${customBtnClass || ""}`}
      style={customBtnStyle}
      onKeyDown={() => {}}
      tabIndex="0"
    >
      {btnText}
      {iconOnRight}
      {onHoverRequired && (
        <div className={`dropdown-content ${customDropdownClass || ""}`}>{children}</div>
      )}
    </div>
  );
};

export default TextButton;
