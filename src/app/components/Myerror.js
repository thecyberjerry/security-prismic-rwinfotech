import Image from "next/image";
import React from "react";
import Button from "./minicomponents/Button";
import { PiMagnifyingGlassThin } from "react-icons/pi";
import Link from "next/link";
export default function Myerror({ errorData }) {
  return (
    <div className="container-fluid error__wrapper">
      {errorData && (
        <div className="container">
          <div className="error">
            {errorData?.errorImg && (
              <div className="error__img">
                <Image
                  src={errorData?.errorImg?.src}
                  height={100}
                  width={100}
                  alt={errorData?.errorImg?.alt}
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
                    <h3>{errorData?.heading}</h3>
                    <p>{errorData?.desc}</p>
                  </>
                )}
                {errorData?.btn && (
                  <div>
                      <Button btn={errorData?.btn && errorData?.btn} />
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
