import { useParams } from "react-router-dom"
export default function RoutePage1() {
  const {item1, item2} = useParams();
  
  console.log(useParams());
  console.log(item1, item2)

  return (
    <div className="flex justify-center items-center text-4xl mt-5">
      { item1 === 'm' ? "📜메뉴를 선택 하셨답니다.📜"
                      : `${item1}은 ${item2}입니다.`
                      }
    </div>
  )
}
