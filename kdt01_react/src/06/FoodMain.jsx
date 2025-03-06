import FoodCard from "./FoodCard"
import Fooddata from "./Fooddata"
import Tailbutton from "../UI/TailButton"
import { useState } from "react"

export default function FoodMain() {
  const [tags, setTags] = useState([]);

  let category = Fooddata.map(item => item["운영주체 분류"].replace(' ', ''));
  category = [...new Set(category)];
  console.log(category);

  const handleCategory = (c) => {
    console.log("handleCategory", c)
    
    let tm = Fooddata.filter(item => item["운영주체 분류"].replace(' ', '') == c);
    console.log("handleCategory", tm)

    setTags(c

  }

  const bts = category.map(bt => <Tailbutton key={bt}
    caption={bt}
    color="blue"
    onClick={() => handleCategory(bt)}
  />);

  return (
    <div>
      <div>
        {bts}
      </div>

      <div className="w-11/12 h-full mt-10 mb-10 grid grid-rows-none grid-cols-1 gap-4 lg:grid-cols-2 lg:px-2" >
        {tags}

      </div>
    </div>
  )
}
