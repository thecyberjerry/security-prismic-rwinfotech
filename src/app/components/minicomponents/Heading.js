import React from "react";
export default function Heading({ title, whiteColor }) {  
  
  return (
    <div>
      <h2 className={`${whiteColor ? `heading__white` : `heading__default`}`}>
        {title && title}
      </h2>
    </div>
  );
}
