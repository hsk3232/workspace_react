import TailSelect from '../UI/TailSelect';
import TailCard from '../UI/TailCard';
import { useState, useEffect, useRef } from "react";

export default function Festival() {
  //전체 데이터
  const [tdata, setTdata] = useState([]);
  
  //옵션 필터 데이터
  const [sel, setSel] = useState([])
  //옵션값 전달 데이터
  const [tags, setTags] = useState([]);

  //옵션 선택을 위한 ref
  const refSel = useRef();

  // select 선택
// ✅ 변경된 handleChange
const handleChange = () => {
  const selected = refSel.current.value;
  const filtered = tdata.filter(item => item.GUGUN_NM === selected);
  setTags(filtered); // 출력용만 변경
};


  //전체 데이터 fetch
  const getFetchData = async () => {
    const mvApikey = import.meta.env.VITE_APP_API_KEY

    let url = `https://apis.data.go.kr/6260000/FestivalService/getFestivalKr?`
    url = `${url}serviceKey=${mvApikey}&pageNo=1&numOfRows=39&resultType=json`;

    const resp = await fetch(url);
    const data = await resp.json();


    let dataList = data.getFestivalKr.item;


    //useState 변수(tags) 값 입력
    setTdata(dataList);
    console.log("dataList", dataList);

  }
  // 맨처음 한번만
  useEffect(() => {
    getFetchData();
  }, []);

    // 전체 데이터 생성 후
// ✅ 변경된 useEffect
useEffect(() => {
  if (tdata.length === 0) return;
  let tm = tdata.map(item => item.GUGUN_NM);
  tm = [...new Set(tm)].sort();
  setSel(tm);
}, [tdata]);



  return (
    <div className="w-10/12">
      <h2>부산 축제 정보</h2>
      <div className="p-5 flex items-center w-full mx-auto">
        <TailSelect id="sel1"
          ops={sel}
          ref={refSel}
          handleChange={handleChange} />
      </div>
      <div className="grid grid-cols-3 gap-2">
      {tags.map(item => (<TailCard key={item.UC_SEQ}
                                    title={item.TITLE}
                                    subtitle={item.TRFC_INFO}
                                    imgurl={item.MAIN_IMG_NORMAL}
                                    kws={item.USAGE_DAY_WEEK_AND_TIME} />
                        ))}

        
      </div>
    </div>
  )
}
