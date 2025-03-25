 //import Hello from "./01/Hello" //만든 Hello 보냄
// import HelloDate from "./01/HelloDate" // 하위 컴포넌트를 이렇게 바로바로로 사용하는 것도 됨.
import MyClock from './02/MyClock';
import { FcHome } from "react-icons/fc";
// import MyDiv1 from "./03/MyDiv1";
//import MyList from "./04/MyList";
import Lotto from "./05/Lotto";
import FoodMain from "./06/FoodMain";
//import MyToggle from "./07/MyToggle";
//import MyEffect from "./08/MyEffect";
import BoxOffice from "./09/BoxOffice";
import Treffic from "./10/treffic";
//import Myref from "./11/Myref";
import Gallery from "./12/Gallery";
import Festival from "./13/Festival";
//import RouteMain from "./14/RouteMain"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import TailNave from './UI/TailNave';
import { Link } from "react-router-dom"


function App() {



  return ( // return문 안은 반드시 jsx 문법을 사용해야 함.
    <BrowserRouter>
    <div className="w-full xl:w-8/10 h-screen mx-auto flex flex-col">

    <header className="w-full min-h-20 bg-gray-950 px-10 flex justify-between items-center">

      <h1 className="text-4xl font-bold text-amber-50">KDT01 👻</h1>
      
      <div >
        <Link to="/" className="text-3xl font-bold"><FcHome /></Link>
      </div>

    </header>
    <main className="w-full pt-10 flex flex-grow flex-col justify-start items-center overflow-y-auto"> 
       {/* <MyDiv1 /> */}
       {/* <Hello /> */}
       {/* <MyClock /> */}
       {/* <MyList /> */}
       {/* <Lotto /> */}
       {/* <FoodMain /> */}
       {/* <MyToggle /> */}
       {/* <MyEffect /> */}
       {/* <BoxOffice /> */}
       {/* <Treffic /> */}
      {/* <Myref /> */}
      {/* <Gallery /> */}
      {/* <Festival /> */}
      {/* <RouteMain /> */}

      
        <TailNave />
      
     
        <Routes>
          <Route path="/" element={ <MyClock />} />
          <Route path="/lotto" element={ <Lotto /> } />
          <Route path="/boxOffice" element={ <BoxOffice />} />
          <Route path="/treffic" element={ <Treffic />} />
          <Route path="/FoodMain" element={ <FoodMain />} />
          <Route path="/Gallery" element={ <Gallery />} />
          <Route path="/Festival" element={ <Festival />} />
           
        </Routes>   
    

    </main>

    <footer className="w-full min-h-20 bg-gray-200 px-10 inline-flex justify-between items-center">
      <h3 className="m-10 flex justify-start">[K-Digital 부산대 25-1회차] AI 데이터 분석 풀스택 웹 개발자 양성과정</h3>
      <h4 className="m-5 inline-flex justify-between"> ☎️ 051-512-0311  | ✉️ www.pusan.ac.kr </h4>
    </footer>

    </div>
    

    </BrowserRouter>
  )
}

export default App

// 다만, <Hello /> 이 안에 <HelloDate/>를 넣어 쓰는 것은 안됨.