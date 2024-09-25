/* 
"use client";
import React from 'react';

export default function CodeBlock() {
  const codeCpp = `

#include <iostream>

int main() {
    std::cout << "Hello, World!" << std::endl;
    return 0;
}`;

  return (
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
       <div className='d'><button className="ebtn">45</button>
        <button className="ebtn">485</button>
        <button className="ebtn">25</button>
        <button className="ebtn">00</button> </div> 
        <div id="timer" >50</div>

      </div>
    </div>
  );
} */
"use client";
import React, { useState, useEffect } from 'react';

export default function CodeBlock() {
  // الكود المطلوب عرضه
  const codeCpp = `
#include <iostream>

int main() {
    std::cout << "Hello, World!" << std::endl;
    return 0;
}`;

  // حالة المؤقت
  const [timer, setTimer] = useState(50);

  // تقليل المؤقت كل ثانية
  useEffect(() => {
    const countdown = setInterval(() => {
      if (timer > 0) {
        setTimer(timer - 1);
      }
    }, 1000);
    return () => clearInterval(countdown);
  }, [timer]);

  // عند الضغط على زر
 /*  const handleClick = (value) => {
    console.log(`Button ${value} clicked!`);
  }; */

  return (
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
          <button className="ebtn" >45</button>
          <button className="ebtn">485</button>
          <button className="ebtn" >25</button>
          <button className="ebtn">00</button>
        </div>
        <div id="timer">{timer}</div>
      </div>
    </div>
  );
}
