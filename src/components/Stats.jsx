import React from "react";
import style from "../style";
import { stats } from "../constants/index";

const Stats = () => {
  return (
    <section className={`${style.flexCenter} flex-row flex-wrap sm:mb-20 mb-6`}>
      {stats.map((stat) => (
        <div key={stat.id} className={`flex-1 flex flex-row flex-wrap sm:mb-20 mb-2`}>
          <h4 className="font-poppins font-semibold xs:text-[40px] text-[30px] xs:leading-[53px] leading-[43px] text-white">
            {stat.value}
          </h4>
          <p className="font-poppins font-normal xs:text-[20px] text-[15px] xs:leading-[26px] leading-[21px] bg-clip-text text-transparent bg-gradient-to-r from-gradient-start to-gradient-end uppercase ml-3 mt-4 text-white
          
          ">
            {stat.title}
          </p>
        </div>
      ))}
    </section>
  );
};

export default Stats;
