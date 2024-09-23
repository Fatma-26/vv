import Link from "next/link"
import Image from "next/image"
import Format2 from "../../../layout/format2";
export default function contests(){
    return(
        <Format2>
                <p className="ecour">Account Details</p>
        <div className="dbox bb">
                <div> <p>Name :</p> </div> 
                <div> <p>Email :</p> </div> 
                <div>   <p>Age:</p> </div> 
                <div>   <p>phone :</p> </div> 
                <div>   <p>City :</p> </div> 
                <div>   <p>Exams :</p> </div> 
               
                <div> <p>Subtype :</p> </div> 
                <div> <p>points :</p> </div> 
                <div> <p>Rank :</p> </div> 
        </div>
       <div className="dbtn"><button >Log Out</button></div>
       <div className="dbtn"><button >Delete Account</button>
       </div> 



        </Format2>)}