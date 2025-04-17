import busan from "../../assets/busan.png";
import bank from "../../assets/bank.png";
import market from "../../assets/market.png";
import { useState } from "react";
import { FoodItem } from "../../types/Food";

// Props 타입 선언
interface FoodCardProps {
  obj : FoodItem;
}

interface imgGubunT{
    "광역지원센터" : string,
    "기초푸드뱅크" : string,
    "기초푸드마켓" : string,
}

// Props 타입 지정

export default function FoodCard({obj}:FoodCardProps) {
    // useState 타입선언
    const [isShow, setIsShow] = useState<boolean>(false);
    
    const imgGubun : imgGubunT ={
      "광역지원센터" : busan,
      "기초푸드뱅크" : bank,
      "기초푸드마켓" : market,
    };

    //?? null 병합 연산자 : undefined거나 null일 경우에 대체 값으로 market을 사용
    const imgSrc = imgGubun[obj]["구분"] as keyof imgGubunT] ?? market;

      const handleClick = () => {
          setIsShow(!isShow); //값을 반대로 바꿔 줌
      };

      return (
        <div className="w-full h-7/10 p-2 flex justify-center items-center drop-shadow-lg  bg-gray-200 ">
      
      <div className="w-3/10 p-2 flex justify-start items-center ">

        <img src={imgSrc} alt={obj["구분"]} className="h-full" />

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
