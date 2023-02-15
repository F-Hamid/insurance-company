const WhyUs = () => {
  return (
    <div className="heading text-center w-1/3  m-4 p-24 ">
      <h2 className="header  font-perso font-bold text-4xl m-6 mb-12">
        WHY US?
      </h2>
      <div className="options flex justify-between  p-4">
        <p className="option w-1/3 text-lg font-semibold -ml-[20%]">
          Lorem ipsum dolor sit amet consectetur.
        </p>
        <p className="option w-1/3 text-lg font-semibold ">
          Lorem ipsum dolor sit amet consectetur.
        </p>
        <p className="option w-1/3 text-lg font-semibold -mr-[20%]">
          Lorem ipsum dolor sit amet consectetur.
        </p>
      </div>
      <div className="points-line flex w-full center my-4">
        <div className="points w-full relative">
          <div className="line w-full h-2 bg-gray "></div>
          <div className="point w-4 h-4 bg-secondary rounded-full absolute left-0 -mt-3"></div>
          <div className="point w-4 h-4 bg-secondary rounded-full absolute left-[50%] -mt-3"></div>
          <div className="point w-4 h-4 bg-secondary rounded-full absolute right-0 -mt-3"></div>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
