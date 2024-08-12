import React from "react";
import Image from "next/image";
export default function Articlescard({ cardData }) {
  return (
    <div
      className="article"
      style={{
        backgroundImage: `url(${cardData?.bg_img?.url})`,
      }}
    >
      {cardData && (
        <div className="article__innertext">
          <div className="article__upperSection">
            <div className="article__readmore">
              <p>{cardData?.btn_title && cardData?.btn_title}</p>
            </div>
            <div className="article__date">
              <Image
                src={cardData?.cal_img?.url}
                height={100}
                width={100}
                alt={cardData?.cal_img?.alt}
              />
              <p>{cardData?.date && cardData?.date}</p>
            </div>
          </div>
          <div className="article__lowerSection">
            <p>{cardData?.description && cardData?.description}</p>
          </div>
        </div>
      )}
    </div>
  );
}
