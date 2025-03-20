import React from 'react'
import TailSelect from '../UI/TailSelect';
import TailCard from '../UI/TailCard';
import { useState,  useEffect, useRef } from "react";

export default function Festival() {
    //전체 데이터
    const [tags, Settags] = useState([]);
    //옵션 필터터 데이터
    const [tdata, Settdata] = useState([]);
    //옵션값 전달 데이터
    const [sel, Setsel] = useState([])
   
    //옵션 선택을 위한 ref
    const refSel = useRef();
    
    //전체 데이터 fetch
     const getFetchData = async () => {
            const mvApikey = import.meta.env.VITE_APP_API_KEY
            
            let url = `https://apis.data.go.kr/6260000/FestivalService/getFestivalKr?`
            url = `${url}serviceKey=${mvApikey}&pageNo=1&numOfRows=39&resultType=json`;
            
            const resp = await fetch(url);
            const data = await resp.json();
    
            let dataList = data.getFestivalKr.item;
            let tm = dataList.map(item => <TailCard key={item.UC_SEQ}
                                             title={item.TITLE} 
                                            subtitle={item.TRFC_INFO}
                                            imgurl={item.MAIN_IMG_NORMAL}
                                            kws={item.USAGE_DAY_WEEK_AND_TIME} />
                                           
            );
            
            //useState 변수(tags) 값 입력
            Settags(tm);
            console.log("tm", tm);
          
            
            
            

        }
       
        const handleChange = (e) => {
            let tm = tags.filter(item => item.GUGUN_NM == refSel.current.value)
            
            Settdata(tm)
          }

    
        useEffect(() => {
                getFetchData();
        
            }, []);

       useEffect(() => {
        if(!tage) return;
        
        let tm2 = tags.map(item => item.GUGUN_NM);
            let list = [... new Set(tm2)];
            list=list.sort();
            Setsel(list);
            console.log("tm2", list);

        let tm = tage.map(item => item.GUGUN_NM);
        tm = [... new Set(tm)];
        tm.sort();

            }, [tags]);


  return (
    <div className="w-10/12">
    <h2>부산 축제 정보</h2>
        <div className="p-5 flex items-center w-full mx-auto">
            <TailSelect id="sel1"
                        pos={sel} 
                        ref={refSel}
                        handleChange={handleChange} /> 
        </div>
        <div className="grid grid-cols-3 gap-2">
        {tdata}
        </div>
    </div>
  )
}
