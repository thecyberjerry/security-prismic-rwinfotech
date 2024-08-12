"use client";
import Image from "next/image";
import React from "react";

// Redux
import { useSelector, useDispatch } from "react-redux";
import { toggleOn } from "../toggle/state";

import Button from "./minicomponents/Button";
import Logo from "./minicomponents/Logo";
import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";
import { usePathname } from "next/navigation";
import Mininav from "./minicomponents/Mininav";

export default function Navbar({ navData }) {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const path = usePathname();

  return (
    <div className={path.slice(1) === "errorpage" ? "container" : ""}>
      <nav className={`${navData?.toggle && "nav__toggle"} nav__padding`}>
        <div className="nav">
          {navData.logo && navData.logo_title && (
            <div className="nav__logo">
              <Logo
                logodata={navData.logo}
                title={navData.logo_title}
                logourl={navData.logo_url}
              />
              <RxHamburgerMenu
                onClick={() => {
                  dispatch(toggleOn());
                }}
                className="nav--open"
              />
              <Mininav
                isOpen={count ? "mininav--isopen" : ""}
                logodata={{
                  logodata: navData.logo,
                  title: navData.logo_title,
                  logourl: navData.logo_url,
                }}
                items={navData?.navlist}
                btn={navData?.btn[0]}
              />
            </div>
          )}
          {navData?.navlist && (
            <div className="nav__list ">
              <ul>
                {navData &&
                  navData?.navlist &&
                  navData?.navlist.map((item, index) => {
                    return (
                      <Link href={item.url.url} key={index}>
                        <li
                          style={{
                            color:
                              path.slice(1).toLowerCase() ===
                              item.link_title.toLowerCase()
                                ? "#EF9151"
                                : undefined,
                          }}
                        >
                          {item.link_title}
                        </li>
                      </Link>
                    );
                  })}
              </ul>
            </div>
          )}
          <div className="nav__phone">
            {navData?.tel_icon && (
              <>
                <Image
                  className="img"
                  src={navData?.tel_icon?.url}
                  height={100}
                  width={100}
                  alt={navData?.tel_icon?.alt}
                />
                <ul>
                  <li>{navData?.tel}</li>
                </ul>
              </>
            )}
          </div>
        </div>
        {navData?.btn && (
          <>
            <div className="nav__btn">
              <Button btn={navData?.btn[0]} />
            </div>
          </>
        )}
      </nav>
    </div>
  );
}
