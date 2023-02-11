import NavBar from "../components/Nav";
import blob from "../images/blob.png";
import lady from "../images/lady.png";

const Home = (): JSX.Element => {
  return (
    <section className="w-screen h-screen  flex-col relative">
      <NavBar />

      <div className="main center w-full h-full   ">
        <div className="header w-1/2 h-full flex justify-center items-start flex-col text-start p-24 pb-72">
          <h1 className="title mb-12 text-7xl font-serif">
            Insure Your Happiness with a Smile
          </h1>
          <p className="description text-3xl w-3/4 font-sans">
            Empower You with Trust and Peace of Mind with Us, Together, we
            protect what matters most to you, so you can enjoy life's little
            moments without worry.
          </p>
        </div>
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
