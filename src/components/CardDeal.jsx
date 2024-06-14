import React from 'react';
import card from '../assets/card.png';
import styles from '../style';
import layout from '../style';
import Button from './Button';

const CardDeal = () => {
  return (
    <section className={`${layout.section} flex flex-col md:flex-row mt-12 items-center`}>
      <div className="flex-1 flex justify-center items-center md:mr-10">
        <img src={card} alt="card" className='w-[80%] h-[80%] md:w-[100%] md:h-[100%] mt-4 md:mt-0' />
        {/* Adjust mt-4 (or any other value) for the margin top */}
      </div>
      
      <div className="flex-1 mt-10 md:mt-0">
        <h2 className={styles.heading2}>
          Find a better card deal <br className='sm:block hidden' /> in few easy steps
        </h2>
        <p className={`${styles.paragraph} text-gray-300 max-w-[470px] mt-5`}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Error nihil expedita officia blanditiis numquam, magnam sint rem dicta dignissimos obcaecati aut necessitatibus accusamus voluptate eos minima dolores deleniti quibusdam quas atque excepturi facilis ipsum.
        </p>
        <Button styles="mt-10" />
      </div>
    </section>
  );
}

export default CardDeal;
