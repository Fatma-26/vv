import Link from "next/link"
import Image from "next/image"
import Format from "../../../../layout/format";
export default function signIn(){
    return(
        <Format>

       <p className="ti">Payment details</p>
        <div className="dbox">
                <div> <p>Name :</p> </div> 
                <div> <p>Email :</p> </div> 
                <div>   <p>phone :</p> </div> 
                <div className="sub">
                    <p>Subtype :</p>
                     <button className="chbtn">change</button>
                </div> 
                <div> <p>prics :</p> </div> 
        </div>
       <div className="rr"><button >Submit{/* Proceed with the Payment */}</button>
       </div> 








        </Format>)}
