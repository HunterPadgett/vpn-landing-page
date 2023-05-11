import "./contact.css";

export default function Contact() {
  return (
    <div className="container max-w-5xl grid grid-cols-1 mx-auto md:grid-cols-2 md:gap-20  md:my-20  divide-gray-400">
      <div className="flex flex-col items-center md:items-start md:mr-10 px-10 py-5 md:p-10">
        <img src="/chat.avif" alt="text bubble" className="h-36 mb-8" />
        <h3 className="text-2xl text-center md:text-start md:text-3xl font-semibold pb-5">
          Live, 24-hour customer support
        </h3>
        <p className="tracking-wider text-center md:text-start font-light pb-7">
          Real support from real people. We’re available through instant live
          chat and email to help you set up and troubleshoot.
        </p>
        <button className="pl-2 flex font-semibold items-center justify-center mx-auto md:m-0 text-lg transition-all py-4 rounded-full bg-color text-color border-2 border-color h-12 md:h-14 w-72 md:w-56">
          Contact Support
        </button>
      </div>
      <div className="flex flex-col items-center md:items-start md:pl-10 px-10 py-5 md:p-10">
        <img src="/30.avif" alt="number chart" className="h-36 mb-8" />
        <h3 className="text-2xl text-center md:text-start md:text-3xl font-semibold pb-5">
          30-day money-back guarantee
        </h3>
        <p className="tracking-wider text-center md:text-start font-light pb-7">
          Our VPN is easy to use. So is our guarantee. If you’re not satisfied,
          we’ll refund your payment. No hassle, no risk.
        </p>
        <button className="pl-2 hidden md:flex font-semibold items-center justify-center mx-auto md:m-0 text-lg transition-all py-4 rounded-full  btncolor h-14 w-56 text-white">
          Get ExpressVPN
        </button>
      </div>
      
    </div>
  );
}
