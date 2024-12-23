import styles from "../style";
import { FaArrowTrendUp } from "react-icons/fa6";


const GetStarted = () => (
  <div className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer`}>
    <div className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full`}>
      <div className={`${styles.flexStart} flex-row`}>
        <p className="font-poppins font-medium text-[18px] leading-[23.4px]">
          <span className="text-gradient-blue">Get</span>
        </p>
          <FaArrowTrendUp />
      
      </div>
      
      <p className="font-poppins font-medium text-[18px] leading-[23.4px]">
        <span className="text-gradient-blue">Started</span>
      </p>
    </div>
  </div>
);

export default GetStarted;