import React from "react";
import styles from "../style";
import Button from "./Button";
import './CTA.css'



const CTA = () => {
  return (
    <section
      className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-glass rounded-[20px] box-shadow transition-all duration-300 hover:shadow-xl`}
    >
      <div className="flex-1 flex flex-col">
        <h2 className={`${styles.heading2}`}>Let's try our service now!</h2>
        <p className={`${styles.paragraph} max-w-[470px] text-gray-300 mt-5`}>
          Everything you need to accept card payments and grow your business
          anywhere on the planet.
        </p>
      </div>
      <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
        <Button styles="mt-10" />
      </div>
    </section>
  );
};

export default CTA;
