import NavBar from "../components/Nav";
import blob from "../images/blob.png";

const Home = (): JSX.Element => {
  return (
    <section className="w-screen h-screen  flex-col relative">
      <NavBar />

      <div className="main center w-full h-full  ">
        <div className="header w-1/2 h-full git">header</div>
        <div className="photo w-1/2 h-full relative">
          <img className="w-[38rem]  absolute top-56 left-56" src={blob} alt="blob" />
        </div>
      </div>
    </section>
  );
};

export default Home;
