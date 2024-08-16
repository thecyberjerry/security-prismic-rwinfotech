import Image from "next/image";
import React from "react";
import Link from "next/link";
export default function Blogs({ blogdata, path }) {
  return (
    <>
      {blogdata?.results &&
        blogdata?.results?.map((item, index) => {
          return (
            <div key={index} className="blogs__wrapper">
              {item.data.slices.map((elem) => {
                return (
                  elem?.primary?.card_content &&
                  elem?.primary?.card_content.map((element, index) => {
                    return (
                      <React.Fragment key={index}>
                        {element?.show_img?.url && (
                          <div className="blogs__img">
                            {/* <Image
                              priority
                              src={element?.show_img?.url}
                              width={100}
                              height={100}
                            /> */}
                          </div>
                        )}
                        <div className="blogs__textcontent">
                          <div className="blogs__heading">
                            <h4>{element?.heading && element?.heading}</h4>
                          </div>
                          {element?.showdesc && (
                            <div className="blogs__desc">
                              <p>
                                {element.showdesc.length > 100 &&
                                  element.showdesc.slice(0, 99) + "..."}
                              </p>
                            </div>
                          )}
                        </div>
                      </React.Fragment>
                    );
                  })
                );
              })}
              {path && (
                <Link href={`${path.slice(1, path.length)}/${item.uid}`}>
                  <h6>Read More</h6>
                </Link>
              )}
            </div>
          );
        })}
    </>
  );
}
