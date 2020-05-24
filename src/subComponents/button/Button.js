import React from "react";

// IMPORT STYLES HERE //
import "./Button.css";

const Button = (props) => {
  const { btnText, btnCallback, btnColor, btnTextColor } = props;
  return (
    <div className="button">
      <button
        type="button"
        onClick={btnCallback}
        className="button__btn"
        style={{ background: btnColor, color: btnTextColor }}
      >
        {btnText}
      </button>
    </div>
  );
};

export default Button;
