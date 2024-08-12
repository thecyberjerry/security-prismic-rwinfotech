import React from "react";

export default function Credentials({ creds }) {

  return (
    <div className="container-fluid credentials__wrap">
      <div className="credentials container">
        <div className="credentials__box">
          {creds &&
            creds?.creds?.map((item, index) => {
              return (
                <div key={index} className="credentials__rounded">
                  <h2>{item?.heading}</h2>
                  <p>{item?.description}</p>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}
