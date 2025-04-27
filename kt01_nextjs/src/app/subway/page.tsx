//useRef, useState, useEffect를 쓸때는 반드시 use client를 써야함
'use client'
import sarea from "../../db/sarea.json"
import scode from "../../db/scode.json"
import { useRef, useState, useEffect } from "react"

interface Tdata {
  [key:string] : string;
}

interface Sarea {
  "코드":string;
  "측정소":string;
}

interface Scode {
  [key:string]: {
    "name": string;
    "unit": string;
    "description": string
  }
}

export default function Subway() {
  const [tdata, setTdata] = useState<Tdata | undefined>() ;
  const [tags, setTags] = useState<React.ReactNode[]>([]) ;

  const refSel = useRef<HTMLSelectElement>(null);
  const ops = (sarea as Sarea[]).map((item:Sarea) => <option key={item["코드"]} value={item["코드"]}>
                                  {item["측정소"]}
                                </option> );

  // getFetchData(refSel.current?.value)에 ?쓰고 code에 null 들어갈 수 있음으로 같이 ?함
  const getFetchData = async (code?:string) => {
    let url = `https://apis.data.go.kr/6260000/IndoorAirQuality/getIndoorAirQualityByStation?`;
    url = `${url}serviceKey=${process.env.NEXT_PUBLIC_API_KEY}`;
    url = `${url}&pageNo=1&numOfRows=10&resultType=json`;
    url = `${url}&controlnumber=${new Date().toISOString().slice(0, 10).replace(/-/g,'')}07`;
    url = `${url}&areaIndex=${code}`;

    const resp = await fetch(url) ;
    const data = await resp.json() ;
    setTdata(data.response.body.items.item[0])
  }

  const handleChange = () => {
    getFetchData(refSel.current?.value);
  }

  useEffect(() => {
    getFetchData("201193");
  } , []);

  useEffect(() => {
    if (!tdata) return ;

    console.log(Object.keys(scode))

    const itemKeys:string[] = Object.keys(scode as Scode) ;
    const scodeT = scode as Scode;

    let tm = itemKeys.map((item:string) => <div key={item} className="flex flex-col justify-center items-center">
                                    <div className="bg-white border-b text-center
                               border-gray-200
                               hover:bg-gray-50
                              
                               text-black">
                                    {scodeT[item]["name"]}
                                    </div>
                                    <div className=" text-gray-700 uppercase
                                  bg-gray-50">
                                    ({item})
                                    </div>
                                    <div className="py-2 font-bold text-md text-lime-800
                                                    border border-t-lime-800 w-full">
                                    {tdata[item]}
                                    {tdata[item] != "-" && scodeT[item]["unit"]}
                                    </div>
                                  </div>);

    setTags(tm);
    // console.log(tdata) ;
  }, [tdata]);
  return (
    <div className="w-full h-full mt-10  flex flex-col justify-start items-center">
      <div className="w-9/10 grid grid-cols-2 gap-4">
        <h1 className="text-2xl font-bold">측정소 선택</h1>
        <select id="sel1"
          onChange={handleChange}
          ref={refSel}
          className="bg-gray-50 border border-gray-300
                               text-gray-900 text-sm rounded-lg
                                focus:ring-blue-500 focus:border-blue-500 
                                block w-full p-2.5">
          { ops }
        </select>
      </div>
      <div className="w-9/10 grid grid-cols-9 gap4 mt-10">
          {tags}
      </div>
    </div>
     )
    }