import FoodCard from "./FoodCard"
import Fooddata from "./Fooddata"

export default function FoodMain() {

  const tags = Fooddata.map(item => <FoodCard key={item["사업장명"]} 
                                              obj={item} />

  );

  return (
    <div className="w-11/12 h-full mt-10 mb-10 grid grid-rows-none grid-cols-1 gap-4 lg:grid-cols-2 lg:px-2" >
       {tags}
      
    </div>
  )
}
