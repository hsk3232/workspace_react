'use client'
import Image from "next/image";

// page.tsx의 파일명, 상위폴더 명, 파일 위치 절대 바꾸면 안됨.
// 파일명(page)과 컴포넌트 명(Home)이 일치하지 않아도 됨.
// 
export default function Home() {
  localStorage.setItem("email", "hsk3232@pusan.ac.kr");
  return (
    <div className='w-full h-full bg-[#ffefc3]'>
    {
      <div className=" p-10 flex min-h-full justify-between lg:px-8">
        <h1 className="text-xl font-bold">
          <span className="text-blue-700">{`${localStorage.getItem('email')}`}</span>
          님 로그인이 되었습니다.
        </h1>

        <Image src ="/train3.png" alt = "react" width ={400} height={50}></Image>
    
        </div>
    }
      </div>

  
  );
}
