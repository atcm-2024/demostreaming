
import { redirect } from "next/navigation";
function Navbar() {

  /*const handlelogout=async (formdata)=>{
    'use server'
    cookies().delete('token');
    redirect('/auth/login') 
    
  } */


    return (
      <nav className="flex h-28 w-screen flex-col items-center justify-end bg-blue-500 text-white">
          <div className="w-full h-1/2 flex flex-row">
              <div className="w-screen h-full flex flex-row">
                  <div className="w-[70%] flex items-center md:ml-14 ml-4">
                      <h1>DEMO Streaming</h1>
                  </div>
                  <div className="w-[30%] flex items-center flex-col md:flex-row">
                      <form className="w-full flex items-center flex-col md:flex-row"> 
                          <button className="hover:underline text-white text-sm w-[30%] mt-2 md:mt-0 mb-1 md:mb-0">
                              Logout
                          </button>
                          <button className="bg-slate-600 text-sm border-1 ml-3 md:mb-0 w-[95%] h-[70%] md:w-[35%] md:h-[50%]">
                              Start your free trial
                              </button>
                      </form>
                  </div>
              </div>
          </div>       
          <div className="w-screen h-1/2 flex items-center bg-slate-600 ">
              <div className="w-full h-1/2 flex items-center bg-slate-600 text-white md:ml-14 ml-4 ">
                    <h2>Popular Titles</h2>
            </div> 
          </div>    
      </nav>
    )
  }

  
  export default Navbar

  /* form action={handlelogout} */