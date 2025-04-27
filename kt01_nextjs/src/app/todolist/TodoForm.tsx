import { completedT } from "../../types/Todo"
import TailButton from "../../UI/TailButton"
import TailSelect from "../../UI/TailSelect"
import { useEffect, useRef } from "react"
import { MouseEvent } from "react"


interface TodoFormProps { 
    addTodo: (text:string, completed:string) => void
}

// TodoList에서 TodoForm을 사용하기 위해서 props로 addTodo를 받아옴
export default function TodoForm({ addTodo }:TodoFormProps) {
    const textRef = useRef<HTMLInputElement>(null);
    const refSel = useRef<HTMLSelectElement>(null);

    //인수 e가 마우스 이벤트로 일어나는 것임을 알려 주는 것
    const handleAdd = (e:MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        if (textRef.current?.value == "") {
            alert("할 일을 입력하지 않았어요😆")
            return;
        }
        //text 입력값이 있다면,
        if(textRef.current)
            // text를 입력값과 completedT로 선언(지정)한 타입 값 2개 중 하나를 입력 받아라
            addTodo(textRef.current?.value, refSel.current?.value as completedT)
    }

    const handleEdit = (e:MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        if (textRef.current?.value) {
            textRef.current.value = ""
        } else {
            alert("지울 내용이 없어요🧐")
        }
    }

    useEffect(() => { 
        if (refSel.current) {  // 이렇게 방어 코드
            refSel.current.value = "X" //초기값 설정
        }
    }, [])  



    return (
        <div className="w-full mt-10 flex justify-between items-center rounded-xl bg-sky-200 gap-2">
            <div className="w-1/5 pl-3">
            <TailSelect 
                id="sel"
                refSel = {refSel}
                handleChange ={() => {}} //쓸 필요 없어서 빈 함수로 대체
                ops={["O", "X"]}
            />
            </div>

            <input type="text"
                ref={textRef}
                className="w-3/5 h-10 bg-white border border-gray-300 rounded-md" placeholder="✏️ 할 일을 적어보아요 ✏️" />
                
            <div className="w-1/5 pl-3 flex">
            <TailButton  
                caption="추가"
                color="blue"
                onClick={handleAdd} />

            <TailButton
                caption="재입력"
                color="red"
                onClick={handleEdit} />
            </div>
        </div>
    )
}
