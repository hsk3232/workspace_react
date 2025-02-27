import MyListItem from "./MyListItem"
import MyListData from "../04/MyListData.json"

export default function MyList() {
  let show = true;
  let tags = MyListData.map( item => <MyListItem 
                                      key={item.title} 
                                      t={item.title} 
                                      i={item.imgUrl} 
                                      c={item.content}
                                      show={show}
                                      />); //콜백 함수는 반드시 return 있어야 함.
  //(item) => {return item.title} 이것과 같음, 아이템은 인수가 1개이고 리턴문 1개 니까 위처럼 생략 가능
  //arrays map 문법 기억해야 함.
  // let tm = item.title + item.content;
  // return tm
 
    const data = {
        "title" : "HTML",
        "imgUrl" : "../../public/html.png", 
        "content": "HTML(HyperText Markup Language)은 웹을 이루는 가장 기초적인 구성 요소로, 웹 콘텐츠의 의미와 구조를 정의할 때 사용"
}
  return (
    <div div className="w-full h-full grid grid-cols-1 gap-4 lg:grid-cols-2 lg:px-2">
      {tags}
    </div>
  )
}

