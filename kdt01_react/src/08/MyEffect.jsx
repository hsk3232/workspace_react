import { useEffect, useState } from "react";
import TailButtonLine from "../UI/TailButtonLine";
export default function MyEffect() {
    const [msg, setmsg] = useState('blue'); //msg라는 state를 만들고, 초기값은 ''로 설정

    const handleClick = () => {
        if (msg === '') {
            setmsg('useEffect 예제: state 변수 변경시');
        } else {
            setmsg('');
        }
    }
}

//useEffect 사용 방법
//1. 컴포넌트 생성시 한번 실행
//uesEffect는 두개의 인자를 받는다. 첫번째는 함수, 두번째는 배열
useEffect(() => {
    console.log('의존성 배열 []일 때 : 컴포넌트 생성시 한번 실행행');
    console.log('msg=', msg);
}, []); //두번째 인자가 빈 배열이면, 처음 한번만 실행됨.

//2. state 변수 값이 변경될 때마다 실행
useEffect(() => {
    console.log('state 변수 useEffect msg="', msg);

}, [msg]); //두번째 인자가 [msg]이면, msg값이 변경될 때마다 실행됨.


//3. 어떤 state변수든 변경(화면이 랜더링)이 될 때마다 실행
useEffect(() => {
    console.log('useEffect msg="', msg);
    console.log('useEffect color=', color);
});    

  return (
    <div className = "w-full text-2xl font-bold flex justify-center items-center">
        <div className="h-20 font-bold m-2 text-2xl">
            {msg}
        </div>
        <TailButtonLine caption="useEffect 예제" color="blue" onClick={handleClick} />
    </div>
)

