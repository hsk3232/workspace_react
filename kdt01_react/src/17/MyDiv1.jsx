// import { useState, useEffect } from "react";
import MyDiv2 from "./MyDiv2"
import { useAtom } from "jotai";
import { cntAtom, contAtom2 } from "../17/CountAtoms";

export default function MyDiv1() {
const [n] = useAtom(cntAtom);

const [n2] = useAtom(contAtom2);


   
  return (
    <div className="w-full h-8/10 
    flex flex-col
    p-10  bg-sky-500 
   
    font-bold
    text-2xl ">
     <div className="w-full text-left mb-5">(jotai) n={n}, n2={n2}
      </div> 
     <MyDiv2 />

     
    </div>
  )
}
