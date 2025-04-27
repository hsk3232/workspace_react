import FoodCard from "./FoodCard"
import Fooddata from "./Fooddata.json"
import Tailbutton from "../../UI/TailButton"
import { FoodItem} from "../../types/Food"
import { useState } from "react"

export default function FoodMain() {
  const [tags, setTags] = useState<React.ReactNode>([]);

  let category = Fooddata.map((item:FoodItem) => item["운영주체 분류"].replace(' ', ''));
  category = [...new Set(category)];
  console.log(category);

  const handleCategory = (c:string) => {
    console.log("handleCategory", c)
    
    let tm = Fooddata.filter((item:FoodItem) => item["운영주체 분류"].replace(' ', '') == c)
              .map((item:FoodItem) => <FoodCard 
                                      key={item["사업장명"]} 
                                      obj={item} />);
    setTags(tm);


    //console.log("handleCategory", tm)
  }

  const bts = category.map(bt => <Tailbutton key={bt}
    caption={bt}
    color="blue"
    onClick={() => handleCategory(bt)}
  />);

  return (
    <div className="w-full h-full flex flex-col items-center">
      <div>
        {bts}
      </div>

      <div className="w-11/12 h-full mt-10 mb-10 grid grid-rows-none grid-cols-1 gap-4 lg:grid-cols-2 lg:px-2" >
        {tags}

      </div>
    </div>
  )
}
