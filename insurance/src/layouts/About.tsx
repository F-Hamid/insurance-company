import WhyUs from "../components/WhyUs";
import about1 from "../images/about1.jpg";
import about2 from "../images/about2.jpg";
import about4 from "../images/about4.jpg";

const About = () => {
  return (
    <section className="about bg-bkg w-screen h-screen center flex-col justify-center relative">
      <div className="rightBar absolute top-6 -right-72  w-9 h-[110rem] bg-primary  rotate-45 origin-top "></div>
      <WhyUs />
      <div className="main w-full h-full relative p-24 flex flex-row ">
        <div className="photos relative w-2/3 ">
          <img
            src={about1}
            className="w-[24rem] absolute -top-10 left-2"
            alt="smiling girl"
          />
          <img
            src={about4}
            className="w-[20rem] h-2/3 absolute -bottom-24 left-36"
            alt="worker"
          />
          <img
            src={about2}
            className="w-[32rem] absolute top-6 right-20"
            alt="cocking girl"
          />
        </div>
        <div className="text w-4/5 my-10 ">
          <p className="w-3/4 text-2xl leading-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum id
            nesciunt, est cumque, tempore ex eveniet voluptate, ab nulla
            consectetur voluptatum aspernatur. Sint modi eveniet similique earum
            ut aperiam quos illo, expedita incidunt nobis exercitationem. Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Rerum id
            nesciunt, est cumque, tempore ex eveniet voluptate, ab nulla
            consectetur voluptatum aspernatur. Sint modi eveniet similique earum
            ut aperiam quos illo, expedita incidunt nobis exercitationem.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
