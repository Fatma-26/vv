import Link from "next/link"
import Image from "next/image"
import Format from "../../../layout/format";
export default function signup(){
    return(

           
<>

            <header className="headersign">
            <Image src={"/Screenshot 2024-09-19 171449.png"} width={200} height={900} className="mr-11"></Image>
            </header>











                <div className="orectangle">
                <div className="rectangle">
                    <div className="signIn">Sign Up</div>
                    <div>
                        <div className="enter">Email address</div>
                        <input className="input" type="email"></input>
                    </div>
                    <div>
                        <div className="enter">Password</div>
                        <input className="input" type="password"></input>
                    </div>
                    <button className="btn1">Sign Up</button>
                    <div className="or">OR</div>
                    <div className="btngoogle">
                    <Image src={"/image 1.png"} width={55} height={56} className="gicon"></Image>
                    <button>Continue with Google</button>
                    </div>
                   
                    
                </div>
                </div>
           




                </>

    )}