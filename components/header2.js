import Link from "next/link"
import Image from "next/image"

export default function header(){
    return(
        <header>
       
       
       <Image src={"/c186678f7cd589c185fff8baa189e685.png"} width={140} height={58}></Image>
       <div className="f">
       <Link href="/"><div className="y">Home</div></Link> 
       <Link href="/"> <div className="y">about</div> </Link> 
        <Link href="/pricing"><div className="y" >pricing</div></Link>
        

        <Link href="/contests"><div className="btns" >Contest</div> </Link>
        <Link href="/account"> <div className="btns">Account</div> </Link>
        </div>
    </header>

    )}