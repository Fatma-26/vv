import Link from "next/link"
import Image from "next/image"
import Format from "../../../layout/format";
export default function about(){
    return(
        <Format>
            <div className="about">
                <div className="r1">
                    <p>Elevate Your Skills,<br></br>
                    Empower Your Future</p>
                    <span>Master programming, discover your strengths, and gain real-world experience through internships. The best performers will be selected to join our team and elevate their careers.</span>
                </div>
                <div className="r2">
              
                <Image className="nn"
       

      src="/64e100abd99932dd7f929a90_Light%20Ppl%203%20(1).jpg" 
      alt="Light People"  
      width={950}         
      height={500}       
    />
                </div>
            </div>


        </Format>


        )}
