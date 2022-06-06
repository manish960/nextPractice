import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import NavBar from "../components/NavBar";
import Carousel from "../components/Carousels";
import { useState } from "react";
import About from "../components/About";


const Home: NextPage = () => {
  const [isShown, setIsShown] = useState(false);
  console.log(isShown);

  return (
    <>
      {/* <NavBar />
      <Carousel />
      <div style={{position:'absolute'}}>
        <button
          onMouseEnter={() => {
            setIsShown(true);
            console.log("enter");
          }}
          onMouseLeave={() => setIsShown(false)}
          style={{ position: "relative" }}
        >
          Hover over me!
        </button>
        <h1>hello world</h1>
        {isShown ? (
          <div
            style={{
              position: "absolute",
              padding: "5px",
              background: "lightgrey",
              left:0,
              bottom:0
            }}
          >
            I'll appear when you hover over the button.
          </div>
        ) : (
          ""
        )}
      </div> */}

      <About/>
    </>
  );
};

export default Home;
