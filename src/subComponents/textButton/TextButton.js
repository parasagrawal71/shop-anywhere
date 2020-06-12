import React from "react";

// IMPORT OTHERS HERE //
import "./TextButton.scss";

const TextButton = (props) => {
  const {
    btnText,
    customBtnClass,
    btnCallback,
    onHoverRequired,
    customDropdownClass,
    children,
  } = props;

  return (
    <button
      type="button"
      onClick={btnCallback}
      className={`text-button ${customBtnClass || ""}`}
    >
      {btnText}

      {onHoverRequired && (
        <div className={`dropdown-content ${customDropdownClass || ""}`}>
          {children}
        </div>
      )}
    </button>
  );
};

export default TextButton;