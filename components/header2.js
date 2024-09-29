/* import Link from "next/link"
import Image from "next/image"

export default function header(){
    return(
        <header>
       <div className="father">
       <a href="/"><Image src={"/c186678f7cd589c185fff8baa189e685.png"}
        width={150} height={48} className="mr-11 m"></Image> </a> 
     <div className="f"> 
       <Link href="/"><div className="y">Home</div></Link> 
       <Link href="/about"> <div className="y">about</div> </Link> 
        <Link href="/pricing"><div className="y" >pricing</div></Link>
        
        <Link href="/contests"><div className="btns" >Contest</div> </Link>
        <Link href="/account"> <div className="btns">Account</div> </Link>
        </div>
        </div>
    </header>

    )} */

    
  "use client";
  import React, { useState } from 'react';
  import Link from "next/link";
  import Image from "next/image";
  
  const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleMenu = () => {
      setIsOpen(!isOpen);
      console.log(isOpen); // للتحقق من الحالة
    };
  
    return (
      <header>
        <div className="father">
          <Link href="/">
            <Image
              src="/c186678f7cd589c185fff8baa189e685.png"
              width={150}
              height={48}
              className="mr-11 m"
              alt="Logo"
            />
          </Link>
          <div className="hamburger" onClick={toggleMenu}>
            &#9776;
          </div>
          <div className={`f ${isOpen ? 'open' : ''}`}>
            <Link href="/"><div className="y">Home</div></Link>
            <Link href="/about"><div className="y">About</div></Link>
            <Link href="/pricing"><div className="y">Pricing</div></Link>
            <Link href="/contests"><div className="btns" >Contest</div> </Link>
        <Link href="/account"> <div className="btns">Account</div> </Link>
          </div>
        </div>
      </header>
    );
  };
  
  export default Navbar;
  