import NavBar from "../components/Nav";
import blob from "../images/blob.png";
import lady from "../images/lady.png";

const Home = (): JSX.Element => {
  return (
    <section className="w-screen h-screen  flex-col relative">
      <NavBar />

      <div className="main center w-full h-full  ">
        <div className="header w-1/2 h-full ">header</div>
        <div className="photo w-1/2 h-full relative ">
          <img
            className="w-[52rem]  absolute top-56 left-36"
            src={blob}
            alt="blob"
          />
          <img
            className="w-full absolute -bottom-36 left-24"
            src={lady}
            alt="lady"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
