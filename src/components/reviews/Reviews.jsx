import "./reviews.css";

export default function Reviews() {
  return (
    <div className="  reviews pt-20 md:pt-24">
      <div className="max-w-xs md:max-w-lg  mx-auto pb-16 reviews">
        <h2 className="reviews text-center  font-semibold w-full text-3xl md:text-5xl ">
          What people are saying about ExpressVPN
        </h2>
      </div>
      <div className="reviews mx-auto ">
        <div className="flex reviews mx-auto justify-center cursor-pointer ">
          <p className="reviews text-center text-gray-500 mx-3 font-semibold text-xs md:text-sm tracking-widest">
            REVIEWS
          </p>
          <p className="reviews text-center text-gray-500 mx-3 font-semibold text-xs md:text-sm tracking-widest">
            TWEETS
          </p>
          <p className="reviews text-center mx-3 font-semibold text-xs md:text-sm tracking-widest ">
            MEDIA QUOTES
          </p>
        </div>
        <hr className="h-px mt-2 mb-20 bg-black border-0 dark:bg-gray-700" />
        <div className="px-5 md:p-0 reviews">
          <img
            src="/reviews.png"
            alt="reviews"
            className="mx-auto pb-20 reviews"
          />
          <img
            src="/companies.png"
            alt="companies"
            className="hidden md:block mx-auto pb-20 reviews"
          />
          <img
            src="/comMobile.png"
            alt="companies"
            className="md:hidden mx-auto pb-20 reviews"
          />
        </div>
      </div>
    </div>
  );
}
