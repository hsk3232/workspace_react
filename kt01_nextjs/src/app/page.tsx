'use client'

// Home.tsx의 역할과 같은 페이지
// page.tsx의 파일명, 상위폴더 명, 파일 위치 절대 바꾸면 안됨.
// 파일명(page)과 컴포넌트 명(Home)이 일치하지 않아도 됨.
// 
import { useAtom } from 'jotai';
import { isLogin } from '../atoms/IsLoginAtom';
import Login from '../app/components/Login';
import Image from "next/image";
export default function Home() {
  const [login] = useAtom(isLogin);
  return (
    <div className='w-full h-full bg-[#ffefc3]'>
      {
        login ? <div className=" p-10 flex min-h-full justify-between lg:px-8">
          <h1 className="text-xl font-bold">
            <span className="text-blue-700">{`${localStorage.getItem('email')}`}</span>
            님 로그인이 되었습니다.
          </h1>
          <div className="felx w-1/2 h-1/2 justify-center items-center">
          <Image src="/train.png" width={50} height={50} alt="지하철 대기정보" className="object-cover" />
          </div>
        </div>
          : <Login />
      }
    </div>
      
  )
}