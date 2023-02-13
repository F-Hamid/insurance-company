import { IconType } from "react-icons";

const Service: React.FC<{ icon: string }> = ({ icon }): JSX.Element => {
  return (
    <div className="service w-2/3 h-2/3 border-lightBlue hover:border-bkg border-2 p-1 cursor-pointer  ">
      {/* <GiCommercialAirplane className="service-icon text-bkg text-[6rem] " /> */}

      <i
        className={`${icon}  service-icon text-bkg text-[6rem] p-4 -mt-12 -ml-2 mb-10 bg-lightBlue `}
      ></i>
      <p className="service-text text-bkg font-sans text-2xl">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi fuga
        officiis repellendus eum quas debitis pariatur aperiam quo vero odit.
      </p>
    </div>
  );
};

export default Service;
