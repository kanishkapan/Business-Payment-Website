import discount from '../assets/Discount.svg';
import robot from '../assets/robot.png';
import GetStarted from './GetStarted';

const Hero = () => {
  return (
    <section id="home" className="flex md:flex-row flex-col py-16 px-6 md:p-0">
      <div className="flex-1 md:px-0 sm:px-16 px-6 flex flex-col justify-center">
        <div className="flex items-center py-2 px-4 bg-gradient-to-r from-pink-500 to-red-500 rounded-lg mb-2">
          <img src={discount} alt="discount" className="w-8 h-8" />
          <p className="text-white ml-2">
            <span className="font-semibold">20%</span> Discount For{" "}
            <span className="font-semibold">1 Month</span> Account
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
          <h1 className="font-poppins font-semibold text-4xl md:text-6xl text-white leading-tight mb-6">
            The Next <br className="sm:hidden" /> Generation
          </h1>
          <div className="md:ml-4 mb-6">
            <GetStarted />
          </div>
        </div>

        <h2 className="font-poppins font-semibold text-4xl md:text-6xl text-white leading-tight mb-6">
          Payment Method.
        </h2>
        <p className="text-gray-400 max-w-prose mb-8">
          Our team of experts uses a methodology to identify the credit cards
          most likely to fit your needs. We examine annual percentage rates,
          annual fees.
        </p>
      </div>

      <div className="hidden md:flex md:flex-1 justify-center items-center relative">
        <img src={robot} alt="billing" className="w-full h-full object-cover z-10 rounded-lg" />

        {/* Gradient overlays */}
        <div className="absolute z-0 w-40% h-40% top-0 left-0 bg-pink-500 rounded-lg" />
        <div className="absolute z-0 w-80% h-80% bottom-20 left-1/2 transform -translate-x-1/2 bg-white rounded-full" />
        <div className="absolute z-0 w-50% h-50% bottom-0 right-0 bg-blue-500 rounded-lg" />
      </div>

      <div className="md:hidden flex justify-center mt-10">
        <GetStarted />
      </div>
    </section>
  );
};

export default Hero;
