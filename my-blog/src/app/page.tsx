"use client"
import Image from "next/image";
import Hero from "/public/images/heroImage.png";
import { useState } from "react";

export default function Home() {

const [blog, setBlog] = useState([])
  return (
    <>
      {/* <div classNameName="w-full flex justify-center bg-black mb-5">
        <Image src={Hero} alt="hero" classNameName="w-full bg-cover " />
      </div>
    */}
<div>
  <h2 className="font-extrabold text-2xl">Latest Blog</h2>
  <div>
    

<div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
    <a href="#">

<Image
  className="rounded-t-lg"
  src="https://img.freepik.com/free-vector/blog-post-concept-illustration_114360-26355.jpg?semt=ais_hybrid&w=740"
  alt="Blog post concept"
  width={740}
  height={480}
/>
    </a>
    <div className="p-5">
        <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
        <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
             <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </a>
    </div>
</div>

  </div>
</div>



    </>
  );
}
