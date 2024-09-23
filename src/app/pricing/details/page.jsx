import Link from "next/link"
import Image from "next/image"
import Format from "../../../../layout/format";
export default function signIn(){
    return(
        <Format>

       <p className="ecour">Payment details</p>
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
       <div className="dbtn"><button >Proceed with the Payment</button>
       </div> 








        </Format>)}