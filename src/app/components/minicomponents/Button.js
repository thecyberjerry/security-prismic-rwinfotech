import Link from "next/link";
import React from "react";

export default function Button({ btn }) {
  return (
    <>
      {/* btn?.url?.url && */}
      {btn?.title && (
        <Link href={btn?.url?.url ? btn?.url?.url : ""}>
          <button className={btn?.black_bg ? "btn__black" : "btn__default"}>
            {btn?.title}
          </button>
        </Link>
      )}
    </>
  );
}
