import { useState, useEffect } from "react"

export default function Treffic() {
    //fetch된 전체 데이터
    const [tData, SetTdata] = useState([]);

    //대분류
    const [c1, setC1] = useState();    

    //datafetch
    const getFetchData = async () =>{
        const ApiKey = import.meta.env.VITE_APP_API_KEY
        let url = `https://api.odcloud.kr/api/15070282/v1/uddi:8449c5d7-8be5-4712-9093-968fc0b2d9fc?page=1&perPage=18&`
        url = `${url}serviceKey=${ApiKey}`

        const resp = await fetch(url);
        const data = await resp.json();
       
        SetTdata(data.data);
        }


    let category = tData.map(item => item["사고유형대분류"]);
    category = [...new Set(category)];
    console.log(category)

        // const handleCategory =(c) => {
        //     console.log("handleCategory", c)
        //     let tm = tData.filter(item => item["사고유형"] == c)
        //                     .map(item => {item["사망자수"]})

        //       setC1(tm)
        // }

        

        // const bts = category.map(bt => <Tailbutton key={bt}
        //     caption={bt}
        //     color="blue"
        //     onClick={() => handleCategory(bt)}
        //   />);
          

    




    useEffect(() => {
        getFetchData();
        }, []);

    useEffect(() => {
        console.log("tData", tData);
    }, [tData]);

  return (
    <div>
     {c1}
    </div>
  )
}
