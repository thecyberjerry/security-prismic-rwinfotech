import Image from "next/image";
import React from "react";
import Button from "./minicomponents/Button";
import { PiMagnifyingGlassThin } from "react-icons/pi";

export default function Myerror({ errorData }) {
  return (
    <div className="container-fluid error__wrapper">
      {errorData && (
        <div className="container">
          <div className="error">
            {errorData?.error_img && (
              <div className="error__img">
                <Image
                  src={errorData?.error_img?.url}
                  height={100}
                  width={100}
                  alt={errorData?.error_img?.alt}
                />
              </div>
            )}
            <div className="error__text">
              <h1>
                4<PiMagnifyingGlassThin />4
              </h1>
              <div className="error__desc">
                {errorData?.heading && errorData?.desc && (
                  <>
                    <h3>{errorData?.heading.map((item) => item?.text)}</h3>
                    <p>{errorData?.desc}</p>
                  </>
                )}
                {errorData?.btn && (
                  <div>
                    {errorData?.btn && <Button btn={errorData?.btn[0]} />}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
