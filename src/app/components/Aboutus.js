import React from "react";
import Information from "./minicomponents/Information";

export default function Aboutus({ info }) {
   
  return <Information informationData={info.information} />;
}
