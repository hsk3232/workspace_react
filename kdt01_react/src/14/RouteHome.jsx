import TailButton from "../UI/TailButton"
import { Link, useNavigate } from "react-router-dom"


export default function RouteHome() {

  const navigate = useNavigate();

  return (
    <div className="w-full h-full mb-10 mt-10 flex flex-col justify-center items-center">
       <ul className="w-70 flex-col mb-10">
          <li>
            <Link to="/p1/🍎/청송_사과가_👍" className="w-full inline-flex text-white bg-gradient-to-r
                 from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br 
                 focus:ring-4 focus:outline-none focus:ring-blue-300
                  dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg
                   dark:shadow-blue-800/80 font-medium rounded-4xl text-sm
                   text-center p-2 m-2 justify-center items-center round">사과 🍎</Link>
                </li>
                    
                <li >
                  <Link to="/p1/🍌/델몬트가_👍" className=" w-full inline-flex text-white bg-gradient-to-r from-red-400 via-red-500 
                to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none 
                focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 
                dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-4xl 
                text-sm text-center p-2 m-2 justify-center items-center">바나나 🍌</Link>
                </li>
                
                <li >
                 <Link to="/p1/🍇/국내산이_👍" className="w-full inline-flex text-gray-900 bg-gradient-to-r from-lime-200 
                via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none 
                focus:ring-lime-300 dark:focus:ring-lime-800 shadow-lg shadow-lime-500/50 dark:shadow-lg 
                dark:shadow-lime-800/80 font-medium rounded-4xl text-sm p-2 m-2 text-center justify-center items-center">포도 🍇</Link>
                </li> 
            </ul>

            <div className="w-70 ">
            <TailButton caption="사과 🍎" color="blue" onClick={() =>navigate("/p2?item1=🍎&item2=청송이👍")} />

            <TailButton caption="바나나 🍌" color="blue" onClick={() =>navigate("/p2?item1=🍌&item2=델몬트가👍")} />

            <TailButton caption="포도 🍇" color="blue" onClick={() =>navigate("/p2?item1=🍇&item2=국내산이👍")} />
            </div>
    </div>
  )
}
