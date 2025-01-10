const Body = () => {
  return (
    <div className="space-y-6 lg:flex">
      <div className="flex items-center justify-center lg:flex-1 lg:order-2 lg:justify-end ">
        <img src="./assets/Blue-Shape.svg" alt="1st" className=" -rotate-45 h-64 md:h-72 lg:h-[400px]" />
        <img src="./assets/Pink-Shape.svg" alt="1st" className="absolute  -rotate-[30deg]  h-64 md:h-72 lg:h-[400px]"/>
        <img src="./assets/Purple-Shape.svg" alt="1st"className="absolute -rotate-[15deg]  h-64 md:h-72 lg:h-[400px]" />
        <img src="./assets/Hero-Model.png" alt="1st"className="absolute  h-64 md:h-72 lg:h-[400px]" />
      </div>
      <div className="lg:flex-1 lg:order-1">
        <h1 className="text-5xl font-bold font-playfair leading-tight">Host your webiste in less than 5 minutes.</h1>
        <p className="font-lato text-gray-400">With Hoster,get your website up and rugging in no less tahn 5 minutes with the most competetive pricing packages avaibale online</p>
        <form action="" className="flex flex-col gap-4 md:flex-row">
          <input type="email" placeholder="Enter email address" className="rounded-md px-4 py-3 placeholder:text-gray-400" />
          <button className="rounded-md px-4 py-3 bg-blue-400 hover:bg-blue-600 text-white">Join Waitlist</button>
        </form>
        <div className="flex gap-2">
          <img src="./assets/Checkmark.svg" alt="check" className="py-2" />
          <p className="font-lato text-gray-400 py-2">No, spam ,ever . Unsubsrcibe anytime</p>
        </div>
      </div>
    </div>
  );
};

export default Body;
