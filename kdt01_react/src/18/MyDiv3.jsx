import TailButton from "../UI/TailButton"
import { useCnt } from "./useCnt";

export default function MyDiv3() {
    const n = useCnt((state) => state.cnt);

    const increase = useCnt((state) => state.increase)
    const decrease = useCnt((state) => state.decrease)
    const handleSave = () => {
        localStorage.setItem("n", n);
    }


    return (

    <div className="w-full h-8/10 
    flex flex-col justify-start items-center
    p-10font-bold  bg-amber-400 
    text-2xl">
            <div className="w-5/10 grid grid-cols-2 gap-2 mb-5">
                <TailButton caption="증가"
                            color="blue"
                            onClick={increase} />

                <TailButton caption="감소"
                            color="blue"
                            onClick={decrease} />
                <TailButton caption="저장"
                            color="red"
                            onClick={handleSave} />   
            </div>
        </div>

    )
}
