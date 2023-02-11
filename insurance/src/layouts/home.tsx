import NavBar from "../components/Nav";



const Home = (): JSX.Element => {
  return (
    <section className="w-screen h-screen  flex-col relative">
      <NavBar />

      <div className="main center w-full h-full ">
        <div className="header w-1/2 h-full border-4">header</div>
        <div className="photo w-1/2 h-full">
          <img src="" alt="" />
        </div>
      </div>
    </section>
  );
};

export default Home;
