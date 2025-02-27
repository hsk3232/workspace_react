 //import Hello from "./01/Hello" //만든 Hello 보냄
// import HelloDate from "./01/HelloDate" // 하위 컴포넌트를 이렇게 바로바로로 사용하는 것도 됨.
// import MyClock from './02/MyClock';
import { FcHome } from "react-icons/fc";
// import MyDiv1 from "./03/MyDiv1";
import MyList from "./04/MyList";


function App() {
  return ( // return문 안은 반드시 jsx 문법을 사용해야 함.
    <div className="w-full xl:w-8/10 h-screen mx-auto">

    <header className="w-full h-20 bg-gray-950 px-10 flex justify-between items-center">
      

      <h1 className="text-4xl font-bold text-amber-50">KDT01 👻</h1>
      <div className="text-3xl font-bold">
      <FcHome />
      </div>

    </header>
    <main className="w-full h-full flex flex-col justify-start items-center overflow-y-auto "> 
       {/* <MyDiv1 /> */}
       {/* <Hello /> */}
       {/* <MyClock /> */}
       <MyList />
       


    </main>
    <footer className="w-full h-20 bg-gray-200 px-10 inline-flex justify-between items-center">
      <h3 className="m-10 flex justify-start">[K-Digital 부산대 25-1회차] AI 데이터 분석 풀스택 웹 개발자 양성과정</h3>
      <h4 className="m-5 inline-flex justify-between"> ☎️ 051-512-0311  | ✉️ www.pusan.ac.kr </h4>


    </footer>

    </div>
    // 다만, <Hello /> 이 안에 <HelloDate/>를 넣어 쓰는 것은 안됨.
  )
}

export default App