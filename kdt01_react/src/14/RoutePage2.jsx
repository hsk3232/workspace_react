import { useLocation, useSearchParams } from "react-router-dom"

export default function RoutePage2() {
  const loc = useLocation();
   console.log("locpathname=", loc.pathname);
   console.log("locsearch=", loc.search);

  //  let tm = loc.search.replace('?','').split('&');
  //  let item1 = tm[0].split('=')[1];
  //  let item2 = tm[1].split('=')[1]; 
  //  console.log(item1);

  const[sParmas] = useSearchParams();
  console.log('sParmas', sParmas);

  // const qlist = [...sParmas];
  // console.log('qlist', qlist);

  // let item1 = qlist[0][1];
  // let item2 = qlist[1][1];

  let item1 = sParmas.get('item1');
  let item2 = sParmas.get('item2');
  

  return (
    <div className="w-full">
      <div className="w-full h-16 bg-gray-200 flex justify-center items-center text-4xl mt-5">

       { !item1 ? "📜메뉴를 선택 하셨답니다.📜"
                      : `${item1}은 ${item2}입니다.`
                      }
      </div>

    </div>
  )
}
