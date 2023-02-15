import WhyUs from "../components/WhyUs";

const About = () => {
  return (
    <section className="about bg-bkg w-screen h-screen center flex-col justify-center">
      <WhyUs />
      <div className="main w-full h-full p-24 ">
        <div className="photos"></div>
        <div className="text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum id
          nesciunt, est cumque, tempore ex eveniet voluptate, ab nulla
          consectetur voluptatum aspernatur. Sint modi eveniet similique earum
          ut aperiam quos illo, expedita incidunt nobis exercitationem.
        </div>
      </div>
    </section>
  );
};

export default About;
