import React from 'react'

export default function TailInput({title, type, id, ref, onFouce}) {
    
  return (
    <div>
      <h2>한국관광공사 관광사진 정보</h2>
                  <form className="p-5 flex items-center w-full mx-auto">
                      <label htmlFor="search" className="sr-only">Search</label>
                      <div className="relative w-10/12">
                          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                              <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true"
                                  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
                                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                      strokeWidth="2" d="M21 21l-4.35-4.35M17 10.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0Z" />
                              </svg>
                          </div>
      
      
                          <input type="text" id="simple-search"
                              className="bg-gray-50 border border-gray-300 
                                           text-gray-900 text-sm rounded-lg 
                                           focus:ring-blue-500 focus:border-blue-500 
                                            block w-full ps-10 p-2.5"
                              //     dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 
                              // dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500
                              placeholder="관광지를 검색해 보세요!" required />
                      </div>
                      <div className=" w-fit flex items-center">
                     { <TailButton caption="확인"
                          color="blue"
                          onClick="" />}
                      
                      {<TailButton caption="취소"
                          color="blue"
                          onClick="" />}
                      </div>
                  </form>
    </div>
  )
}
