import Link from "next/link"
import Image from "next/image"
import Format from "../../../layout/format";
export default function signIn(){
    return(

           
<>

            <header className="headersign">
           
            <a href="/"> <Image src={"/c186678f7cd589c185fff8baa189e685.png"} width={170} height={68} className="mr-11"></Image></a>
       </header>

                <div className="orectangle">
                <div className="rectangle">
                    <div className="signIn">Sign In</div>
                    <div>
                        <div className="enter">Enter your email</div>
                        <input className="input" type="email"></input>
                    </div>
                    <div>
                        <div className="enter">Enter your password</div>
                        <input className="input" type="password"></input>
                    </div>
              <Link href="/../home2">    <button className="btn1">Sign In</button> </Link>  
                    <div className="or">OR</div>
                    <div className="btngoogle">
                    <Image src={"/image 1.png"} width={55} height={56} className="gicon"></Image>
                    <button>Continue with Google</button>
                    </div>
                    <p>Forgot your password?</p>
                    
                </div>
                </div>
           




                </>

    )}