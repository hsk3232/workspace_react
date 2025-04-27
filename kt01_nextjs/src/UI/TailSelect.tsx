import { ChangeEvent, RefObject } from "react";

interface TailSelectProps {
    id: string;
    ops: string[];
    refSel: RefObject<HTMLSelectElement | null>;
    handleChange: (e:ChangeEvent<HTMLSelectElement>) => void ;
}

export default function TailSelect({ id, ops, refSel, handleChange }:TailSelectProps) {
    return (
        <div>

            <select id={id} ref={refSel}
                onChange={handleChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
                             focus:ring-blue-500 focus:border-blue-500 block w-30 p-2.5 text-center">
                
                {ops.map((item:string) => <option key={item} value={item}>{item}</option>)}

            </select>

        </div>
    )
}
