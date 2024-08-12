import React from "react";
import Heading from "./minicomponents/Heading";
import Articlescard from "./minicomponents/Articlescard";

export default function Articles({ articlesData }) {
  
  return (
    <div className="container">
      <div className="articles">
        <div className="articles__heading">
          {articlesData?.heading && (
            <Heading title={articlesData?.heading && articlesData?.heading} />
          )}
        </div>
        <div className="articles__card">
          {articlesData &&
            articlesData?.article_card &&
            articlesData?.article_card.map((item, index) => {
              return <Articlescard cardData={item} key={index} />;
            })}
        </div>
      </div>
    </div>
  );
}
