import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";

function Homecard(props) {
  const emojiNumber = props.emoji;
  const cardText = props.text;
  const color = props.color;
  return (
    <div
      style={{
        display: "grid",
        background: `${color}`,
        borderRadius: "12px",
        width: "100%"
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "50% 50%",
          gridTemplateAreas: "'number icon' 'text text'",
          padding: "15%"
        }}
      >
        <h2
          style={{
            justifySelf: "start",
            alignSelf: "start",
            margin: "0px",
            gridArea: "number"
          }}
        >
          {emojiNumber}
        </h2>
        <FontAwesomeIcon
          icon={faEllipsisV}
          style={{
            justifySelf: "end",
            fontSize: "15px",
            padding: "5px 0px",
            gridArea: "icon"
          }}
          color="white"
        />
        <h4
          style={{
            gridArea: "text",
            color: "white",
            alignSelf: "end",
            margin: "0px",
            marginTop: "50%"
          }}
        >
          {cardText}
        </h4>
      </div>
    </div>
  );
}

export default Homecard;
