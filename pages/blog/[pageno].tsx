import axios from "axios";
import Link from "next/link";
import { useState } from "react";
export const getStaticPaths = async () => {
  let { data } = await axios.get(`https://jsonplaceholder.typicode.com/posts`);

  let paths = data.map((element: any) => {
    return {
      params: {
        pageno: element.id.toString(),
      },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context: any) => {
  const id = context.params.pageno;

  let { data } = await axios.get(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );
  return {
    props: {
      data,
    },
  };
};

const BlogRecord = ({ data }: any) => {
  const [loading,setLoading] = useState(true);
  return (
    <>
      <div style={{ textAlign: "center" }}>
        <h1 style={{ color: "purple" }}>{data.id}</h1>
        <h3>{data.title}</h3>
        <p>{data.body}</p>
        <Link href="/blog">
          <a style={{ color: "white", padding: "10px", background:'green' , borderRadius:'3px'}}>back to blog</a>
        </Link>
      </div>
    </>
  );
};

export default BlogRecord;
