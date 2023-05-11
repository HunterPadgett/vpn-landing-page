import "./main.css";

export default function Main() {
  return (
    <div>
      <h2 className="text-4xl md:text-5xl text-center pt-16 md:pb-3 font-semibold">
        Why ExpressVPN?
      </h2>
      {/* 1st section */}
      <section className="container mx-auto mb-10 md:mb-20 max-w-5xl p-3 grid grid-cols-1 md:grid-cols-2 md:gap-24">
        <div className="flex items-center justify-center">
          <img src="/devices.avif" alt="devices" className="h-80 md:h-96" />
        </div>
        <div className="flex flex-col items-center md:items-start md:justify-start">
          <h3 className="text-2xl font-semibold pl-2 pb-5">
            Use on every device
          </h3>
          <p className="pl-2 pb-5 text-center md:text-start overflow-ellipsis">
            ExpressVPN works with just about everything. Install the app on all
            your devices and enjoy up to five simultaneous connections with one
            subscription.
          </p>
          <img
            src="/vpnApps.png"
            alt="app logos"
            className="pb-5 cursor-pointer"
          />
          <a
            className="pl-2 pb-10"
            href="http://"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="border-b-2 border-color pb-1 hover:text-black">
              See all apps &gt;
            </span>
          </a>
          <button className="pl-2 hidden md:flex font-semibold items-center justify-center mx-auto md:m-0 text-lg transition-all py-4 rounded-full btncolor h-14 w-56 text-white">
            Get ExpressVPN
          </button>
        </div>
      </section>
      {/* 2nd section */}
      <section className="container mx-auto mb-10 md:mb-20  max-w-5xl p-3 grid grid-cols-1 md:grid-cols-2 md:gap-24">
        <div className="flex flex-col items-center md:items-start md:justify-start">
          <h3 className="text-2xl font-semibold pl-2 pb-10">
            Ultra-fast global access
          </h3>
          <p className="pl-2 pb-10 text-center md:text-start">
            Our network of high-speed servers puts you in control. Appear to be
            in any of 94 countries worldwide and enjoy online freedom anywhere.
          </p>

          <a
            className="pl-2 pb-10"
            href="http://"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="border-b-2 border-color pb-1 hover:text-black">
              See all 94 countries &gt;
            </span>
          </a>
        </div>
        <div className="flex items-center justify-center order-first md:order-last pb-12 md:pb-0">
          <img src="/globe.avif" alt="devices" className=" h-40 md:h-48" />
        </div>
      </section>
      {/* 3rd section */}
      <section className="container mx-auto mb-10 md:mb-20 max-w-5xl p-3 grid grid-cols-1 md:grid-cols-2 md:gap-24">
        <div className="flex items-center justify-center">
          <img src="/lamp.avif" alt="lamp" className="h-80 md:h-96" />
        </div>
        <div className="flex flex-col items-center md:items-start md:justify-start pt-14">
          <h3 className="text-2xl font-semibold pl-2 pb-10">
            Instant online protection
          </h3>
          <p className="pl-2 pb-10 text-center md:text-start">
            Take charge of your digital security in one click. ExpressVPN’s
            best-in-class encryption keeps you safe and private on any network.
          </p>

          <button className="pl-2 hidden md:flex font-semibold items-center justify-center mx-auto md:m-0 text-lg transition-all py-4 rounded-full btncolor h-14 w-56 text-white">
            Get ExpressVPN
          </button>
        </div>
      </section>
    </div>
  );
}
