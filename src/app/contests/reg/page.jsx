"use client";
import { useState } from "react";
import Link from "next/link"
import Image from "next/image"
import Format2 from "../../../../layout/format2";
export default function Contests(){
    const [m,sM]=useState('');
    const hC=()=>{
        sM("Done")
    }
    return(
        <Format2>
            <div className="orectangle">
                <div className="rectangle regrect">
                    <div className=" reg">Register for the Contest</div>
                    <div>
                        {/* <div className="enter">Email address</div> */}
                        <input className="input" type="name" placeholder="Name"></input>
                    </div>
                    <div>{/* 
                        <div className="enter">Password</div> */}
                       <input className="input" type="email" placeholder="Email"></input>
                    </div>
                    <button className="rbtn" onClick={hC}>Submit</button>
                    {m && <p>{m}</p>}
                            
                  
                </div>
                </div>
               </Format2>
)}

