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
      src="/64e100abd99932dd7f929a90_Light Ppl 3.webp" 
      alt="Light People"  // النص البديل للصورة
      width={950}         // عدّل العرض بناءً على أبعاد الصورة
      height={500}        // عدّل الارتفاع بناءً على أبعاد الصورة
    />
                </div>
            </div>


        </Format>


        )}