import Link from "next/link"
import Image from "next/image"
import Format2 from "../../../../../layout/format2";
export default function examLevel(){
    return(
        <Format2>
            <div className="c">
            <p className="ecour">Exam Level</p>
         
                <div className="ecards">
                <Link href="/home2/examLevel/examsLevel/exam">  <div className="ecard">
                      <p className="type"> Easy </p>  
                        <p className="texts">start your inspiration journey<br></br>50s per Question - 10 Points.</p>
                    </div></Link> 
                    <Link href="/home2/examLevel/examsLevel/exam"> <div className="ecard">
                        <p className="type">Hard</p> 
                        <p className="texts">start your inspiration journey<br></br>50s per Question - 10 Points.</p>
                    </div> </Link> 
                    <Link href="/home2/examLevel/examsLevel/exam">   <div className="ecard">
                      <p className="type">Export</p>
                        <p className="texts">start your inspiration journey<br></br>50s per Question - 10 Points.</p>
                    </div>  </Link> 

                    <Link href="/home2/examLevel/examsLevel/exam">   <div className="ecard">
                       <p className="type">Super</p>
                        <p className="texts">start your inspiration journey<br></br>50s per Question - 10 Points.</p>
                    </div> </Link> 
                    
                </div>
            </div>












        </Format2>
        
    
    
    
    
    
    
    
    
    
    )
}