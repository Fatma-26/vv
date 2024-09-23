import Link from "next/link"
import Image from "next/image"
import Format2 from "../../../../../layout/format2";
export default function examLevel(){
    return(
        <Format2>
            <div className="c">
            <p className="ecour">Exam Level</p>
         
                <div className="ecards">
                    <div className="ecard">
                  <Link href="/home2/examLevel/examsLevel/exam">    <p className="type">Easy</p> </Link>  
                        <p className="texts">start your inspiration journey<br></br>50s per Question - 10 Points.</p>
                    </div>
                    <div className="ecard">
                    <Link href="/home2/examLevel/examsLevel/exam">    <p className="type">Hard</p> </Link> 
                        <p className="texts">start your inspiration journey<br></br>50s per Question - 10 Points.</p>
                    </div>
                    <div className="ecard">
                    <Link href="/home2/examLevel/examsLevel/exam">    <p className="type">Export</p> </Link> 
                        <p className="texts">start your inspiration journey<br></br>50s per Question - 10 Points.</p>
                    </div>
                    <div className="ecard">
                    <Link href="/home2/examLevel/examsLevel/exam">    <p className="type">Super</p> </Link> 
                        <p className="texts">start your inspiration journey<br></br>50s per Question - 10 Points.</p>
                    </div>
                    
                </div>
            </div>












        </Format2>
        
    
    
    
    
    
    
    
    
    
    )
}