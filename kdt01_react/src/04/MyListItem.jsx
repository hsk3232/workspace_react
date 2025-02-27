import { useState } from "react";

export default function MyListItem({t, i, c, show}) {
  let cnt = 0;

  const [stCnt, setstCnt] = useState(0);

  const handleClick = () => {
    cnt = cnt+1; //변수를 전달하려면 () 안에 변수 넣어야 함.

    setstCnt(stCnt +1);

    console.log(cnt);
  } 

  return (
    <div className="w-full h-7/10 m-5 p-2 flex justify-between items-center drop-shadow-lg  bg-gray-200 ">
      
      <div className="w-3/10 h-full p-5 flex flex-col justify-start items-center">
      <img src={i} className="w-full h-auto flex justify-center items-center" alt="html" />
      </div>
      
      <div className="w-7/10 h-full m-5 flex flex-col inline-felx items-center ">

        <div className="w-full h-1/4 pt-5 flex justify-start items-start text-4xl font-bold">
          {t}
          </div>

          <div className="w-full h-3/4  pt-5 flex justify-start items-centertext-2xl  text-stone-700">
          {c}
          </div>

          <div className="w-full h-1/4  flex justify-end items-end text-xl">
            <span onClick={handleClick} className="p-1 pl-2 pr-2 hover:cursor-pointer hover:bg-red-500 text-white rounded-3xl bg-blue-600 animate-bounce"> 
              {`😘 좋아요 ${stCnt}`} </span> 
          </div>

      </div>

    </div>
 
    
  )
}

// {show && <span>{`💝 좋아요 ${cnt}`} </span> }
