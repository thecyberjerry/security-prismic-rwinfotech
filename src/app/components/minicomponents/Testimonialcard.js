import React from "react";
import Image from "next/image";
export default function Testimonialcard({ cardData }) {
  return (
    <div className="testimonial">
      {cardData && (
        <div className="testimonial__wrapper">
          <div className="testimonial__card">
            {cardData?.icon && cardData?.icon?.url && (
              <div className="testimonial__icon">
                <Image
                  src={cardData?.icon?.url}
                  height={100}
                  width={100}
                  alt={cardData?.icon?.alt}
                />
              </div>
            )}
            <div className="testimonial__text">
              <p>{cardData?.description && cardData?.description}</p>
            </div>
            <div className="testimonial__user">
              {cardData?.user_img && cardData?.user_img?.url && (
                <div className="testimonial__userimg">
                  <Image
                    src={cardData?.user_img?.url}
                    height={100}
                    width={100}
                    alt={cardData?.user_img?.alt}
                  />
                </div>
              )}
              <h5>{cardData?.user_name && cardData?.user_name}</h5>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
