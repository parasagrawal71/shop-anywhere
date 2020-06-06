import React from "react";

// IMPORT STYLES HERE //
import "./Button.scss";

const Button = (props) => {
  const { btnText, btnCallback, btnColor, btnTextColor, isShadow } = props;

  const returnBtnClasses = () => {
    if (isShadow) {
      return "button__btn--with-shadow";
    }
    return "";
  };

  return (
    <div className="button">
      <button
        type="button"
        onClick={btnCallback}
        className={`button__btn ${returnBtnClasses()}`}
        style={{ background: btnColor, color: btnTextColor }}
      >
        {btnText}
      </button>
    </div>
  );
};

export default Button;
