// import TailCard from "../UI/TailCard"
// import GallerySearch from "./GallerySearch";
// import { useState,  useEffect, useRef } from "react";

// export default function Gallery() {
//     //state 변수
//     const [tags, setTags] = useState([]);

//     //키워드 입력
//     const refInput = useRef();

//     //data fetch
//     const getFetchData = async () => {
//         const mvApikey = import.meta.env.VITE_APP_API_KEY
        
//         let url = `https://apis.data.go.kr/B551011/PhotoGalleryService1/gallerySearchList1?`
//         url = `${url}serviceKey=${mvApikey}&numOfRows=100&pageNo=1&MobileOS=ETC&MobileApp=AppTest&arrange=A`
//         url = `${url}&keyword=${encodeURI()}_type=json`;
        


//         const resp = await fetch(url);
//         const data = await resp.json();

//         let dataList = data.response.body.items.item;
//         let tm = dataList.map(item => <TailCard key={item.galContentId + idx}
//                                          title={item.galTitle} 
//                                         subtitle={item.galPhotographyLocation}
//                                         imgurl={item.galWebImageUrl}
//                                         kws={item.galSearchKeyword} 
//                                         />);

//     setTags(tm);
//     }

//     //확인
//     const handleClick = () => {
//         if (refInput.current.value  == '') {
//             alert("키워드를 입력하세요.") ;
//             refInput.current.focus();
//             return;
//           }
        
//         getFetchData();
//     }

//   //취소
//     const handleReset = () => {
//     refInput.current.value = '' ;
//     refInput.current.focus();
//     setTags([]);
//   }

//     // 랜더링 시 포커스
//     useEffect(() => {
//         refInput.current.focus();
    
//         }, []);



//     return (
//         <div className="w-10/12">
//              <GallerySearch title = "한국관광공사 관광사진 정보"
//                     refInput = {refInput}
//                     handleClick ={handleClick}
//                     handleReset ={handleReset} />
//             <div className="grid grid-cols-3 gap-2">
//             {tags}

//             </div>   
//         </div>
//     )
// }

import TailCard from "../UI/TailCard";
import GallerySearch from "./GallerySearch";
import { useState, useEffect, useRef } from "react";

export default function Gallery() {
  const [cards, setCards] = useState([]);
  const refInput = useRef();

  const getFetchData = async (keyword = "해운대") => {
    const apiKey = import.meta.env.VITE_APP_API_KEY;
    let url = `https://apis.data.go.kr/B551011/PhotoGalleryService1/gallerySearchList1?`;
    url += `serviceKey=${apiKey}&numOfRows=100&pageNo=1&MobileOS=ETC&MobileApp=AppTest&arrange=A`;
    url += `&keyword=${encodeURIComponent(keyword)}&_type=json`;

    try {
      const resp = await fetch(url);
      const data = await resp.json();

      const items = data?.response?.body?.items?.item || [];

      const tm = items.map((item, idx) => (
        <TailCard
          key={item.galContentId + idx}
          title={item.galTitle}
          subtitle={item.galPhotographyLocation}
          imgurl={item.galWebImageUrl}
          kws={item.galSearchKeyword}
        />
      ));
      setCards(tm);
    } catch (error) {
      console.error("fetch error:", error);
      alert("데이터를 불러오는 중 오류가 발생했어요.");
    }
  };

  const handleClick = () => {
    const keyword = refInput.current.value.trim();
    if (keyword === "") {
      alert("키워드를 입력하세요.");
      refInput.current.focus();
      return;
    }
    getFetchData(keyword); // ✅ 입력된 키워드로 호출
  };

  const handleReset = () => {
    refInput.current.value = "";
    refInput.current.focus();
    setCards([]);
  };

  useEffect(() => {
    getFetchData(); // keyword 없이 전체 데이터 불러옴
  }, []);

  useEffect(() => {
    refInput.current?.focus();
  }, []);

  return (
    <div className="w-10/12 mx-auto">
      <GallerySearch
        title="한국관광공사 관광사진 정보"
        refInput={refInput}
        handleClick={handleClick}
        handleReset={handleReset}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        {cards}
      </div>
    </div>
  );
}