import Link from "next/link"
import Image from "next/image";

function Sidebar() {
    return (
        <footer className="flex flex-col h-40 md:h-35 w-screen">
          <div className="flex flex-row bg-slate-900 w-screen h-12">
                <div className="grid grid-cols-3 md:flex text-sm text-slate-300 md:w-[75%] w-[100%] h-full justify-between items-center md:items-end md:ml-28 ml-4">
                        <Link href="/" className="">Home |</Link>
                        <Link href="/users" className="">Usuarios |</Link>
                        <Link href="/users" className="">Privacy Policy |</Link>
                        <Link href="/users" className="">Collection Statement |</Link>
                        <Link href="/users" className="">Help |</Link>
                        <Link href="/users" className="">Manage Account</Link>
                </div>
                <div className="flex w-0 md:w-[35%] h-full "></div>
          </div>

          <div className="flex flex-row bg-slate-900 w-screen h-6">
                <div className="flex w-screen mt-2 h-6 text-slate-300 md:ml-28 md:justify-normal justify-center text-sm">
                    <h3>Copyright © 2024 DEMO Streaming. All Rights Reserved</h3>
                </div>
          </div>
           <div className="flex flex-row h-3/4 md:2/4 w-full justify-center items-center bg-slate-900">
                <div className="flex w-[30%] h-full justify-center items-center mr-5">
                    <Image src="/images/social/facebook-white.svg"
                    width={1280} height={420} className="mr-3 w-[15%] h-[28%] md:h-[35%] cursor-pointer object-contain" alt="" />
                    <Image src="/images/social/twitter-white.svg"  
                    width={1280} height={420} className="mr-3 w-[15%] h-[50%] md:h-[35%] cursor-pointer object-contain" alt="" />
                    <Image src="/images/social/instagram-white.svg"  
                    width={1280} height={420} className="mr-3 w-[15%] h-[50%] md:h-[35%] cursor-pointer object-contain" alt="" />
                </div>
                <div className="flex w-0 md:w-[50%] h-full bg-slate-900"></div>
                <div className="flex w-[70%] h-full justify-center items-center bg-slate-900">
                    <Image src="/images/apps/app-store.svg"
                      width={1280} height={420} className="md:mr-5 w-[25%] h-[40%] cursor-pointer object-contain" alt="" />
                      <Image src="/images/apps/play-store.svg"  
                      width={1280} height={420} className="ml-2 md:ml-0 w-[25%] h-[40%] cursor-pointer object-contain" alt="" />
                      <Image src="/images/apps/windows-store.svg"  
                      width={1280} height={420} className="md:mr-0 sm:mr-7 md:ml-1 w-[25%] h-[28%] md:h-[42%] cursor-pointer object-contain" alt="" />
                </div>
          </div>
          
          
          
       </footer>
    )
  }
  

  export default Sidebar