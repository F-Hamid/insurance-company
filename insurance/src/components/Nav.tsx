import logo from "../images/logo.png";

const Nav = (): JSX.Element => {
  return (
    <div className="navbar w-full  absolute left-0 top-0 py-8  pl-28 flex items-center justify-between">
      <ul className="item-container h-2/3 flex text-2xl font-bold  justify-start ml-16 ">
        <li className="navItem  ">Item</li>
        <li className="navItem  ">Item</li>
        <li className="navItem  ">Item</li>
        <li className="navItem  ">Item</li>
        <li className="navItem  ">Item</li>
      </ul>
      <img
        src={logo}
        className="logo w-36 absolute  top-4 right-12 "
        alt="company logo"
      />
    </div>
  );
};

export default Nav;
