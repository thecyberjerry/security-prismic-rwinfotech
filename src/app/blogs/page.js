"use client";
import React, { useEffect, useState } from "react";
import { notFound } from "next/navigation";
import { createClient } from "@/prismicio";
import Link from "next/link";
import Hero from "../components/Hero";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { GrNext, GrPrevious } from "react-icons/gr";

export default function Index() {
  const client = createClient();
  const [documents, setdocuments] = useState("");
  const [latestthree, setlatestthree] = useState("");
  const [navbar, setnavbar] = useState("");
  const [hero, sethero] = useState("");
  const [counter, setcounter] = useState(1);
  const [btntoggle, setbtntoggle] = useState(false);
  const router = useRouter();
  const path = usePathname();
  useEffect(() => {
    const fetchBlogs = async () => {
      setbtntoggle(true);
      const document = await client
        .getByType("blogpage", {
          pageSize: 6,
          page: counter,
          orderings: {
            field: "document.first_publication_date",
            direction: "desc",
          },
        })
        .catch(() => notFound());
      setdocuments(document);
      const fetchthree = async () => {
        const latestthree = await client
          .getByType("blogpage", {
            pageSize: 3,
            page: counter,
            orderings: {
              field: "document.first_publication_date",
              direction: "desc",
            },
          })
          .catch(() => notFound());
        setlatestthree(latestthree.results);
      };
      document.page === 1 ? fetchthree() : "";
      const navbar = await client.getSingle("navbar");
      setnavbar(navbar);
      const hero = await client.getSingle("blogs");
      sethero(hero);
      document.page > 1
        ? router.push(`${path}?page=${counter}`)
        : router.push(`${path}`);
      setbtntoggle(false);
    };
    fetchBlogs();
  }, [counter]);
  return (
    <div>
      {hero?.data?.slices &&
        hero?.data?.slices?.map((item, index) => {
          return (
            <Hero key={index} navData={navbar.data} herodata={item.primary} />
          );
        })}

      <div className="blogs container">
        <div
          className={`blogs__highlight container ${documents && documents?.page !== 1 && "blogs__highlight--hidden"}`}
        >
          {/* {documents?.results &&
            documents?.results?.map((item, index) => {
              return (
                <React.Fragment key={index}>
                  {item?.data &&
                    item?.data?.slices?.map((elem, index) => {
                      return (
                        <div key={index} className="blogs__front">
                          {elem?.primary?.card_content &&
                            elem?.primary?.card_content.map(
                              (element, index) => {
                                return (
                                  
                                );
                              }
                            )}
                        </div>
                      );
                    })}
                </React.Fragment>
              );
            })} */}
          <div className="blogs__front">
            <div className="blogs__desc">
              <h3>
                The Three Key Roles of Armed and Unarmed School Campus Security
                Guards
              </h3>
              <p>
                School campus security guards often connect with teachers,
                staff, and students, knowing them by name and putting everyone
                at ease. Although the roles of school campus security guards may
                appear to be parking traffic control and campus safety, the
                value goes well beyond what most people realize as these trained
                professionals foster a safe and cohesive educational
                environment.
              </p>
              <div className="blogs__img">
                <img
                  src={
                    "https://s3-alpha-sig.figma.com/img/4a01/3818/27ceb310e3c2b76d6866891a9cb276c5?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ToSbpZ8HxCyO5P3YmkLWa5lp32JRY0EuK2~b8POxfbce1w11MwsDuSdQtx~rdw1PgVvaDkuAKgN2hmOz8nu~ON8SbadzpR55h9c6HKeSmpumqlYu4LYjXhcIny8h8Gv~TBdRYjtT0pqfmu3RNY~soMcQDVHUqhRBOI0w4tfFZH2L7vknnkHuMYPEuJGvMskyyz9BFc0UyWpN88L8PwxCVWdidshHWsH1MWRM1rLQ7rT525rrTVC-PF4HDprow22a4LYgftmrR5ddqUMpzNJ9IYpk903quTZg6FmF46vAR0bqn~ogT1AgVBlNicQI97lWr793EhyKy8V0wnNMCp5WBw__"
                    // documents &&
                    // documents?.results[0]?.data?.slices[1].primary
                    //   ?.card_content[0].show_img.url
                  }
                  height={100}
                  width={100}
                />
              </div>
            </div>
          </div>
          <div className="blogs__recent">
            <h4>Recent Posts</h4>
            <div className="blogs__recentwrapper">
              {latestthree &&
                latestthree?.map((item, index) => {
                  return (
                    <React.Fragment key={index}>
                      {item.data.slices.map((elem, index) => {
                        return (
                          <React.Fragment key={index}>
                            {elem?.primary?.card_content &&
                              elem?.primary?.card_content.map(
                                (element, index) => {
                                  return (
                                    <div
                                      onClick={() => {
                                        router.push(
                                          `${path.slice(1, path.length)}/${item.uid}`
                                        );
                                      }}
                                      key={index}
                                      className="blogs__recentblogs"
                                    >
                                      <div className="blogs__recentimg">
                                        <Image
                                          src={
                                            element?.show_img?.url &&
                                            element?.show_img?.url
                                          }
                                          alt=""
                                          height={100}
                                          width={100}
                                        />
                                      </div>
                                      <h5>
                                        {element?.heading && element?.heading}
                                      </h5>
                                    </div>
                                  );
                                }
                              )}
                          </React.Fragment>
                        );
                      })}
                    </React.Fragment>
                  );
                })}
            </div>
          </div>
        </div>
        <div className="blogs__box ">
          <div className="blogs__cards">
            {documents?.results &&
              documents?.results?.map((item, index) => {
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
                                  <Image
                                    priority
                                    src={element?.show_img?.url}
                                    width={100}
                                    height={100}
                                  />
                                </div>
                              )}
                              <div className="blogs__heading">
                                <h4>{element?.heading && element?.heading}</h4>
                              </div>
                              {element?.showdesc && (
                                <div className="blogs__desc">
                                  <p>
                                    {element.showdesc.length > 100 &&
                                      element.showdesc + "..."}
                                  </p>
                                </div>
                              )}
                            </React.Fragment>
                          );
                        })
                      );
                    })}
                    <Link href={`${path.slice(1, path.length)}/${item.uid}`}>
                      <h6>Click Here</h6>
                    </Link>
                  </div>
                );
              })}
          </div>
          <div className="blogs__pagination">
            <button
              disabled={btntoggle ? true : ""}
              className="btn__default"
              onClick={() => {
                counter === 1 ? "" : setcounter(counter - 1);
              }}
            >
              <GrPrevious />
            </button>
            <div className="blogs__nmb">
              <h5>{`${documents?.page && documents?.page > 1 ? documents?.page - 1 : ""}  `}</h5>
              <h5 className="blogs__chars">
                {`${documents?.page && documents?.page}`}
              </h5>
              <h5>{` ${documents?.page < documents.total_pages ? documents?.page + 1 : ""}`}</h5>
            </div>
            <button
              disabled={btntoggle ? true : ""}
              className="btn__default"
              onClick={() => {
                counter === documents?.total_pages
                  ? ""
                  : setcounter(counter + 1);
              }}
            >
              <GrNext />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
