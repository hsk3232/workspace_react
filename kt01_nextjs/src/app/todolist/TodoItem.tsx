import TailButton from "../../UI/TailButton";
import { Todo } from "../../types/Todo";

interface TodoItemProps {
    tags:Todo
    handleDelete:(id:string) => void; 
    handleToggle:(id:string) => void
}

export default function TodoItem({ tags, handleDelete, handleToggle }:TodoItemProps) {


    const handleDel = () => {
        handleDelete(tags.id)
    }

    return (
        <div>
            <div className="w-full flex justify-center items-center gap-2">
                <div className="w-90% flex flex-start items-center">
                    <div onClick={() => handleToggle(tags.id)} className="hover:cursor-pointer">
                        {tags.completed == "O" ? "✅" : "⬜"} {tags.text}</div>
                        <TailButton
                            caption="삭제"
                            color="blue"
                            onClick={handleDel} />
                    
                </div>
            </div>
        </div>

    )
}