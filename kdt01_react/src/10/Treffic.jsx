import { useState, useEffect } from "react"
import TrefficNav from "./TrefficNav";

export default function Treffic() {
    //fetch된 전체 데이터
    const [tData, SetTdata] = useState([]);

    //대분류
    const [c1, setC1] = useState();
    const [selC1, setselC1] = useState();

    //중분류
    const [c2, setC2] = useState();
    const [selC2, setSelC2] = useState();

    //정보
    const [info, setInfo] = useState();
    

    //datafetch
    const getFetchData = async () =>{
        const ApiKey = import.meta.env.VITE_APP_API_KEY
        let url = `https://api.odcloud.kr/api/15070282/v1/uddi:8449c5d7-8be5-4712-9093-968fc0b2d9fc?page=1&perPage=18&`
        url = `${url}serviceKey=${ApiKey}`

        const resp = await fetch(url);
        const data = await resp.json();
       
        SetTdata(data.data);
        }


    useEffect(() => {
        getFetchData();
        }, []);

    useEffect(() => {
        if(tData.length <= 0) return;
        console.log("tData", tData);

        let tm = tData.map(item => item["사고유형대분류"]);
        tm = [...new Set(tm)];
        setC1(tm)
        }, [tData]);

    useEffect(() => {
        console.log(selC1)
        setC2([]);

        
        let tm = tData.filter(item => item["사고유형대분류"] == selC1)
                        .map(item => item["사고유형"])
                        console.log("tm", tm)
                        setC2(tm)      
        }, [selC1]);


    useEffect(() => {
            console.log(selC1)

            let db = 
                tData.filter(item => 
                                item["사고유형대분류"] == selC1 && 
                                item["사고유형"] == selC2)
                    .map(item => 
                        <tr key={item["사고유형"]} 
                                className="bg-white border-b 
                                            text-center border-gray-200
                                             hover:bg-gray-50">
                                        
                            <td className="px-6 py-4 ">
                                {parseInt(item["사고건수"]).toLocaleString()}</td>
                            <td className="px-6 py-4 ">
                                {parseInt(item["부상신고자수"]).toLocaleString()}</td>
                            <td className="px-6 py-4 ">
                                {parseInt(item["경상자수"]).toLocaleString()}</td>
                            <td className="px-6 py-4 ">
                                {parseInt(item["중상자수"]).toLocaleString()}</td>
                            <td className="px-6 py-4 ">
                                {parseInt(item["사망자수"]).toLocaleString()}</td>
                        </tr>);
        
        setInfo(db);

    }, [selC2]);

    


  return (
    <div className="w-full flex flex-col justify-center items-center">
        {c1 && <TrefficNav tilte={"대분류"}
                            ct={c1}
                            selc={selC1}
                            setSelc={setselC1}
                            />}

        {c2 && <TrefficNav tilte={"사고유형"}
                            ct={c2}
                            selc={selC2}
                            setSelc={setSelC2}
                            
                            />}

        <div> 
        <table className="table-auto w-full 
                              text-mx text-conter
                               text-gray-700
                               dark:text-gray-400 m-5">
                <thead className="text-s table-auto
                                  text-gray-700 uppercase
                                  bg-gray-50
                                  dark:bg-gray-700
                                  dark:text-gray-400">
                    <tr>
                        <td className="w-auto table-auto p-4">🚨사고건수🚨</td>                      
                        <td className="px-6 py-3">💥부상 신고자수💥</td> 
                        <th className="px-6 py-3">⚠️경상자수⚠️</th>
                        <th className="px-6 py-3">🩼중상자수🩼</th>
                        <th className="px-6 py-3">☠️사망자수☠️</th>
                    </tr>
                </thead>
                <tbody>

                    {info}
                </tbody>
            </table>
        </div>
    </div>
    
  )
}
