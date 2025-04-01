import TailButton from "../UI/TailButton"
import { useAtom } from "jotai";
import { cntAtom } from "../17/CountAtoms";
export default function MyDiv3() {
    const [n, setN] = useAtom(cntAtom)


    return (

    <div className="w-full h-8/10 
    flex flex-col justify-start items-center
    p-10font-bold  bg-amber-400 
    text-2xl">
            <div className="w-5/10 grid grid-cols-2 gap-2 mb-5">
                <TailButton caption="증가"
                            color="blue"
                            onClick={() => setN(n+1)} />

                <TailButton caption="감소"
                            color="blue"
                            onClick={() => setN(n-1)} />      
            </div>
        </div>

    )
}
