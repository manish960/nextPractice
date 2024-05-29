import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import NavBar from "../components/NavBar";
import Carousel from "../components/Carousels";
import { useState } from "react";
import About from "../components/About";
import Link from "next/link";


const Home: NextPage = () => {
  const [isShown, setIsShown] = useState(false);
  // console.log(isShown);

  return (<div style={{display:'flex',gap:6,justifyContent:'space-between',flexDirection:'column'}}>hello im home

    <Link href={'/blog'}>blog</Link>
    <Link href={'/blog1'}>blog1</Link>
    <Link href={'/about'}>about</Link>
    <Link href={'/contact'}>contact</Link>
  </div>);
};

export default Home;
