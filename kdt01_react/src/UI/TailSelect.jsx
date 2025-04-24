import React, { forwardRef } from 'react';
const TailSelect = forwardRef(({ id, ops, handleChange }, ref) => {
    return (
        <div>

            <select id={id} ref={ref}
                onChange={handleChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
                             focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                
                {ops.map(item => <option key={item} value={item}>{item}</option>)}

            
            </select>

        </div>
    )
});


export default TailSelect