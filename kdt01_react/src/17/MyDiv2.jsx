import MyDiv3 from "./MyDiv3"
export default function MyDiv2() {

 
  return (
    <div className="w-full h-8/10 
    flex flex-col justify-start items-center
    p-5  bg-red-500 font-bold text-2xl">
    <div className="w-full text-left mb-5">
      Mydiv2
    </div>
    
    <MyDiv3 />
    </div>
  )
}
