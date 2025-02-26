function MyClockTime(){
    const current = new Date();

    return (
        <>
        <h2 className="text-3xl flex justify-center mt-10">⏰현재시각⏰ </h2>
        <div className="text-5xl m-5 flex justify-center rounded-lg px-6 py-8 ring shadow-ml text-white  bg-sky-400 hover:bg-violet-600 focus:outline-2 focus:outline-offset-2 focus:outline-violet-500 active:bg-violet-700">
         {current.toLocaleTimeString()} 
         </div>
        </>
    )
} export default MyClockTime