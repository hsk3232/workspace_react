import TailButton from "../UI/TailButton";
import TailInput from "../UI/TailInput";

export default function GallerySearch({title, refInput, handleClick, handleReset }) {

  return (
    <div>
      <h2>{title}</h2>
      <TailInput type="text"
          id="txt1"
          ref={refInput}
          onFocus={() => { }} />
          
        <div className=" w-fit flex items-center">
          {<TailButton caption="확인"
            color="blue"
            onClick={handleClick} />}

          {<TailButton caption="취소"
            color="blue"
            onClick={handleReset} />}
        </div>
      </div>
  )
}
