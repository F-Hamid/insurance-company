import logo from "../images/logo.png";

const Nav = (): JSX.Element => {
  return (
    <div className="navbar w-full  absolute left-0 top-0 p-2  mx-0 flex justify-between">
      <ul className="item-container center justify-start ml-16 ">
        <li className="navItem mx-6 cursor-pointer text-xl font-semibold hover:bg-secondary py-3 px-4 rounded-md ease-in-out duration-500 ">
          Item
        </li>
        <li className="navItem mx-6 cursor-pointer text-xl font-semibold  hover:bg-secondary py-3 px-4  rounded-md ease-in-out duration-500 ">
          Item
        </li>
        <li className="navItem mx-6 cursor-pointer text-xl font-semibold  hover:bg-secondary py-3 px-4  rounded-md ease-in-out duration-500 ">
          Item
        </li>
        <li className="navItem mx-6 cursor-pointer text-xl font-semibold  hover:bg-secondary py-3 px-4  rounded-md ease-in-out duration-500 ">
          Item
        </li>
        <li className="navItem mx-6 cursor-pointer text-xl font-semibold  hover:bg-secondary py-3 px-4 rounded-md ease-in-out duration-500 ">
          Item
        </li>
      </ul>
      <img src={logo} className="logo w-20 h-20 mr-4" alt="company logo" />
    </div>
  );
};

export default Nav;
