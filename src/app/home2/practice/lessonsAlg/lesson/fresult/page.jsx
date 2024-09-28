import Link from "next/link"
import Image from "next/image"
import Format2 from "../../../../../../../layout/format2";
export default function fresult(){
    return(
        <Format2>
            <div className="res">
                <p>Result: 0%</p>
                <p>points:0</p>
                <span>You must achieve 100% to move to the next Lesson</span>
            </div>
            <Link href={"/home2/practice/lessonsAlg/lesson"}>
                <button className="resbtn">
                   Try Again
                </button>
        </Link>  
        </Format2>)}


        