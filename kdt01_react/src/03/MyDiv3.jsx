export default function MyDiv3({d1, d2, d3}) {
    return (

    <div className="w-full h-8/10 
    flex flex-col justify-start items-center
    p-10 bg-sky-500 font-bold
    text-2xl">
            <div className="w-full text-left mb-5">
                {d1}→ {d2} →{d3}
            </div>
        </div>

    )
}
