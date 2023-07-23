import React from "react";
import "./Trets.scss";
const Trets = ({ Heading, Text, Trets1 }) => {
  return (
    <>
      <div className="Box">
        <div>
          <h2
            style={{
              fontFamily: "Poppins",
              fontZize: "48px",
              fontWeight: "600",
              lineHeight: "58px",
              letterSpacing: "0.035em",
              textAlign: "left",
            }}
          >
            {Heading}
          </h2>
          <span>{Text[0]}<p/><br/>{Text[1]}</span>
        </div>
        <div>
          <img src={Trets1} />{" "}
        </div>
      </div>
    </>
  );
};

export default Trets;
