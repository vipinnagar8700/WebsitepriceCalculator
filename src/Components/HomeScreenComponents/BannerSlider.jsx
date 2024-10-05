import React from 'react';

function BannerSlider() {
  return (
    <div className="w-full bg-secondary py-8 font-montserrat">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left Content Section */}
        <div className="flex flex-col justify-center p-6 space-y-4">
          <h1 className="text-[30px] font-light text-primary">Website cost calculator</h1>
          <p className="text-lg text-gray-600">
          The website cost calculator app helps you estimate the different costs associated with a website, including: website design, website content, and website functionality.
          </p>
          <div className="flex space-x-4">
            <button className="px-6 py-2 border border-primary text-white hover:bg-primary bg-primary" >Get Started</button>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="flex justify-center items-center">
          <img 
            src="https://nlet.in/assets/front/nlet_images/dv-right.webp" 
            alt="Banner Image" 
            className=""
          />
        </div>
      </div>
    </div>
  );
}

export default BannerSlider;
