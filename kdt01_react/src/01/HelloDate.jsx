function HelloDate(){
    const current = new Date();
//Date 객체에 포함된 method를 사용하려면 객체를 바로 넣을 수는 없고 객체.method를 붙여서 써야 한다.

    const tStyle ={
        backGroundColor: "blue",
        padding : "5px",
        fontSize: "large",

    }
    return ( // 리턴문 안에 들어가는 문법은 jsx 문법 / 함수만 들어가는 것이 아니다. 
          /* 객체를 바로 넣을 수는 없고, 객체.method를 붙여서 중괄호 {} 안에 넣음 */
        <div style={tStyle}>
            현재시각 : 
            <span style={{color:"blue", fontWight: "bold",}}> {current.toLocaleTimeString()} </span>
          

        </div>
        
    )
}

export default HelloDate