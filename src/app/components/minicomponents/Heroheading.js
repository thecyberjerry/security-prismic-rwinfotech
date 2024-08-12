import React from "react";

export default function Heroheading({ reverse, content, size }) {
  
  return (
    <div className="heading">
      <h1 style={{ fontSize: `${size ? size : ""}rem` }}>
        <span className={reverse ? "heading__white" : "heading__orange"}>
          {content.first}&nbsp;
        </span>
        <span className={reverse ? "heading__orange" : "heading__white"}>
          {content.second}
        </span>
      </h1>
    </div>
  );
}
