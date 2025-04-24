// import TailButton from "../UI/TailButton";
// import TailInput from "../UI/TailInput";

// export default function GallerySearch({title, refInput, handleClick, handleReset }) {

//   return (
//     <div>
//       <h2>{title}</h2>
//       <TailInput type="text"
//           id="txt1"
//           ref={refInput}
//           onFocus={() => { }} />
          
//         <div className=" w-fit flex items-center">
//           {<TailButton caption="확인"
//             color="blue"
//             onClick={handleClick} />}

//           {<TailButton caption="취소"
//             color="blue"
//             onClick={handleReset} />}
//         </div>
//       </div>
//   )
// }


import TailInput from "../UI/TailInput";
import TailButton from "../UI/TailButton";

export default function GallerySearch({ title, refInput, handleClick, handleReset }) {
  return (
    <>
      <h1 className="text-2xl font-bold text-center my-6">{title}</h1>
      <div className ="p-5 flex items-center w-full mx-auto">
        <TailInput type="text" id="search" ref={refInput} onFocus={() => {}} />
        <div className ="w-1/4 flex items-center">
        <TailButton caption="확인" color="blue" onClick={handleClick} />
        <TailButton caption="취소" color="blue" onClick={handleReset} />
        </div>
      </div>
    </>
  );
}