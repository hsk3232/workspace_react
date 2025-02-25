import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { FcApproval } from "react-icons/fc";

function App() {
  return (
    <div className="w-full h-full bg-gray-50  dark:bg-gray-900">
      <div className="w-flex flex justify-center items-center p-10">
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo " alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1 className= 'font-bold text-3xl dark:text-white drop-shadow-lg'><a className=' underline decoration-indigo-500'>Vite </a> + <a className='underline decoration-sky-500'>React</a></h1>
      <div className="card drop-shadow-lg">
        
        <p className= 'inline-flex items-center justify-center dark:bg-gray-800 rounded-lg px-6 py-8 ring shadow-xl ring-gray-900/5 dark:text-white font-bold text-3xl'>
         부산대학교 홍지민  <FcApproval />
        </p>
      </div>
      <p className="flex items-center justify-center">
       
      </p>
    </div>
  )
}

export default App
