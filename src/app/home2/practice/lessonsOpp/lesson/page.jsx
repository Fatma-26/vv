"use client";
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation'; // استيراد useRouter من next/navigation
import Format2 from "../../../../../../layout/format2";
import Link from 'next/link';

export default function CodeBlock() {
  const codeCpp = `
#include <iostream>

int main() {
    std::cout << "45" << std::endl;
    return 0;
}`;

  const [timer, setTimer] = useState(50);
  const router = useRouter(); 

  useEffect(() => {
    const countdown = setInterval(() => {
      if (timer > 0) {
        setTimer(timer - 1);
      } else {
        clearInterval(countdown);
        router.push("/home2/practice/lessonsAlg/lesson/fresult");
      }
    }, 1000);

    return () => clearInterval(countdown);
  }, [timer, router]);

  return (
    <Format2>
      <div className="ec">
        <div className="black">
          <pre>
            <code>
              {codeCpp}
            </code>
          </pre>
        </div>
        <div className="content">
          <p className="q">Question</p>
          <p className="o">The output is:</p>
          <div className='d'>
            <Link href={"/home2/practice/lessonsAlg/lesson/result"}><button className="ebtn">45</button></Link>  
            <Link href={"/home2/practice/lessonsAlg/lesson/fresult"}><button className="ebtn">59</button></Link>  
            <Link href={"/home2/practice/lessonsAlg/lesson/fresult"}><button className="ebtn">49</button></Link>  
            <Link href={"/home2/practice/lessonsAlg/lesson/fresult"}><button className="ebtn">00</button></Link>  
          </div>
          <div id="timer">{timer}</div>
        </div>
      </div>
    </Format2>
  );
}
