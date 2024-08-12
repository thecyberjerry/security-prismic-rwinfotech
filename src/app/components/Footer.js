import React from "react";
import Footercta from "./minicomponents/Footercta";
import Logo from "./minicomponents/Logo";
import Link from "next/link";

export default function Footer({ footerdata }) {
  return (
    <footer>
      {footerdata && (
        <div className="container footer__cta">
          <Footercta
            footerCta={{
              cta_img: footerdata.cta_img,
              cta_title: {
                title: footerdata.cta_title,
                color: footerdata.cta_title_color,
              },
              btn: footerdata.btn,
            }}
          />
        </div>
      )}
      <div className="container-fluid footer">
        <div className="container footer__wrapper">
          <div className="footer__content">
            <div className="footer__logo">
              {footerdata && (
                <Logo
                  logodata={footerdata.logo}
                  title={footerdata.logo_title}
                  logourl={footerdata.logo_url}
                />
              )}
              <p>
                {footerdata?.footer_description &&
                  footerdata?.footer_description}
              </p>
            </div>
            <div className="footer__list">
              {footerdata?.slices &&
                footerdata?.slices.map((item, index) => {
                  return (
                    <div key={index} className="footer__listcontent">
                      <label htmlFor="list">{item.primary.label}</label>
                      <ul>
                        {item?.primary.footer_list &&
                          item?.primary.footer_list?.map((item, index) => {
                            return (
                              <Link href={item.url.url} key={index}>
                                <li>{item.items}</li>
                              </Link>
                            );
                          })}
                      </ul>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
