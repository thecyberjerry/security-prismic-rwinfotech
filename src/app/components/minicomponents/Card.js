import React from "react";
import Image from "next/image";
export default function Cards({ cardData }) {
  return (
    <div className="card">
      {cardData && cardData?.card_img && cardData?.card_img?.url && (
        <div className="card__img">
          <Image
            src={cardData?.card_img?.url}
            height={100}
            width={100}
            alt={cardData?.card_img?.alt}
          />
        </div>
      )}
      <div className="card__textcontent">
        <h4>{cardData?.card_heading}</h4>
        <p>{cardData?.card_description}</p>
      </div>
    </div>
  );
}
