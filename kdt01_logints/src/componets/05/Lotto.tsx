import TailBall from "../../UI/TailBall"
import TailButton from "../../UI/TailButton"
import { useState } from "react";

export default function Lotto() {
   // useState 타입 선언 
  const [lottoTags, setLottoTags] = useState<React.ReactNode[]>([]);
  
  const handleLottoNum = () => {
     //1-1. 1~45까지의 숫자 중 6개를 랜덤하게 선택
    let lottoNum: number[] = [];
      // lottoNum: (number|string)[] => 이렇게도 선언가능, 이렇게 선언할 시 배열에 2가지 타입이 들어갈 수 있는 것이기 때문에, 이후 배열에 들어가는 모든 요소의 타입은 2가지 동시에 병기해줘야 함.
    
    while (lottoNum.length < 7) {
      let n:number = Math.floor(Math.random() * 45) + 1; // 1~45까지 

      if (!lottoNum.includes(n)) lottoNum.push(n); //  lottoNum에 n이 없으면, n을 추가한다.
    }

    //1-3. 보너스 번호 추가
    let bonus:number[] = lottoNum.splice(-1); //마지막 요소를 제거하고 반환

    //1-2. 6개 번호 정렬
    lottoNum.sort((a:number, b:number) => a - b);



    //1-4. 로또 배열 다시 생성
    // + 문자열을 추가함으로 string이 올 수 있기 때문에 변수를 변경
    let lottoNum2 : (number|string)[] = [...lottoNum, '+' , ...bonus];

    //lottoTags = lottoNum; 안됨

    let tm = lottoNum2.map((itme: number|string) => itme === '+' ?  <span className="w-16 h-16 flex justify-center text-blod items-center text-4xl mr-5">{itme} </span> 
                                                : <TailBall key ={'n'+itme} n={itme} />);
    setLottoTags(tm);

    //console.log("lottoNum", lottoNum);
  }

  //1-2. 6개



  return (
    <div className="w-11/12 h-full  flex flex-col justify-center items-center text-center ">
      <div className="w-full flex justify-center items-center mb-10 text-blod">

        {lottoTags}
      </div>
      <div>
        <TailButton caption="로또번호 생성" color="blue" onClick={handleLottoNum} />
      </div>
    </div>
  )
}
