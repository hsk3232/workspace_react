import busan from "../assets/busan.png";
import bank from "../assets/bank.png";
import market from "../assets/market.png";

import { useState } from "react";

export default function FoodCard({obj}) {
    
    const [isShow, setIsShow] = useState(false);
    const handleClick = () => {

        setIsShow(!isShow); //값을 반대로 바꿔 줌
    };

    const imgg={
        "광역지원센터" : busan,
        "기초푸드뱅크" : bank,
        "기초푸드마켓" : market,
    };

    // const obj ={
    //     "구분": "광역지원센터",
    //     "시군구": "부산시",
    //     "사업장명": "부산광역푸드뱅크",
    //     "신고기준": "당연",
    //     "사업장 소재지": "부산광역시 동래구 낙민로 25, 부산사회복지종합센터 302호",
    //     "연락처(대표번호)": "051-791-1377",
    //     "팩스번호": "051-714-3096",
    //     "운영주체 분류": "1. 사회복지법인",
    //     "운영주체명": "부산광역시사회복지협의회"
    // };
  return (
    <div className="w-full h-7/10 p-2 flex justify-center items-center drop-shadow-lg  bg-gray-200 ">
      
      <div className="w-3/10 p-2 flex justify-start items-center ">

        <img src={imgg[obj["구분"]]} className="h-full"/>

      </div>
      
      <div className="w-7/10 m-5 pb-2 flex flex-col inline-felx items-center">

        <div className="w-full h-2/5 pt-2 flex justify-start items-start text-3xl font-bold">
          {obj["사업장명"]}
        </div>

        <div className="w-full h-1/5  flex justify-start items-center text-xl ">
          {obj["운영주체명"]}
        </div>

        <div className="w-full h-2/5 pb-2 flex justify-start items-center text-lm text-stone-700">
          {obj["사업장 소재지"]}
    
        </div>
        
        <div className="w-full h-1/5 flex justify-center items-center bg-gray-500  hover:bg-black text-white text-sm cursor-pointer" 
          onClick={handleClick}> 
                {isShow && `연락처 : ${obj["연락처(대표번호)"]}, Fax : ${obj["팩스번호"]}`} {isShow || "연락처 및 Fax번호 보기"}
    
        </div>

      </div>

    </div>

  )
}
