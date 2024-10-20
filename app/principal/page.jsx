import React from 'react'
import Image from "next/image";
import Link from 'next/link'



 export default function Main() 
 {
      

  return (
    
        <div className="w-full h-full flex flex-row items-center justify-start">
            <div className="w-[40%] h-full flex flex-row mt-24">
            <Link href="/series" className="flex flex-col ml-5 w-[70%] md:w-[35%] h-[50%] md:h-[55%]">
                <figure >
                <Image src="/images/Series.png"
                       width={1280} height={420} className=" cursor-pointer object-contain" alt="" />
                       <figcaption className="">Popular Series</figcaption>                     
                </figure>
              </Link> 
              <Link href="/movies" className="flex flex-col ml-5 w-[70%] md:w-[35%] h-[50%] md:h-[55%]"> 
                <figure >
                  <Image src="/images/Movies.png"
                          width={1280} height={420} className="cursor-pointer object-contain" alt="" />
                  
                   <figcaption className="">Popular Movies</figcaption>
                </figure>
                </Link>   
            </div>
            <div className="w-[60%] h-full flex flex-row items-center">

            </div>
        </div>
  
  )
}
