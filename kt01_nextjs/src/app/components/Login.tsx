import TailButton from "../../UI/TailButton";
import { useRef } from "react"
import { useAtom } from "jotai";
import { isLogin } from "../../atoms/IsLoginAtom";
import { useRouter } from "next/navigation";
import { MouseEvent } from "react";

export default function Login() {

    const [, setLogin] = useAtom(isLogin);
    const emailRef = useRef<HTMLInputElement>(null);
    const pwdRef = useRef<HTMLInputElement>(null);

    const router = useRouter();

    const handleOk = (e:MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        // ref 변수를 쓸 때 값을 체크할 때는 ?를 써야 null 값이 안들어감.
        if (emailRef.current?.value == "") {
            alert("이메일을 입력하세요.");
            emailRef.current.focus();
            return;
        }

        if (pwdRef.current?.value == '') {
            alert("비밀번호를 입력하세요.");
            pwdRef.current?.focus();
            return;
        }

        if (emailRef.current?.value != 'hsk3232@pusan.ac.kr') {
            alert("해당 이메일이 존재하지 않습니다.");
            emailRef.current?.focus();
            return;
        }

        if (pwdRef.current?.value != '1234') {
            alert("비밀번호 오류입니다.");
            pwdRef.current?.focus();
            return;
        }

        localStorage.setItem("email", emailRef.current.value);
        setLogin(true);
        router.push('/');
    }

    return (
        <div>

            <form className="pt-20 max-w-sm mx-auto">
                <div className="mb-5">
                    <label for="email"
                        className="block m-2 text-xl font-medium text-gray-900"> email</label>
                    <input type="email" id="email"
                        ref={emailRef}
                        className="bg-gray-50 border border-gray-300 
                                        text-gray-900 text-sm rounded-lg 
                                        focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        placeholder="name@flowbite.com" required />
                </div>
                <div className="mb-5">
                    <label for="password"
                        className="block mb-2 text-xl font-medium text-gray-900">password</label>
                    <input type="password" id="password"
                        ref={pwdRef}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
                                        focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required />
                </div>

                <TailButton caption="login"
                    color="blue"
                    onClick={handleOk } />
            </form>
        </div>
    )
}
