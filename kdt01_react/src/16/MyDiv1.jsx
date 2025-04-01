import { useState, useEffect } from "react";
import MyDiv2 from "./MyDiv2"


export default function MyDiv1() {
const [n, setN] = useState(0);

const [n2, setN2] = useState(0);

useEffect(() => {
  setN2(n*2)
}, [n])


   
  return (
    <div className="w-full h-8/10 
    flex flex-col
    p-10  bg-sky-500 
   
    font-bold
    text-2xl ">
     <div className="w-full text-left mb-5">n={n}, n2={n2}</div> 
     <MyDiv2 n={n} setN={setN}/>

     
    </div>
  )
}
