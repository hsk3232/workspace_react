import TailButton from "../UI/TailButton"
import { useState } from "react";

export default function TrefficNav({tilte, ct, selc, setSelc}) {
   
    const tags = ct.map(item => <TailButton key={item}
                                            caption ={item}
                                            color={selc == item ? "yellow" : "blue"}
                                            onClick={() => {setSelc(item)}}
                                            
                                            />);

  

  return (
    <div className="w-full flex justify-between items-center m-5">
        <div className="font-bold text-2xl flex">
        😢교통사고 {tilte}😢
        </div>
        <div className="flex cursor-pointer">
        {tags}
        </div>
    

    </div>
  )
}
