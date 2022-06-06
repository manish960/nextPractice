import '../styles/globals.css'
import type { AppProps } from 'next/app'
// add bootstrap css 
import 'bootstrap/dist/css/bootstrap.css'
// own css files here
// import "../css/customcss.css";
// import Document, { Html, Head, Main, NextScript } from 'next/document';


function MyApp({ Component, pageProps }: AppProps) {
  return (
  <>
  
  <Component {...pageProps} />
  </>)
}

export default MyApp
