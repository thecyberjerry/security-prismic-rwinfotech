import React from "react";
import Navbar from "./Navbar";
import Heroheading from "./minicomponents/Heroheading";
import Button from "./minicomponents/Button";

export default function Hero({ navData, herodata }) {
  
  return (
    <div
      className="hero"
      style={{
        backgroundImage: `url(${herodata?.bg_img.url && herodata?.bg_img.url})`,
      }}
    >
      <div className="container">
        {navData && (
          <div className="hero__navbar">
            <Navbar navData={navData}/>
          </div>
        )}
        <div
          className={`${
            herodata?.description && herodata?.btn ? "" : "hero__flex"
          } hero__content`}
        >
          {herodata && (
            <div className="hero__text hero__text--red">
              <>
                {herodata?.heading && (
                  <Heroheading
                    content={{
                      first: herodata?.heading[0]?.first,
                      second: herodata?.heading[0]?.second,
                    }}
                    reverse={herodata?.heading[0]?.reverse}
                  />
                )}
                {herodata?.description && <p>{herodata?.description}</p>}
                <div className="hero__text__btn">
                  {herodata?.btn && <Button btn={herodata?.btn[0]} />}
                </div>
              </>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
