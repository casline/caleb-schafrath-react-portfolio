import React from "react";
import profilePicture from "../../../static/assets/images/bio/test-example.jpg";

export default function () {
  return (
    <div className="content-page-wrapper">
      <div
        classname="left-column"
        style={{
          background: "url(" + profilePicture + ") no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="right-column">
        Content goes here , Bio information goes here. List off what your into
        and also what your currently working on. Also include what area you
        would like to go into and what qualifications your set for.
      </div>
    </div>
  );
}
