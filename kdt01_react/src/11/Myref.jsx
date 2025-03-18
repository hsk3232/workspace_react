import { useState, useEffect, useRef } from "react";
import TailButton from "../UI/TailButton";

export default function Myref() {
    //ref 변수 선언
    const refInput1 = useRef();
    const refInput2 = useRef();
    const refSelect = useRef();
    const refResult = useRef();

    //컴포넌트 생성시 입력상자에 포커스
    useEffect(()=>{
        refInput1.current.focus();

    }, []);
    

    //Ref 핸들
    const handleRefCnt = (e) => {
        e.preventDefault();
        //공백 체크

        if(refInput1.current.value == ''){
            alert('첫번째 값을 입력하세요.');
            refInput1.current.focus();
            return;
        }

        if(refInput2.current.value == ''){
            alert('두번째 값을 입력하세요.');
            refInput1.current.focus();
            return;
        }

        const num1 = parseFloat(refInput1.current.value);
        const num2 = parseFloat(refInput2.current.value);
        const operator = refSelect.current.value;
        let result;
        switch (operator) {
            case '+':
                result = num1 + num2;
                break;
            case '-':
                result = num1 - num2;
                break;
            case '*':
                result = num1 * num2;
                break;
            case '/':
                result = num1 / num2;
                break;
            default:
                result = 0;
        }
        refResult.current.value = result;
        console.log("refResult", refResult.current.value)
    }

    //입력초기화
    const handleInit = () => {
        refInput1.current.value = '';
        refInput2.current.value = '';
        refSelect.current.value = '';
        refResult.current.value = '+';

    }

    return (
        <div className="w-full flex justify-center items-center mt-10">
            <div className="w-10/12 flex justify-center items-center">
                <form className="w-10/12 grid grid-cols-5 gap-4 bg-gray-200 px-20 py-5">
                    <input type="number" id="txt1"
                        ref={refInput1}
                        onFocus={handleInit}
                        className=" bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg
                                     focus:ring-blue-500
                                     focus:border-blue-500 block w-full ps-10 p-2.5 
                                     dark:bg-gray-700 dark:border-gray-600
                                      dark:placeholder-gray-400 dark:text-white
                                      dark:focus:ring-blue-500 dark:focus:border-blue-500" />

                    <select id="sel" 
                    ref={refSelect}
                    classNmae="bg-gray-50 border border-gray-700 text-gray-900 text-sm rounded-lg focus:ring-blue-500 
                                                focus:border-blue-500 block w-1/2 ps-10 p-2.5 
                                                dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white
                                                dark:focus:ring-blue-500 dark:focus:border-blue-500
                                                ">
                        <option value="+" defaultValue>+</option>
                        <option value="-">-</option>
                        <option value="*">*</option>
                        <option value="/">/</option>
                    </select>

                    <input type="number" id="txt2"
                     ref={refInput2}
                        className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500
                                     focus:border-blue-500 block w-full ps-10 p-2.5 
                                     dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white
                                      dark:focus:ring-blue-500 dark:focus:border-blue-500" />

                    <TailButton caption="="
                        color="blue"
                        onClick={handleRefCnt} />
                    <input type="number" id="set"
                    ref={refResult}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
                                     focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 
                                     dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
                                      dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" readOnly/>
                </form>
            </div>
        </div>
    )
}
