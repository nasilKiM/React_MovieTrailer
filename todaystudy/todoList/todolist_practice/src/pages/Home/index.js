import { Link } from "react-router-dom";
import LoginForm from "./components/Form/Login";
import SignUpForm from "./components/Form/SignUp";

function HomePage(){
    let form = 'login';
    const onFormChange = (e) => {
        const {innerText} = e.target;   // toLowerCase()를 쓰기 위해서 {} 사용.
        console.log(innerText)
        form = innerText.toLowerCase();
        console.log(form);
    }
    return(
        <div>
            <header>
                <div onClick={onFormChange}>LOGIN</div>
                <div onClick={onFormChange}>SIGN</div>
            </header>
            {form === 'login' ? <LoginForm/> : <SignUpForm/>}   {/* 삼항연산자 */}
            <Link to='/todo'>라우터로 투두페이지 이동</Link> {/* Link to 는 spa 특징으로 미리 데이터를 캐싱해두었다가 필요한 때에 불러오는 것으로 네트워크 확인시 캐싱 내역 변동사항 없음 (a href=~~ 태그와 반대*/}
        </div>
    )
}

export default HomePage;