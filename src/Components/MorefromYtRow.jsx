import React from "react";
import "../Styles/MorefromYtRow.css";

function MorefromYtRow(props) {
  return (
    <>
      <div className="moreYt-row">
            <img className="moreYt-img" src={props.image} alt="" />
            <h2 className="moreYt-title">{props.title}</h2>
      </div>
    </>
  );
}

export default MorefromYtRow;
