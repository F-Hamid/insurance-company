import { IconType } from "react-icons";

const Service: React.FC<{ icon: string }> = ({ icon }): JSX.Element => {
  return (
    <div className="service w-2/3  border-lightBlue hover:border-bkg border-2 p-2 cursor-pointer  ">
      {/* <GiCommercialAirplane className="service-icon text-bkg text-[6rem] " /> */}

      <i
        className={`${icon}  service-icon text-bkg text-[5rem] p-4 -mt-24 -ml-2  `}
      ></i>
      <p className="service-text text-bkg font-perso text-2xl m-4 mx-8">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi fuga
        officiis repellendus eum quas debitis pariatur aperiam quo vero odit.
      </p>
    </div>
  );
};

export default Service;
