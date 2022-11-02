import dStyle from "../styles/data.module.css";
import mainLogo from "../images/bwbuilding.jpg";
import secImg from "../images/lock.jpg";
import thirdImg from "../images/cars.jpg";

export const CaroImages = [
  {
    image: <img width="100%" height={450} src={mainLogo} alt="fireSpot" />,
    title:  (
        <div className={dStyle.titleBox}>
          
         <div className={dStyle.title}> BANKERS WAREHOUSE</div>
          <div className={dStyle.content}>
          <p>Was incorporated in 2002 </p>
            <p>and commenced operation </p>
            <p>in october 2007</p>
          </div>
          {/* <a href="#"  className={dStyle.button}>See More</a> */}
        </div>
      ),
  },
  {
    image: <img width="100%" height={450} src={secImg} alt="fireSpot" />,
    title: (
      <div className={dStyle.titleBox}>
        
        <div className={dStyle.title}> BANKERS WAREHOUSE</div>
          <div className={dStyle.content}>
            <p>Was incorporated in 2002 </p>
            <p>and commenced operation</p>
                
                <p> in october 2007</p>
          </div>
          {/* <div className={dStyle.button}>Button</div> */}
      </div>
    ),
  },
  {
    image: <img width="100%" height={450} src={thirdImg} alt="fireSpot" />,
    title:  (
        <div className={dStyle.titleBox}>
          
          <div className={dStyle.title}> BANKERS WAREHOUSE</div>
          <div className={dStyle.content}>
            <p>Has presence in 29 states in Nigeria,</p>
            <p>deploying a fleet of over</p>
            <p>200 Armoured Vechiles.</p>
          </div>
          {/* <div className={dStyle.button}>Button</div> */}
        </div>
      ),
  },
  
];
