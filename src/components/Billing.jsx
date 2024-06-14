import apple from '../assets/apple.svg'
import bill from '../assets/bill.png'
import google from '../assets/google.svg'
import layout from '../style.js'
import styles from '../style.js'

const Billing = () => {
  return (
   <section id="product" className="{layout.sectionReverse} flex ">




<div className="mt-5 flex flex-col w-[80%] ">
      <h2 className={styles.heading2}>Easily control your <br className="sm:block hidden "/> Billing and Invoicing </h2>
      <p className={`${styles.paragraph } max-w-[470px] text-gray-300 mt-5`}>

      Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime quo recusandae error velit soluta enim nostrum corporis mollitia facere rem laboriosam sequi excepturi ea fuga minus voluptate cupiditate laborum, incidunt numquam voluptates, facilis distinctio alias harum accusamus. In, quam itaque.




      </p>
      <div className="flex flex-row flex-wrap sm:mt-10 mt-6 ">
   <img src={apple} alt="apple_store" className="w-[128px] h-[42px] object-contain mr-5 cursor-pointer" />
   <img src={google} alt="apple_store" className="w-[128px] h-[42px] object-contain mr-5 cursor-pointer" />
   




      </div>



    </div>
    <div className=" ml-40">
   <img src={bill}  alt="billing" className="w-[90%] h-[90%] relative z-[5]" />
    <div className="absolute z-[3] -left-1/2 top-0  w-[50%] rounded-full white__gradient ">
    <div className="absolute z-[0] -left-1/2   bottom-0 w-[50%] h-[50%] rounded-full white__gradient ">

    </div>
    
    
    </div>

    </div>
    
  






   </section>
  )
}

export default Billing