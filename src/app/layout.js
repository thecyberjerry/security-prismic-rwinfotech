"use client";
import "./sass/all.scss";
import Footer from "./components/Footer";
import { store } from "./store/store";
import { Provider } from "react-redux";
import { createClient } from "@/prismicio";
import { useEffect, useState } from "react";

export default function RootLayout({ children }) {
  const [footerdata, setfooterdata] = useState("");

  useEffect(() => {
    const somefunction = async () => {
      const client = createClient();
      const footer = await client.getSingle("footer");
      setfooterdata(footer.data);
    };
    somefunction();
  }, []);

  return (
    <html lang="en">
      <body>
        <Provider store={store}>
          {children}
          <Footer footerdata={footerdata && footerdata} />
        </Provider>
      </body>
    </html>
  );
}
