import Link from "next/link"
import Image from "next/image"
import Format2 from "../../../../../../../layout/format2";
export default function result(){
    return(
        <Format2>
            <div className="res">
                <p>Result: 100%</p>
                <p>points:20</p>
                <span>Congratulations continue until you reach the Top</span>
            </div>
       <Link href={"/home2/practice/lessonsAlg/lesson"}>
                <button className="resbtn">
                   Start Next Lesson
                </button>
        </Link>  
        </Format2>)}