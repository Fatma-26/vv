import Link from "next/link"
import Image from "next/image"
import Format2 from "../../../../layout/format2";
export default function signIn(){
    return(
        <Format2>
            <p className="cour">Coure Courses</p>
            <div className="try">
              <div className="boxcour">
                  <div className="course">
                    <div>  <Image src={"/programming-background-with-person-working-with-codes-computer.jpg"} 
                  
                  
                  width={470} height={213} className="mr-12"></Image>
                      </div>
                      <div className="word"> C  </div> 
                    <div><hr></hr></div>  
                      <button className="dbtn">
                  <Link href="/home2/practice/lessonsC"> Start </Link>   
                      </button>
                    </div> 
                    <div className="course">
                     <Image src={"/programming-background-collage (2).jpg"} 
                      width={470} height={213} className="mr-12"></Image>
                     
                      <div className="word"> C++  </div> 
                    <div><hr></hr></div>  
                      <button className="dbtn">
                  <Link href="/home2/practice/lessonsCpp"> Start </Link>   
                      </button>
                    </div> 


                  {/*   <div className="course">
                    <div>  <Image src={"/Screenshot 2024-09-19 151522.png"} 
                      width={470} height={213} className="mr-12"></Image>
                      </div>
                      <div className="word"> C++  </div> 
                    <div><hr></hr></div>  
                      <div className="dbtn">
                      <Link href="/home2/practice/lessonsCpp"> Start </Link>   
                      </div>
                    </div>    */}
                    <div className="course">
                    <div>  <Image src={"/rear-view-programmer-working-all-night-long.jpg"} 
                      width={470} height={213} className="mr-12"></Image>
                      </div>
                      <div className="word">  Data Structure </div> 
                    <div><hr></hr></div>  
                      <button className="dbtn">
                      <Link href="/home2/practice/lessonsData"> Start </Link>   
                      </button>
                    </div>   




                    <div className="course">
                    <div>  <Image src={"/programming-background-with-person-working-with-codes-computer (1).jpg"} 
                      width={470} height={213} className="mr-12"></Image>
                      </div>
                      <div className="word"> Algorithms </div> 
                    <div><hr></hr></div>  
                      <button className="dbtn">
                      <Link href="/home2/practice/lessonsAlg"> Start</Link>   
                      </button>
                    </div>   
                    <div className="course">
                    <div>  <Image src={"/programming-background-collage (1).jpg"} 
                      width={470} height={213} className="mr-12"></Image>
                      </div>
                      <div className="word"> OPP  </div> 
                    <div><hr></hr></div>  
                      <button className="dbtn">
                      <Link href="/home2/practice/lessonsOpp"> Start </Link>   
                      </button>
                    </div>   
                    
                  </div>
                
            </div>

            
        </Format2>
    )}