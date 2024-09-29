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
          <Link href="/signup"><button className="btn">Sign up</button></Link>
          <Link href="signIn"> <button className="btn">Login</button></Link> 
        </div>
      </div>
    </header>
  );
};

export default Navbar;
