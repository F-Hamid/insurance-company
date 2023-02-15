import { GiCommercialAirplane } from "react-icons/gi";
import Service from "../components/Service";

const Services = (): JSX.Element => {
  return (
    <section className="services w-full relative  p-16 pt-32 bg-primary center parallax">
      <div className="services-main w-full h-full p-12 grid grid-cols-2 gap-20 place-items-center ">
        <div className="service w-2/3 h-2/3 center p-1  ">
          <p className="service-text text-bkg font-sans text-2xl pr-28">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi fuga
            officiis repellendus eum quas debitis pariatur aperiam quo vero
            odit.
          </p>
        </div>
        <Service icon="fa-solid fa-plane-circle-check rotate-45" />
        <Service icon="fa-solid fa-business-time" />
        <Service icon="fa-sharp fa-solid fa-igloo" />
        <Service icon="fa-solid fa-people-roof" />
        <Service icon="fa-solid fa-heart-pulse" />
        {/* <div className="service w-2/3 h-2/3 border-bkg border-2 p-2 ">
          <GiCommercialAirplane className="service-icon text-bkg text-[6rem] " />
          <p className="service-text text-bkg font-sans text-2xl">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi fuga
            officiis repellendus eum quas debitis pariatur aperiam quo vero
            odit.
          </p>
        </div> */}
      </div>
    </section>
  );
};

export default Services;
