import React from "react";

// IMPORT OTHERS HERE //
import "./Button.scss";

const Button = (props) => {
  const {
    btnText,
    btnCallback,
    btnColor,
    btnTextColor,
    isShadow,
    btnWidth,
    btnHeight,
    customContainerClass,
    customBtnClass,
    customContainerStyle,
    customBtnStyle,
  } = props;

  const returnBtnClasses = () => {
    if (isShadow) {
      return "button__btn--with-shadow";
    }
    return "";
  };

  return (
    <div
      className={`button ${customContainerClass || ""}`}
      style={{ width: btnWidth, height: btnHeight, ...customContainerStyle }}
    >
      <button
        type="button"
        onClick={btnCallback}
        className={`button__btn ${returnBtnClasses()} ${customBtnClass || ""}`}
        style={{
          background: btnColor,
          color: btnTextColor,
          ...customBtnStyle,
        }}
      >
        {btnText}
      </button>
    </div>
  );
};

export default Button;
