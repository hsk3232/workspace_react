import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from "./componets/Login";
import Home from './componets/Home';
import Nav from './componets/Nav';
import Subway from './componets/Subway';
import TodoList from "./componets/TodoList";
// import TsxTest from "./componets/TsxTest";
import MyClock from './componets/02/MyClock';
import FoodMain from "./componets/06/FoodMain";
import Lotto from "./componets/05/Lotto";


function App() {
  return (

    <BrowserRouter>
      <div className="w-full xl:w-8/10 h-screen mx-auto flex flex-col">
        <Nav />


        <main className="w-full flex flex-grow flex-col justify-start items-center overflow-y-auto">
        

          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/subway' element={<Subway />} />
            <Route path='/todolist' element={<TodoList />} />
            <Route path='/clock' element={<MyClock />} />
            <Route path='/lotto' element={<Lotto />} />
            <Route path='/food' element={<FoodMain />} />
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
