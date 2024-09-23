
import Header2 from "../components/header2.js";

import Head from "next/head";
export default function format2({children}){
    return(
        <>
            <Head>
               <title>Blog</title>

            </Head>
          <Header2></Header2>
          <main>{children}</main>
        
      
        </>
    )
  }