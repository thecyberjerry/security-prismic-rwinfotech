"use client";
import Link from "next/link";
import { createClient } from "@/prismicio";
import { useEffect, useState } from "react";
import Myerror from "./components/Myerror";
import Hero from "./components/Hero";
export default function NotFound() {
  const [error, seterror] = useState("");
  const [navbar, setnavbar] = useState("");
  useEffect(() => {
    const fetchError = async () => {
      const client = createClient();
      const error = await client.getSingle("error");
      seterror(error.data);
      const navbar = await client.getSingle("navbar");
      setnavbar(navbar);
    };
    fetchError();
  }, []);
  return (
    <div>
      {error?.slices &&
        error?.slices?.map((item, index) => {
          return (
            <Hero key={index} navData={navbar.data} herodata={item.primary} />
          );
        })}
      <Myerror errorData={error} />
    </div>
  );
}
