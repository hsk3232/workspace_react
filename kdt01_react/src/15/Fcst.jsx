
import TailSelect from '../UI/TailSelect'
import TailButton from '../UI/TailButton'
import { useRef, useEffect } from "react"
import { useNavigate } from 'react-router-dom'
import fcstdata from "./getxy.json"

export default function Fcst() {

    const refInfo = useRef();
    const refDate = useRef();
    
    const navigate = useNavigate();
    

    let tm = fcstdata.map(item => item["1단계"]);
    tm = ["---도시 선택---", ...tm];

    const handleChange = () => {
        console.log(refInfo.current.value)
    }


    const handleClick = (option) => {
        if(refInfo.current.value == "---도시 선택---"){
            alert("도시를 선택해주세용");
            refInfo.current.focus();
            return;
        }
        const ntm = fcstdata.filter(item => item["1단계"] == refInfo.current.value)[0];
        const x = ntm["격자 X"];
        const y = ntm["격자 Y"];
        navigate(`/FcstList?dt=${refDate.current.value}&si=${refInfo.current.value}&option=${option}&x=${x}&y=${y}`);
    }

    //첫 화면 랜더링 시 오늘 날짜로 데이터를 우선적으로 로딩
    useEffect(() =>{
        refDate.current.value = new Date().toISOString().split('T')[0];
    }, []);


    return (
    <div>
      <h2>단기예보 입력 정보</h2>
            {/* 내가 원하는 때에 이벤트가 일어나고 싶은데, form은 무조건 자기 자신을 먼저 호출한다. */}
            <form className="p-5 flex items-center w-full mx-auto" onSubmit={(e)=>e.preventDefault()}>

            <input type="date" ref={refDate} name="searchDate" />
            
            <div className="w-fit">
             <TailSelect 
                        id="sle1"
                        ref={refInfo}
                        ops={tm}
                        handleChange ={()=>handleChange} /></div>

            
             <div className="grid grid-cols-3 gap-2">
             <TailButton 
                        caption="초단기 예보"
                        color="blue"
                        onClick={()=>handleClick("초단기예보")} />

             <TailButton 
                        caption="단기 예보"
                        color="blue"
                        onClick={()=>handleClick("단기예보")} />
             </div>
             </form>
    </div>
  )
}
