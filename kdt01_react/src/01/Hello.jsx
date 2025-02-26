import HelloDate from "./HelloDate"

function Hello(){

    //let name = "undefined";
    let name = "PNU"
    return (
       <>
    
        <h1 className="text-4xl">
           
            {name == "undefined"? "이름이 존재하지 않습니다." : name}
            
        </h1>
            <HelloDate />
        </>
    )
}

export default Hello

    /*{name && "이름이 존재하지 않습니다." }
            {/ 변수가 false면 실행 }
            {name}님 안녕하세요!😆 
            { 변수가 true면 실행행 }
            {name == "PNU" ? "이름이 존재하지 않습니다." : `${name} 님 반갑습니다.`*}
            {name && '${name} 님 반갑습니다.'}*/