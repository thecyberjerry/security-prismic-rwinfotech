import React from "react";
import Image from "next/image";
import Link from "next/link";
export default function Logo({ logodata, title, logourl }) {  

  return (
    <Link href={logourl.url && logourl.url}>
      <div className="logo">
        {logodata && (
          <>
            <Image
              src={logodata?.url && logodata?.url}
              width={100}
              height={100}
              alt={logodata?.alt && logodata?.alt}
            />
            <h6>{title && title}</h6>
          </>
        )}
      </div>
    </Link>
  );
}
