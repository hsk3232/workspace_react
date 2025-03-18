import { useState, useEffect } from "react"
import { FaArrowUp, FaArrowDown } from "react-icons/fa6";

export default function BoxOffice() {
    //화면에 랜더링 될 상태 변수 선언
    const [tags, Settags] = useState([]);
    const [info, Setinfo] = useState([]);

    //일일 박스 오피스 정보 가져오기
    const getFetchData = async () => {
        const mvApikey = import.meta.env.VITE_APP_MV_KEY;
        let dt = getYesterday().replaceAll('-', '');

        let url = `http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?`
        url = `${url}key=${mvApikey}&targetDt=${20250301}`;

        const resp = await fetch(url);
        const data = await resp.json();

        let boxList = data.boxOfficeResult.dailyBoxOfficeList;
        console.log(boxList);

        const handleClick = (item) => {
            let db = (
                <tr className="bg-white border-b text-center
                               border-gray-200
                               hover:bg-gray-50
                               dark:hover:bg-gray-600
                               text-black">
                  <td className="px-6 py-4  text-black" colSpan="7">
                    {item.rankOldAndNew === "OLD" ? (
                      <span>🧐{item.rankOldAndNew}🧐</span>
                    ) : (
                      <span>😘{item.rankOldAndNew}😘</span>
                    )}
                    [🎬 {item.movieNm} ] 📅 개봉일자: {item.openDt}, 🎟️ 상영횟수: {item.showCnt}
                  </td>
                </tr>
              );
        
          Setinfo(db); 
        } 
    

    let tm = boxList.map(item => 
                          <tr key={item.movieCd} onClick={() => handleClick(item)}
                                className="bg-white border-b 
                                            text-center dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600 cursor-pointer">
                                <td className="w-auto p-4">
                                  {item.rank}
                                </td>
                                <td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                  {item.movieNm}
                                </td>
                                <td className="px-6 py-4 ">
                                  {parseInt(item.salesAmt).toLocaleString()}
                                </td>
                                <td className="px-6 py-4 ">
                                  {parseInt(item.audiCnt).toLocaleString()}
                                </td>
                                <td className="px-6 py-4 ">
                                  {parseInt(item.salesAcc).toLocaleString()}
                                </td>
                                <td className="px-6 py-4 ">
                                  {parseInt(item.audiAcc).toLocaleString()}
                                </td>
                                <td className="px-6 
                                py-4 text-center 
                                inline-flex 
                                justify-center 
                                items-center">
                                  { parseInt(item.rankInten) > 0 ? <span className="text-red-600"><FaArrowUp /></span> 
                                    : parseInt(item.rankInten) < 0 ? <span className="text-blue-600"><FaArrowDown /></span> : ''}
                                  { item.rankInten == 0 ? '-' : Math.abs(item.rankInten)} 
                                  </td>
                              </tr>);

        Settags(tm);

    }

    //과거 일자만 선택 가능하게 만들기
    const getYesterday = () => {
        let dt = new Date();
        dt.setDate(dt.getDate() - 1);

        //연도
        let year = dt.getFullYear();

        //월
        let month = String(dt.getMonth() + 1).padStart(2, '0');
        // month는 +1을 해야 한다. 0~11까지의 값을 반환하기 때문에
        //    month = month <10 ? '0' + month : month //삼항연산자로 월을 2자리로 표기

        //일
        let day = String(dt.getDate()).padStart(2, '0');

        return (year + "-" + month + "-" + day);
    }


    //컴포넌트가 실행될 때 한 번 fetch를 통해 데이터를 가져오는 함수
    useEffect(() => {
        getFetchData();

    }, []);


    return (
        <div>
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
                        <td className="w-auto table-auto p-4">순위</td>                      
                        <td className="table-auto text-center px-6 py-3">영화명</td> 
                        <th className="table-auto px-6 py-3">  매출액 </th>
                        <th className="table-auto px-6 py-3"> 관객수</th>
                        <th className="table-auto px-6 py-3">누적 매출액</th>
                        <th className="table-auto px-6 py-3">누적 관객수</th>
                        <th className="table-auto px-6 py-3">
                        증감율
                        </th>
                        </tr>
                </thead>
                <tbody>

                    {tags}
                </tbody>
                <tfoot>

                    {info}
                </tfoot>
            </table>
        </div>
    )

}