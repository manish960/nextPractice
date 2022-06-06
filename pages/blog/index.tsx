import React from "react";
import axios from "axios";
import Link from "next/link";

export const getStaticProps = async () => {
  let { data } = await axios.get(`https://jsonplaceholder.typicode.com/posts`);
  return {
    props: {
      data,
    },
  };
};

const blog = ({ data }: any) => {
  return (
    <>
      {data.slice(0, 10).map((element: any) => {
        return (
            <>
          <div key={element.id} style={{ textAlign: "center" }}>
            <h1 style={{ color: "green" }}>{element.id}</h1>
            <Link href={`/blog/${element.id}`}>
              <h3>
                <a style={{ cursor: "pointer" }}>{element.title}</a>
              </h3>
            </Link>
          </div>
          
          </>
        );
      })}
      <Link href="/blog1">
              <a
                style={{
                  color: "white",
                  padding: "10px",
                  background: "grey",
                  borderRadius: "3px",
                  textAlign: "center"
                }}
              >
                go to blog1
              </a>
            </Link>
    </>
  );
};

export default blog;
