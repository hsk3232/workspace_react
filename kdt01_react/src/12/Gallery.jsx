import TailCard from "../UI/TailCard"
import TailButton from "../UI/TailButton";
import GallerySearch from "./GallerySearch";
import { useState,  useEffect, useRef } from "react";

export default function Gallery() {

    const [tags, Settags] = useState([]);

    //키워드 입력
    const refInput = useRef();

    
      
   

    // const item = {
    //     "galContentId": "2988721",
    //     "galContentTypeId": "17",
    //     "galTitle": "태종대유원지",
    //     "galWebImageUrl": "http://tong.visitkorea.or.kr/cms2/website/21/2988721.jpg",
    //     "galCreatedtime": "20230519164047",
    //     "galModifiedtime": "20230519164107",
    //     "galPhotographyMonth": "202206",
    //     "galPhotographyLocation": "부산광역시 영도구 동삼동",
    //     "galPhotographer": "한국관광공사 송재근",
    //     "galSearchKeyword": "태종대유원지, 부산광역시 영도구, 명승 제17호, 태종사, 절, 사찰, 종교, 불교"
    // }

    //data fetch
    const getFetchData = async () => {
        const mvApikey = import.meta.env.VITE_APP_API_KEY
        
        let url = `https://apis.data.go.kr/B551011/PhotoGalleryService1/gallerySearchList1?`
        url = `${url}serviceKey=${mvApikey}&numOfRows=100&pageNo=1&MobileOS=ETC&MobileApp=AppTest&arrange=A`
        url = `${url}&keyword=${encodeURI()}_type=json`;
        


        const resp = await fetch(url);
        const data = await resp.json();

        let dataList = data.response.body.items.item;
        let tm = dataList.map(item => <TailCard key={item.galContentId}
                                         title={item.galTitle} 
                                        subtitle={item.galPhotographyLocation}
                                        imgurl={item.galWebImageUrl}
                                        kws={item.galSearchKeyword} 
                                        />);

        Settags(tm);
    }

    //확인
    const handleClick = () => {

        if (refInput.current.value  == '') {
            alert("키워드를 입력하세요.") ;
            refInput.current.focus();
            return;
          }
        
        getFetchData();
    }

  //취소
    const handleReset = () => {
    refInput.current.value = '' ;
    refInput.current.focus();
         Settags([]);
  }

    useEffect(() => {
        refInput.current.focus();
    
        }, []);



    return (
        <div className="w-10/12">
             <GallerySearch title = "한국관광공사 관광사진 정보"
                    refInput = {refInput}
                    handleClick ={handleClick}
                    handleReset ={handleReset} />
            <div className="grid grid-cols-3 gap-2">
            {tags}

            </div>   
        </div>
    )
}
