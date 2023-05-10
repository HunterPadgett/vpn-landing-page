// import React from 'react'
import "./hero.css";

export default function Hero() {
  return (
    <div className="heroBg w-screen">
      <main className="heroBg   flex flex-wrap justify-between px-5 md:grid-cols-2 mx-auto pt-16 pb-5 lg:pb-16 lg:pt-20">
        {/* hero text area */}
        <div className="heroBg flex flex-col px-5 lg:pl-20 xl:pl-72 widepad w-full md:w-3/5">
          <h1 className="heroBg pt-1 pr-5 text-4xl text-center md:text-start md:pb-4 md:text-7xl lg:text-8xl font-semibold tracking-wider">
            <br />
            The VPN that just works
          </h1>
          <span className="heroBg py-6 md:py-5 text-center md:text-start text-sm font-semibold">
            Exclusive offer: Get 3 extra months FREE
          </span>
          <button className="font-semibold flex items-center justify-center mx-auto md:m-0 text-base transition-all py-4 rounded-full btncolor h-12 w-80 md:w-72 text-white">
            Start Your Risk-Free Trial -&gt;
          </button>
          <span className="heroBg text-center md:text-start py-5 md:pl-10 text-xs">
            30-DAY MONEY-BACK GUARANTEE
          </span>
        </div>
        {/* hero img area */}
        <div className="heroBg  flex items-center justify-center w-full md:w-2/5">
          <img
            src="/hero.avif"
            alt="man on computer"
            className="heroBg hidden md:flex md:h-auto md:pt-10 md:pl-3  xl:p-3 lg:h-auto "
          />
          <img
            src="/hero-mobile.avif"
            alt="man on computer"
            className="heroBg  visible md:hidden"
          />
        </div>
      </main>
    </div>
  );
}
