import Link from "next/link"
import Image from "next/image"

export default function header(){
    return(
        <header>
       
        <Image src={"/Screenshot 2024-09-19 171449.png"} width={200} height={900} className="mr-11"></Image>
     
        <div>Home</div>
        <div>about</div>
        <div>pricing</div>
        <div className="btns" >Contest</div>
        <div className="btns">Account</div>
    </header>

    )}