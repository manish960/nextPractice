import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import LoadingOverlay from 'react-loading-overlay';

const Data = () => {
  const router = useRouter();
  const { pageno } = router.query;
  // console.log(pageno);
  // console.log(router.query);
  const [dta, setDta]: any = useState();
  const [loading,setLoading] = useState(true);

  const getdata = async (pageno: any) => {
    let { data } = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${pageno}`
    );
    setDta(data);
    console.log(data);
    setLoading(false)
  };
  useEffect(() => {
    getdata(pageno);
  }, [pageno]);

  return (
    <>
      {dta ? (
        <>
          <div style={{ textAlign: "center" }}>
            <h1>{dta.id}</h1>
            <h3>{dta.title}</h3>
            <p>{dta.body}</p>
            <Link href="/blog1">
              <a>back to blog 1</a>
            </Link>
          </div>
        </>
      ) : (
        "loading...."
      )}
    </>
  );
};

export default Data;
