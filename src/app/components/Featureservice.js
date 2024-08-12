import React from "react";
import Information from "./minicomponents/Information";

export default function Featureservice({info}) {
  
  return (
    <div>
      <Information informationData={info.information} />
    </div>
  );
}
// 