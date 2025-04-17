import { useEffect, useState } from 'react';
import styles from './MyClockTime.module.css';


export default function MyClockTime(){
    const [currentTime, setCurrentTime] = useState(new Date());
    useEffect(() => {
        let tm = setInterval(() => setCurrentTime(new Date()), 1000);
        return () => clearInterval(tm);
    }
    , []); //두번째 인자가 빈 배열이면, 처음 한번만 실행됨.
  

    return (
        <div className='w-full text-center font-bold text-2xl'>
        <h2 className="text-3xl flex m-5 justify-center mt-10">⏰현재시각⏰ </h2>
        <div className={styles.pst}>
         {currentTime.toLocaleTimeString()} 
        
        </div>
        

    </div>
    )
}

//"text-5xl m-5 flex justify-center rounded-lg px-6 py-8 ring shadow-ml text-white  bg-sky-400 hover:bg-violet-600 focus:outline-2 focus:outline-offset-2 focus:outline-violet-500 active:bg-violet-700"