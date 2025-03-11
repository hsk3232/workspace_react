import TailButtonLine from "../UI/TailButtonLine";
import { useState } from "react";

export default function MyToggleBox({color}) {
    const bg700 ={
        "blue": "bg-blue-700",
        "red": "bg-red-700",
    }

    const [isShow, setIsShow] = useState(false);
    const handleClick = () => {
        setIsShow(!isShow);
        }
        
    
  return (
    <div className={`w-full flex flex-col justify-center items-center  p-5"
                    ${isShow && bg700[color]}`}>
             <div className="flex flex-col items-center">
            <TailButtonLine caption={color}
                            color="gray"
                            onClick={()=>{}} />

            <TailButtonLine caption={`${color} Toggle`}
                            color={color}
                            onClick={handleClick} />


        </div>
    </div>
  )
}
