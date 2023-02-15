import NavBar from "../components/Nav";
import blob from "../images/blob.png";
import lady from "../images/lady.png";
import logo from "../images/logo.png";
import heartBeat from "../images/hreat-beat.png";

const Home = (): JSX.Element => {
  return (
    <section className="w-screen h-screen flex-col relative overflow-hidden ">
      <div className="main center w-full h-full   ">
        <div className="header  mt-8  w-1/2 h-full flex justify-center items-start flex-col text-start p-4 pl-36 relative ">
          <h1 className="title w-4/5 mb-16   ml-24 text-7xl text-text font-perso">
            Insure Your Happiness with a Smile
          </h1>
          <p className="description text-text text-3xl w-4/5 ml-24 font-sans">
            Empower You with Trust and Peace of Mind with Us, Together, we
            protect what matters most to you, so you can enjoy life's little
            moments without worry.
          </p>

          <div className="centerBar absolute opacity-50 -top-36 right-16 -z-10  w-9 h-[120rem] bg-primary  rotate-45 origin-top"></div>
          <img
            src={heartBeat}
            className="w-2/4 -bottom-8 -right-64 absolute -rotate-45 animate-pulse"
            alt="heartBeat"
          />
          <button
            type="button"
            className="bg-secondary text-3xl text-text rounded-md p-4 px-8 ml-24 mt-16 translate-y-20 transition duration-500 ease select-none hover:bg-cta focus:outline-none focus:shadow-outline"
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
          <div className="rightBar absolute top-6 -right-72 -z-10  w-9 h-[120rem] bg-primary  rotate-45 origin-top"></div>
        </div>

        <div className="leftBar absolute -top-24 -z-10 left-16 w-9 h-[32rem] bg-cta  rotate-45"></div>
      </div>
      <img
        src={logo}
        className="logo w-36 absolute  top-4 right-12 cursor-pointer "
        alt="company logo"
      />
    </section>
  );
};

export default Home;
