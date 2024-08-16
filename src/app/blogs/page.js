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
import Blogs from "../components/Blogs";
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

  const fetchHero = async () => {
    const navbar = await client.getSingle("navbar");
    setnavbar(navbar);
    const hero = await client.getSingle("blogs");
    sethero(hero);
  };

  const fetchme = async (pgsize) => {
    const data = await client
      .getByType("blogpage", {
        pageSize: pgsize || 6,
        page: counter,
        orderings: {
          field: "document.first_publication_date",
          direction: "desc",
        },
      })
      .catch(() => notFound());
    pgsize ? setlatestthree(data) : setdocuments(data);
  };

  useEffect(() => {
    setbtntoggle(true);
    fetchHero();
    fetchme();
    const fetchBlogs = async () => {
      documents.page === 1 && fetchme(3);
      documents.page > 1
        ? router.push(`${path}?page=${counter}`)
        : router.push(`${path}`);
      setbtntoggle(false);
    };
    fetchBlogs();
  }, [counter, documents?.page]);

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
                <Image
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
              {latestthree?.results &&
                latestthree?.results?.map((item, index) => {
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
        <div className="blogs__box">
          <div className="blogs__cards">
            <Blogs blogdata={documents} path={path} />
          </div>
          <div className="blogs__pagination">
            <button
              disabled={btntoggle || documents.page === 1 ? true : ""}
              className={`${documents.page === 1 ? "btn--disabled" : ""} btn__default`}
              onClick={() => {
                counter === 1 ? "" : setcounter(counter - 1);
              }}
            >
              <GrPrevious />
            </button>
            <div className="blogs__nmb">
              <h5>{`${documents?.page && documents?.page > 1 ? documents?.page - 1 : ""}`}</h5>
              <h5 className="blogs__chars">
                {`${documents?.page && documents?.page}`}
              </h5>
              <h5>{` ${documents?.page < documents.total_pages ? documents?.page + 1 : ""}`}</h5>
            </div>
            <button
              disabled={
                btntoggle || documents.page === documents.total_pages
                  ? true
                  : ""
              }
              className={`${documents.page === documents.total_pages ? "btn--disabled" : ""} btn__default`}
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
