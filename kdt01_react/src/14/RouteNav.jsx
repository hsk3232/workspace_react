import { Link } from "react-router-dom"

export default function RouteNav() {
    return (
        <div>
            <ul className="w-full h-16 bg-gray-900 mb-10 flex justify-center items-center">
            <label htmlFor="Home" className="inline-block sr-only">Home</label>
                <li >
                               
                    <Link to="/" className="inline-block mr-5 text-white bg-gradient-to-r
                             from-purple-500 to-pink-500 hover:bg-gradient-to-l 
                             focus:ring-4 focus:outline-none focus:ring-purple-200 
                             dark:focus:ring-purple-800 font-bold rounded-lg 
                             text-sm px-5 py-2.5 text-center 
                             me-2 mt-2 mb-2">Home</Link>
                </li>
                    
                <li >
                    <Link to="/p1/m/m" className="mr-5 text-white bg-gradient-to-br
                 from-pink-500 to-orange-400 hover:bg-gradient-to-bl 
                 focus:ring-4 focus:outline-none focus:ring-pink-200
                  dark:focus:ring-pink-800 font-bold 
                  rounded-lg text-sm px-5 py-2.5 text-center 
                  me-2 mt-2 mb-2">Page1</Link></li>
                
                <li >
                    <Link to="/p2" className="text-gray-900 bg-gradient-to-r
                 from-teal-200 to-lime-200 hover:bg-gradient-to-l
                  hover:from-teal-200 hover:to-lime-200 focus:ring-4 
                  focus:outline-none focus:ring-lime-200
                   dark:focus:ring-teal-700 font-bold 
                   rounded-lg text-sm px-5 py-2.5 text-center 
                   me-2 mt-2 mb-2">Page2</Link></li>

            </ul>



        </div>
    )
}
