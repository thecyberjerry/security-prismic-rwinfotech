import Image from "next/image";
import React from "react";

export default function Blogs() {
  const src = "https://datawise-rwinfotech.vercel.app/blogs/Thumbnail.svg";
  return (
    <div className="blogs container">
      <div className="blogs__wrapper">
        <div className="blogs__img">
          <Image src={src} width={100} height={100} />
        </div>
        <div className="blogs__heading">
          Why Migrate to Headless CMS? Key Reasons to Migrate
        </div>
        <div className="blogs__desc">
          In the era of digitalization, managing an excellent customer
          experience across multiple platforms is your brand&apos;s top priority. But
          do you need help to keep up with new trends using traditional CMS?
        </div>
      </div>
    </div>
  );
}
