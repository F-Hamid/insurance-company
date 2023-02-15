import {
  GrHomeOption,
  GrServices,
  GrCircleQuestion,
  GrContact,
} from "react-icons/gr";

const Nav = (): JSX.Element => {
  return (
    <div className="navbar h-full  fixed left-0 top-0 p-2  bg-secondary z-50">
      <ul className="item-container h-full  text-2xl font-bold flex-col ">
        <li className="navItem flex justify-start items-center  ">
          <GrHomeOption className="text-5xl mr-2" />
          <h3 className="nav-title mx-2 text-3xl ">Home</h3>
        </li>

        <li className="navItem flex justify-start  items-center ">
          <GrServices className="text-5xl mr-2" />
          <h3 className="nav-title mx-2 text-3xl">Services</h3>
        </li>

        <li className="navItem flex justify-start  items-center   ">
          <GrCircleQuestion className="text-5xl mr-2" />
          <h3 className="nav-title mx-2 text-3xl">About</h3>
        </li>

        <li className="navItem flex justify-start  items-center   ">
          <GrContact className="text-5xl mr-2" />
          <h3 className="nav-title mx-2 text-3xl">Contact Us</h3>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
