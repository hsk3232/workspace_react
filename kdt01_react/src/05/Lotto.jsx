import TailBall from "../UI/TailBall"
import TailButton from "../UI/TailButton"
import { useState } from "react";

export default function Lotto() {

  const [lottoTags, setLottoTags] = useState([]);
  const handleLottoNum = () => {
    let lottoNum = [];
    //1-1. 1~45까지의 숫자 중 6개를 랜덤하게 선택
    
    while (lottoNum.length < 7) {
      let n = Math.floor(Math.random() * 45) + 1; // 1~45까지 

      if (!lottoNum.includes(n)) lottoNum.push(n); //  lottoNum에 n이 없으면, n을 추가한다.
    }
    //1-2. 6개 번호 정렬
    lottoNum.sort((a, b) => a - b);

    //1-3. 보너스 번호 추가
    let bonus = lottoNum.splice(-1); //마지막 요소를 제거하고 반환

    //1-4. 로또 번호를 생성
    lottoNum = [...lottoNum, '+' , ...bonus];

    //lottoTags = lottoNum; 안됨

    let tm = lottoNum.map(itme => itme === '+' ?  <span className="w-16 h-16 flex justify-center text-blod items-center text-4xl mr-5">{itme} </span> 
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
