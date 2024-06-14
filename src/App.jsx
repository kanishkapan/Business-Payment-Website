
import styles from "./style";
import Navbar from "./components/Navbar";
import Billing from "./components/Billing";
import Business from "./components/Business";
import CardDeal from "./components/CardDeal";
import Clients from "./components/Clients";
import CTA from "./components/CTA";
import Feedback from "./components/FeedbackCard";
import Footer from "./components/Footer";
import GetStarted from "./components/GetStarted";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Testimonials from "./components/Testimonials";




function App() {


  return (
    <div className=" bg-black w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          
          
          <Navbar/>
         
     
          
          </div>
      </div>
      <div className={` bg-black ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          
        <Hero/>
      
          
          </div>
      </div>
      <div className={` bg-black ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          
      <Stats/>
      <Business/>
          
      <Billing/>
      <CardDeal/>
      <Testimonials/>
      <Clients/>
      <CTA/>
      <Footer/>



        </div>
      </div>
    </div>
  );
}

export default App;
