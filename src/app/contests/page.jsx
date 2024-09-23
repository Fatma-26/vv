import Link from "next/link"
import Image from "next/image"
import Format2 from "../../../layout/format2";
export default function contests(){
    return(
        <Format2>
           
            <p>UPCOMING CHALLENGES</p>
            <div className="cerds">
                <div className="cerd">
                <Image src={"/Screenshot 2024-09-23 031342.png"} width={380} height={380} ></Image>
                    <p className="name">NAME of contests</p>
                    <p className="start">STARTS ON</p>
                    <p className="deta"> sep 20 02:30pm</p>
                    <button >REGISTER</button>
                </div>
                <div className="cerd">
                <Image src={"/Screenshot 2024-09-23 031342.png"} width={380} height={380} ></Image>
                    <p className="name">NAME of contests</p>
                    <p className="start">STARTS ON</p>
                    <p className="deta"> sep 20 02:30pm</p>
                    <button >REGISTER</button>
                </div>
                <div className="cerd">
                <Image src={"/Screenshot 2024-09-23 031342.png"} width={380} height={380} ></Image>
                    <p className="name">NAME of contests</p>
                    <p className="start">STARTS ON</p>
                    <p className="deta"> sep 20 02:30pm</p>
                    <button >REGISTER</button>
                </div>
               
                
            </div>
        </Format2>

    )}