import React from "react";
import { HiMiniXMark } from "react-icons/hi2";
import Logo from "./Logo";

// Redux
import { useDispatch } from "react-redux";
import { toggleOff } from "../../toggle/state";
import Link from "next/link";
import Button from "./Button";

export default function Mininav({ isOpen, logodata, items, btn }) {
  
  const dispatch = useDispatch();
  return (
    <div className={`mininav container  ${isOpen && isOpen}`}>
      <div className="mininav__wrapper">
        <div className="mininav--close">
          {logodata && (
            <Logo
              logodata={logodata?.logodata}
              title={logodata?.title}
              logourl={logodata?.logourl}
            />
          )}
          <HiMiniXMark
            onClick={() => {
              dispatch(toggleOff());
            }}
            className="nav--close"
          />
        </div>
        <div>
          <ul>
            {items &&
              items.map((item, index) => {
                return (
                  <Link href={item.url.url} key={index}>
                    <li>{item.link_title}</li>
                  </Link>
                );
              })}
            <Button btn={btn} />
          </ul>
        </div>
      </div>
    </div>
  );
}
