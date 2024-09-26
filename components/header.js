import Link from "next/link"
import Image from "next/image"

export default function header(){
    return(
        <header>
       <div className="father">
       <a href="/"><Image src={"/c186678f7cd589c185fff8baa189e685.png"}
        width={150} height={48} className="mr-11 m"></Image> </a> 
     <div className="f"> 
       <Link href="/"><div className="y">Home</div></Link> 
       <Link href="/"> <div className="y">about</div> </Link> 
        <Link href="/pricing"><div className="y" >pricing</div></Link>
        
      <Link href="signup"> <div className="btn">Sign up</div></Link> 
      <Link href="signIn"> <div className="btn">Login</div></Link> 
      </div>
      </div>
    </header>

    )}