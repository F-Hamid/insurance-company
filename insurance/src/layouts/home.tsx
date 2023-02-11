import NavBar from "../components/Nav";
const Home = (): JSX.Element => {
  return (
    <section className="w-screen h-screen center flex-row">
      <NavBar />

      <div className="header"></div>
    </section>
  );
};

export default Home;
