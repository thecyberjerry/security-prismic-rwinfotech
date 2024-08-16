import Image from "next/image";
import React from "react";
import Button from "./Button";

export default function Information({ informationData }) {
  return (
    <React.Fragment>
      <div className="">
        <div className="container">
          <div
            className={`aboutus  ${
              informationData.direction === "Right" ? "aboutus--reverse" : ""
            }`}
          >
            {informationData?.about_img && (
              <div className="aboutus__img">
                <Image
                  src={informationData?.about_img?.url}
                  height={100}
                  width={100}
                  alt={informationData?.about_img?.alt}
                />
              </div>
            )}
            <div className="aboutus__textcontent">
              <div className="aboutus__h3">
                {informationData?.heading_icon &&
                  informationData?.heading_icon?.url && (
                    <Image
                      className="aboutus__minilogo"
                      src={informationData?.heading_icon?.url}
                      height={100}
                      width={100}
                      alt={informationData?.heading_icon?.alt}
                    />
                  )}
                {informationData?.heading && (
                  <h3>{informationData?.heading}</h3>
                )}
              </div> 
              {informationData?.description && (
                <p>{informationData?.description}</p>
              )}
              {informationData?.lists && (
                <ul>
                  {informationData?.lists?.map((item, index) => {
                    return <li key={index}>{item.list_item}</li>;
                  })}
                </ul>
              )}
              {informationData?.btn && (
                <div className="aboutus__btn">
                  <Button btn={informationData?.btn[0]} />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
