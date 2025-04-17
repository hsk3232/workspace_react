import { MouseEvent } from "react";

// 인수로 받는 props를 interface로 정의
interface TailButtonProps {
  caption:string;
  color: "blue" | "red" | "yellow"; // 3개의 옵션 중 1개만 들어 올 수있으며, 나머지는 사용 안됨.
 // onClick?: () => void }; //?를 붙이면 onClick 반드시 안써도 됨
  onClick : (e:MouseEvent<HTMLButtonElement>) => void }

  type BgT = {
    "blue": string
    "red":string
    "yellow": string
  }

// 인수에 데이터 타입 선언
export default function TailButton({caption, color, onClick}:TailButtonProps) {
    const bg:BgT ={
      "blue": "bg-blue-500",
      "red": "bg-red-500", 
      "yellow": "bg-yellow-500"
    }

    const bgHover:BgT ={
      "blue": "hover:bg-purple-500",
      "red": "hover:bg-yellow-500", 
      "yellow": "hover:bg-blue-500"
  
    }


  return (
    <button className={`w-30 p-2 m-2 text-base hover:font-bold rounded-xl shadow-lg
     shadow-gray-500/50 text-white ${bg[color]} ${bgHover[color]}`} onClick={onClick}>
      {caption}
    </button>
  )
}
