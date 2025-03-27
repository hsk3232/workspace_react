import {useState, useRef, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import getdata from "./getcode.json"
import TailSelect from '../UI/TailSelect'

export default function FcstList() {
    //날씨 정보를 출력
    const [tags, setTags] = useState([]);
    //API 데이터 저장
    const [data, setData] = useState([]);

  const [sParams] = useSearchParams();

  const refSel = useRef();


    let dt = sParams.get('dt');
    let si = sParams.get('si');
    let option = sParams.get('option');
    let x = sParams.get('x');
    let y = sParams.get('y');

    let selList = getdata.filter(item => item["예보구분"] == option)
                        .map(item => `${item["항목명"]}(${item["항목값"]})`);

    const handleChange = () => {
        let sel = refSel.current.value.split('(')[1].replace(')', '');
        let data2 = data.filter(item => item["category"] == sel);

        console.log(data2);
        console.log(sel);

        let p = getdata.filter(item => item["항목값"] == sel)[0];
        p = p["단위"];

        let table =data2.map(item =>
            <tr className="bg-white border-b text-center
                               border-gray-200
                               hover:bg-gray-50
                               dark:hover:bg-gray-600
                               text-black">
                  <td className="px-6 py-4  text-black" colSpan="7">
                    {refSel.current.value}
                  </td>
                  <td className="px-6 py-4  text-black" colSpan="7">
                    {item.fcstDate.slice(0,4)+ "-" + item.fcstDate.slice(4,6)+ "-" + item.fcstDate.slice(6,8)}
                  </td>
                  <td className="px-6 py-4  text-black" colSpan="7">
                    {item.fcstTime.slice(0,2)+ "-" + item.fcstTime.slice(2,4)}
                  </td>
                  <td className="px-6 py-4  text-black" colSpan="7">
                  {item.fsctValue}{p}
                  </td>
                </tr>
              );
        
            setTags(table); 
        } 
                  
    
    const getFetchData = async () => {
        const mvApikey = import.meta.env.VITE_APP_API_KEY;
        let gb ="";
        let baseTime ="";

        if (option == "단기예보") {
            gb = "getVilageFcst";
            baseTime ="0500";
        }

        else{
            gb = "getUltraSrtFcst";
            baseTime ="0630";
        }

        dt = dt.replaceAll('-', '');

        let url = `https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/`
        url = `${url}${gb}?servicekey=${mvApikey}&pageNo=1&numOfRows=1000&dataType=json&base_date=${dt}&base_time=${baseTime}&nx=${x}&ny=${y}`;

        const resp = await fetch(url);
        const data = await resp.json();

        let tm = data.response.body.items.item;
        console.log(tm);

        setData(tm);


    }

    useEffect(() => {
        getFetchData();
        //빈 배열임으로 화면이 랜더링 될 때, effect가 일어난다.
    }, []);

    useEffect(() =>{

    }, [data]);
    
  
    return (
    <div>
      <div>
        <h2>{si} {option} ({dt})</h2>
        <div><TailSelect 
                        id="selName"
                        refSel={refSel}
                        ops={selList}
                        handleChange={handleChange}/></div>
      </div>

      <table className="table-auto w-full 
                              text-sm text-conter
                               text-gray-500
                               dark:text-gray-400">
                <thead className="text-xs table-auto
                                  text-gray-700 uppercase
                                  bg-gray-50
                                  dark:bg-gray-700
                                  dark:text-gray-400">
                    <tr>
                        <td className="w-auto table-auto p-4">항목명</td>                      
                        <td className="table-auto text-center px-6 py-3">예측일자</td> 
                        <th className="table-auto px-6 py-3">  예측 시간</th>
                        <th className="table-auto px-6 py-3"> 예측값</th>
                        </tr>
                </thead>
                <tbody>
                    {tags}
                </tbody>

                </table>
    </div>
  )
}
