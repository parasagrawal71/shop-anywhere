import React from "react";
import { Link } from "react-router-dom";

// IMPORT OTHERS HERE //
import "./Breadcrumb.scss";

const Breadcrumb = ({ BreadcrumbData }) => {
  return (
    <div className="breadcrumb">
      {BreadcrumbData.map((item, index) => {
        return (
          <>
            <Link to={item.path} exact className="breadcrumb-item">
              {item.label}
            </Link>
            {index !== BreadcrumbData.length - 1 ? (
              <span className="breadcrumb-item-separater">&gt;</span>
            ) : null}
          </>
        );
      })}
    </div>
  );
};

export default Breadcrumb;
