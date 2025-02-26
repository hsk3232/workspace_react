import MyDiv2 from "./MyDiv2"

export default function MyDiv1() {
    let d1 = "🍉"
    let d2 = "🍪"
    let d3 = "🍩"
  return (
    <div className="w-full h-8/10 
    flex flex-col
    p-10
    bg-amber-400 
    font-bold
    text-2xl ">
     <div className="w-full text-left mb-5">{d1}</div> 

     <MyDiv2 D1={d1} D2={d2} D3={d3}/>
    </div>
  )
}
