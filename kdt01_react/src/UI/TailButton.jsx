export default function TailButton({caption, color, onClick}) {
    const bg ={
      "blue": "bg-blue-500",
      "red": "bg-red-500", 
       "yellow": "bg-yellow-500"
    }

    const bgHover ={
      "blue": "hover:bg-blue-400",
      "red": "hover:bg-red-400", 
      "yellow": "hover:bg-yellow-400"
    }


  return (
    <button className={`p-2 m-2 text-base hover:font-bold text-white ${bg[color]} ${bgHover[color]}`} onClick={onClick}>
      {caption}
    </button>
  )
}
