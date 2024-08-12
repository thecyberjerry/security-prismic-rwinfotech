import React from "react";
import Cards from "./minicomponents/Card";

export default function Services({ serviceData }) {
  return (
    <div className="container">
      <div className="services">
        <div className="services__wrapper ">
          <h2>{serviceData?.heading && serviceData?.heading}</h2>
          <p>{serviceData?.description && serviceData?.description}</p>
        </div>
        <div className="services__cards">
          {serviceData?.cards &&
            serviceData.cards?.map((item, index) => {
              return (
                <Cards key={index} cardData={item}/>
              );
            })}
        </div>
      </div>
    </div>
  );
}
