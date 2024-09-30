import Link from "next/link"
import Image from "next/image"
import Format2 from "../../../layout/format2";
export default function contests(){
    return(
        <Format2>
                <p className="ecour">Account Details</p>
        <div className="dbox bb">
                <div> <p>Name :<span> fatma yahya mohamed</span></p> </div> 
                <div> <p>Email :<span>abcd123@gmail.com</span></p> </div> 
                <div>   <p> Age:<span>70</span></p> </div> 
                <div>   <p>phone :<span>0123456789</span></p> </div> 
                <div>   <p>City :<span>City : Ismailia</span></p> </div> 
                <div>   <p> Exams :<span>3</span></p> </div> 
               
                <div> <p>Subtype : <span>Gold</span></p> </div> 
                <div> <p>points : <span>30</span></p> </div> 
                <div> <p>Rank :<span>117/5000</span></p> </div> 
        </div>
       <div className="dbtn acbtn">
       <Link href={"../"}> <button > Log Out</button> </Link>
        </div>
       <div className="dbtn dd acbtn">
       <Link href={"../"}> <button >Delete Account</button> </Link>
       </div> 



        </Format2>)}
       