import React from 'react';

const Home = () => {
  return (
    <div className="bg-primary  min-h-[calc(100vh-104px)] flex  justify-center items-center gap-5  ">
       <div
        className="lg:h-[400px] xs:min-h-[calc(80vh-134px)]   lg:w-[43%] flex flex-col xs:justify-between xs:items-center  lg:justify-center gap-10 lg:pl-19  "
       
      >
       <div className=' xs:w-[80%]   '>
       <p className='text-white'>Hi all. I am</p>
       <h2 className='text-6xl font-bold text-white'>Ankeet Kumar Sah</h2>
       <h3 className='text-2xl font-semibold text-[#4D5BCE]'> Front-end developer</h3>
       </div>

       <div className='xs:w-[80%]  '>
      <p> // complete the game to continue</p>
       <p>// you can also see it on my Github page</p>
       <p>const githubLink = “https://github.com/example/url”</p>
       </div>


      </div>
      {/* -------------------------------------------------- */}
       <div
        className="h-full xs:hidden w-[40%] lg:flex  justify-center items-center"
      av 
      >
        <img className="h-[440px]" src="/assests/images/me.png" alt="Profile" />
      </div>
     </div>
  );
};

export default Home;
