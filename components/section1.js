import Link from "next/link"
import Image from "next/image"

export default function section1(){
    return(
       <>
      
       
       
    <section className="secHome">
        <div className="c1">
          <div className="c11"> 
                <p>Test your level of
                    programming<br></br>Now</p>
          </div>
          <div className="c12">
            <Link href="/signup"><button>Sign up -it is free</button></Link> 
           </div>
        </div>
        <div className="c2">
            <Image src={"/undraw_Login_re_4vu2 (1).png"} width={626} height={631} className="mr-12"></Image>
        </div>
    </section>
    



    </>)}