import TailCard from "../UI/TailCard"
import TailButton from "../UI/TailButton";
import { useState,  useEffect } from "react";

export default function Gallery() {

    const [tags, Settags] = useState([]);

    //키워드 입력
    const refInput = useRef;

    
      
   

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

    const getFetchData = async () => {
        const mvApikey = import.meta.env.VITE_APP_API_KEY
        
        let url = `https://apis.data.go.kr/B551011/PhotoGalleryService1/gallerySearchList1?`
        url = `${url}serviceKey=${mvApikey}&numOfRows=100&pageNo=1&MobileOS=ETC&MobileApp=AppTest&arrange=A&keyword=${encodeURI()}_type=json`;
        
        const resp = await fetch(url);
        const data = await resp.json();

        let dataList = data.response.body.items.item;
        let tm = dataList.map(item => <TailCard key={item.galContentId}
                                         title={item.galTitle} 
                                        subtitle={item.galPhotographyLocation}
                                        imgurl={item.galWebImageUrl}
                                        kws={item.galSearchKeyword} />
        );

        Settags(tm);
        console.log("tm", tm);
    
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
            getFetchData();
    
        }, []);



    return (
        <div className="w-10/12">
            <h2>한국관광공사 관광사진 정보</h2>
            <form className="p-5 flex items-center w-full mx-auto">
                <label htmlFor="search" className="sr-only">Search</label>
                <div className="relative w-10/12">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                strokeWidth="2" d="M21 21l-4.35-4.35M17 10.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0Z" />
                        </svg>
                    </div>


                    <input type="text" id="simple-search"
                        className="bg-gray-50 border border-gray-300 
                                     text-gray-900 text-sm rounded-lg 
                                     focus:ring-blue-500 focus:border-blue-500 
                                      block w-full ps-10 p-2.5"
                        //     dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 
                        // dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500
                        placeholder="관광지를 검색해 보세요!" required />
                </div>
                <div className=" w-fit flex items-center">
               { <TailButton caption="확인"
                    color="blue"
                    onClick={handleClick} />}
                
                {<TailButton caption="취소"
                    color="blue"
                    onClick={handleClick} />}
                </div>
            </form>

            

            <div className="grid grid-cols-3 gap-2">
            {tags}

            </div>   
        </div>
    )
}
