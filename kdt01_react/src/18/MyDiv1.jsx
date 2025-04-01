// import { useState, useEffect } from "react";
import MyDiv2 from "./MyDiv2"
import { useCnt } from "./useCnt";
import { useState, useEffect } from "react";

export default function MyDiv1() {
const n = useCnt((state) => state.cnt);

const [n2, setN2] = useState();

useEffect (() => {
  setN2(n*2);

  localStorage.setItem("test", "test")


}, [n]);


   
  return (
    <div className="w-full h-8/10 
    flex flex-col
    p-10  bg-sky-500 
   
    font-bold
    text-2xl ">
     <div className="w-full text-left mb-5"> n={n}, n2={n2}
      </div> 
     <MyDiv2 />

     
    </div>
  )
}
