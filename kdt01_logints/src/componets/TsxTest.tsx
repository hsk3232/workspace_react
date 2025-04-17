  // 타입 정의 => 반복적으로 쓰는 타입은 export 밖에 정의함.
  type nameT = [string, number];

  // 타입 정의 => 객체로 사용할 때 타입 정의
  type personT = {name:string; age:number};

  //그러나 사용은 interface로 많이 씀
  interface personT2 {name:string; age:number};

export default function TsxTest() {
  let name:string = "PNU";
  let age:number = 20;
  let names:string[] = ['Kim', 'Lee'];
  // let ages:Array<number> = [10, 30];
  
  // 데이터 타입이 다른 list를 튜플이라 함.
  // 튜플은 데이터 타입을 내가 정의해서 사용
  let nameTuple:nameT = ['Kim', 10];
  let nameTuple2:nameT = ['Hong', 20];



  //객체 형태로 사용방법
  let person1: { name: string; age: number } = {name: "Lee", age: 22, };
  let person2: { name: string; age: number } = {name: "Hong", age: 20, };
  
  // 사용자 정의 타입 정의 후 객체 형태로 사용
  let person3:personT= {name: 'Kim', age: 20 };
  let person4:personT2= {name: 'Kim', age: 20 };
  
  // return 되는 값의 타입을 써주는데, void의 경우 생략 가능
  const handleOk1 = ():void => {
    alert("안녕하세요!")
  };
  const handleOk2 = (name:string):void => {
    alert(`${name}님 안녕하세요.`)
  };

  //함수 타입 선언3: 인수가 있고 리턴이 있는 경우
  //인수에 타입 선언하고 리턴 값의 타입도 선언
  const helloStr = (name:string):string => {
    return `${name}님 안녕하세요`;
  };
  const handleOk3 = (name:string):void => {
    const s:string = helloStr(name);
    alert(s)
  };

  

  return (
    <div>
      <ul>
        <li>1. 이름 : {name}, 나이 : {age} </li>
        <li>
          2. 
          {names.map((item:string, idx:number) =>
            <span key={`item${idx}`}>{item}</span>)}
        </li>
        {/* 튜플 사용 */}
        <li>3. 이름 : {nameTuple[0]}, 나이 : {nameTuple[1]} </li>
        
        <li>4. 이름 : {nameTuple2[0]}, 나이 : {nameTuple2[1]} </li>
        <li>5. 이름 : {person1.name}, 나이 : {person1.age} </li>
        <li>6. 이름 : {person2.name}, 나이 : {person2.age} </li>

        <li>7. 이름 : {person3.name}, 나이 : {person3.age} </li>
        <li>8. 이름 : {person4.name}, 나이 : {person4.age} </li>
      </ul>

      <div className="grid grid-cols-3" >
        <button onClick={handleOk1} className="p-1 m-1 bg-amber-200 rounded-xl text-3xl hover:bg-blue-500 cursor-pointer" >😆</button>
        <button onClick={() =>handleOk2("지민")} className="p-1 m-1 bg-amber-200 rounded-xl text-3xl hover:bg-blue-500 cursor-pointer" >👍</button>
        <button onClick={() =>handleOk3("지민")} className="p-1 m-1 bg-amber-200 rounded-xl text-3xl hover:bg-blue-500 cursor-pointer" >🧐</button>
      </div>
    </div>
  )
}
