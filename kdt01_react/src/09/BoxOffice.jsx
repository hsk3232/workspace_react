import { useState, useEffect } from "react"

export default function BoxOffice() {
    //화면에 랜더링 될 상태 변수 선언
    const [tags, Settags] = useState([]);

    //일일 박스 오피스 정보 가져오기
    const getFetchData = async () => {
        let url = `http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?`
        url = `${url}key=9816ac54f242e98aade23df8af497672&targetDt=20250310`;

        const resp = await fetch(url);
        const data = await resp.json();

        let boxList = data.boxOfficeResult.dailyBoxOfficeList;
        console.log(boxList);
    }

    //과거 일자만 선택 가능하게 만들기
    const getYesterday = () => {
        let dt = new Date();
        dt.setDate(dt.getDate() - 1);

        //연도
        let year = dt.getFullYear();

        //월
        let month = String(dt.getMonth() + 1).padStart(2, '0');
        //    month = month <10 ? '0' + month : month //삼항연산자로 월을 2자리로 표기

        //일
        let day = String(dt.getDate()).padStart(2, '0');

        return (year + "-" + month + "-" + day);
    }
    console.log(getYesterday());
}


//컴포넌트가 실행될 때 한 번 fetch를 통해 데이터를 가져오는 함수
useEffect(() => {
    getFetchData();

}, []);

return (
    <div>
        BoxOffice
    </div>
)

