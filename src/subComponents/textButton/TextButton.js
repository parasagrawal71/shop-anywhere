import React from "react";

// IMPORT OTHERS HERE //
import "./TextButton.scss";

const TextButton = (props) => {
  const { btnText, customBtnClass, btnCallback, hoverCallback } = props;

  return (
    <button
      type="button"
      onClick={btnCallback}
      onMouseOver={hoverCallback}
      onFocus={() => {}}
      className={`text-button ${customBtnClass || ""}`}
    >
      {btnText}
    </button>
  );
};

export default TextButton;
