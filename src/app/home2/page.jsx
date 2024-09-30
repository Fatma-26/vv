import Link from "next/link"
import Image from "next/image"
import Format2 from "../../../layout/format2";
export default function signIn(){
    return(
        <Format2>

        <div className="box">
            <div className="b1 i"> <Image src={"/GT_logo.png"} width={380} height={380} ></Image></div>       
            <div>
                <p>
                    Welcome to the Practice & Exams Platform 
                </p>
                <span>
                    Choose an option below to start practicing or taking exams. 
                </span>
                    
            </div>     
            <div className="b2">
            <Link href="/home2/practice">   <div><button  className="ss">Start practice</button></div> </Link> 
            <Link href="/home2/examLevel">    <div><button className="ee">Take an Exams</button></div> </Link> 
            </div>            

        </div>















        </Format2>)}