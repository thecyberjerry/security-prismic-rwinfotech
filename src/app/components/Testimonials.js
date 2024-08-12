import React from "react";
import Heading from "./minicomponents/Heading";
import Testimonialcard from "./minicomponents/Testimonialcard";
export default function Testimonials({ testimonialdata }) {
  return (
    <div className="container">
      <div className="testimonials">
        <div className="testimonials__heading">
          {testimonialdata?.heading && (
            <Heading title={testimonialdata.heading} />
          )}
        </div>
        <div className="testimonials__reviews">
          {testimonialdata &&
            testimonialdata?.testimonal_card &&
            testimonialdata?.testimonal_card.map((item, index) => {
              return <Testimonialcard key={index} cardData={item} />;
            })}
        </div>
      </div>
    </div>
  );
}
