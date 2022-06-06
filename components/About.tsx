import { AboutWrapper } from "./about.styled";
import Image from "next/image";

const About = () => {
  return (
    <>
      <AboutWrapper>
        <h1>hello</h1>
        <p id="demo">display</p>
        <p className="text-primary">hello</p>
        <div className="card" style={{ width: "18rem" }}>
          <Image
            src="/nature1.jpg"
            className="card-img-top"
            alt="..."
            height={150}
            width={100}
          />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      </AboutWrapper>
    </>
  );
};

export default About;
