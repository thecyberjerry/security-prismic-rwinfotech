import React from "react";
import Heading from "./Heading";
import Button from "./Button";
import Image from "next/image";

export default function Footercta({ footerCta }) {

  return (
    <div className="">
      {footerCta?.cta_img && (
        <div className="footercta__img">
          <Image
            src={footerCta?.cta_img?.url}
            height={100}
            width={100}
            alt={footerCta?.cta_img?.alt}
          />
        </div>
      )}
      <div className="footercta">
        <div className="footercta__lower">
          <div className="footercta__wrapper">
            <div className="footercta__textcontent">
              {footerCta?.cta_title?.title && footerCta?.cta_title?.color  && (
                <Heading
                  whiteColor={
                    footerCta?.cta_title?.color && footerCta?.cta_title?.color
                  }
                  title={
                    footerCta?.cta_title.title && footerCta?.cta_title?.title
                  }
                />
              )}
            </div>
            <div className="footercta__btn">
              {footerCta?.btn && <Button btn={footerCta?.btn[0]} />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
