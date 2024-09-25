import Link from "next/link"
import Image from "next/image"
import Format from "../../../layout/format";
export default function signIn(){
    return(
        <Format>
            <div className="orectangle">
                <div className="cards">
                <div className="card">
                    <p>  Economy</p>
                    <span>20 Attemps</span> 
                    <p>50.0 EGP</p>
               <Link href="/../pricing/details"> <button>Get it now</button></Link>    

                </div>
                <div className="card">
                    <p>professional</p>
                    <span>60 Attemps</span> 
                    <p>80 EGP</p>
                    <Link href="/../pricing/details"> <button>Get it now</button></Link>    

                </div>
                <div className="card">
                    <p>Premium</p>
                    <span>100 Attemps</span> 
                    <p>250 EGP</p>
                    <Link href="/../pricing/details"> <button>Get it now</button></Link>    

                </div>

                </div>
            </div>
        </Format>
    )}