import { useState } from "react";

export default function SignupStatePage () {
    const [ email, setEmail ] = useState('');
    const [ pwd, setPwd ] = useState('');
    const [ error, setError ] = useState('');

    function onChangeEmail (e) { setEmail(e.target.value); };

    function onChangePwd (e) { setPwd(e.target.value); };

    function onClickSignup() {
        if ( email === '' || pwd === "") {
            alert('값을 전부 입력해주세요.');
        } else if(email.includes('@') === false) {
            // alert('이메일의 형식이 올바르지 않습니다');
            // document.getElementById("error").innerText = "이메일의 형식이 올바르지 않습니다"
            setError('이메일의 형식이 올바르지 않습니다');
        } else {
            // Backend API(함수) 요청 후 alert가 발생해야한다.
            alert(`회원가입을 축하합니다! 안녕하세요${email}님`);
            console.log( "이메일:",email, "비밀번호:", pwd);
        }
    };

    return (
        <>
            이메일 :
            <input type="text" placeholder="이메일을 입력해주세요" onChange={onChangeEmail}/>
            <div id="error">{error}</div>
            비밀번호 :
            <input type="password" placeholder="비밀번호를 입력해주세요" onChange={onChangePwd}/>
            <button type="submit" onClick={onClickSignup}>회원가입</button>
        </>
    );
}