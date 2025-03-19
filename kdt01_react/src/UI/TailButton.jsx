export default function TailButton({caption, color, onClick}) {
    const bg ={
      "blue": "bg-blue-500",
      "red": "bg-red-500", 
       "yellow": "bg-yellow-500"
    }

    const bgHover ={
      "blue": "hover:bg-red-500",
      "red": "hover:bg-yellow-500", 
      "yellow": "hover:bg-red-500"
    }


  return (
    <button className={`w-fit p-2 m-2 text-base hover:font-bold rounded-lg text-white ${bg[color]} ${bgHover[color]}`} onClick={onClick}>
      {caption}
    </button>
  )
}
