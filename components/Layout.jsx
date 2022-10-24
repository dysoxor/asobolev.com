import React from "react";
import Head from "next/head";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <div>
      <Head>
        <title>asobolev</title>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Nunito:wght@500&display=swap" rel="stylesheet"/>
      </Head>
      <header>
        <Navbar />
      </header>
      <main>{children}</main>
    </div>
  );
};

export default Layout;