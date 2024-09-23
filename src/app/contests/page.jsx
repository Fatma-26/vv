import Link from "next/link"
import Image from "next/image"
import Format2 from "../../../layout/format2";
export default function contests(){
    return(
        <Format2>
           
            <p className="up">UPCOMING CHALLENGES</p>
            <div className="cerds">
                <div className="cerd">
                <Image src={"/cyber-security-expert-working-with-technology-neon-lights.jpg"} width={314} height={210} ></Image>
                    <p className="name">NAME of contests</p>
                    <p className="start">STARTS ON</p>
                    <p className="deta"> sep 20 02:30pm</p>
                    <button >REGISTER</button>
                </div>
                <div className="cerd">
                <Image  className="jjj"src={"/hackers-rush-evade-law-enforcement.jpg"} width={380} height={380} ></Image>
                    <p className="name">NAME of contests</p>
                    <p className="start">STARTS ON</p>
                    <p className="deta"> sep 20 02:30pm</p>
                    <button >REGISTER</button>
                </div>
                <div className="cerd">
                <Image src={"/programming-background-collage.jpg"} width={380} height={380} ></Image>
                    <p className="name">NAME of contests</p>
                    <p className="start">STARTS ON</p>
                    <p className="deta"> sep 20 02:30pm</p>
                    <button >REGISTER</button>
                </div>
               
                
            </div>
            <p className="up">Past Contests</p>
            <div className="try">
                <div className="pcards">
                    <div className="pcard">
                    <Image src={"/programming-background-collage.jpg"} width={380} height={380} ></Image>
                    <div> <p className="name">NAME of contests</p>
                        <p className="deta"> sep 20 02:30pm</p>
                        </div>
                    </div>
                    <div className="pcard">
                    <Image src={"/programming-background-collage.jpg"} width={380} height={380} ></Image>
                    <div> <p className="name">NAME of contests</p>
                        <p className="deta"> sep 20 02:30pm</p>
                        </div>
                    </div>
                    <div className="pcard">
                    <Image src={"/programming-background-collage.jpg"} width={380} height={380} ></Image>
                    <div> <p className="name">NAME of contests</p>
                        <p className="deta"> sep 20 02:30pm</p>
                        </div>
                    </div>
                    <div className="pcard">
                    <Image src={"/programming-background-collage.jpg"} width={380} height={380} ></Image>
                    <div> <p className="name">NAME of contests</p>
                        <p className="deta"> sep 20 02:30pm</p>
                        </div>
                    </div>
                    <div className="pcard">
                    <Image src={"/programming-background-collage.jpg"} width={380} height={380} ></Image>
                    <div> <p className="name">NAME of contests</p>
                        <p className="deta"> sep 20 02:30pm</p>
                        </div>
                    </div>
                    <div className="pcard">
                    <Image src={"/programming-background-collage.jpg"} width={380} height={380} ></Image>
                    <div> <p className="name">NAME of contests</p>
                        <p className="deta"> sep 20 02:30pm</p>
                        </div>
                    </div>
                    

                </div>
            </div>
        </Format2>

    )}