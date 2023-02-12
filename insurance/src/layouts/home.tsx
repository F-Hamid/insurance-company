import NavBar from "../components/Nav";
import blob from "../images/blob.png";
import lady from "../images/lady.png";

const Home = (): JSX.Element => {
  return (
    <section className="w-screen h-screen flex-col relative">
      <NavBar />

      <div className="main center w-full h-full   ">
        <div className="header mt-28 px-3 w-1/2 h-full flex justify-center items-start flex-col text-start p-24 ">
          <h1 className="title w-2/3 mb-12 text-7xl text-text font-serif">
            Insure Your Happiness with a Smile
          </h1>
          <p className="description text-text text-3xl w-2/3 font-sans">
            Empower You with Trust and Peace of Mind with Us, Together, we
            protect what matters most to you, so you can enjoy life's little
            moments without worry.
          </p>
          <button
            type="button"
            className="bg-secondary text-3xl text-text rounded-md p-4 px-8 mt-24 transition duration-500 ease select-none hover:bg-cta focus:outline-none focus:shadow-outline"
          >
            Discover
          </button>
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
          <div className="leftBar absolute top-6 -right-72 -z-10  w-9 h-[120rem] bg-primary  rotate-45 origin-top"></div>
        </div>
        <div className="leftBar absolute -top-24 -z-10 left-16 w-9 h-[32rem] bg-primary rotate-45"></div>
      </div>
    </section>
  );
};

export default Home;
