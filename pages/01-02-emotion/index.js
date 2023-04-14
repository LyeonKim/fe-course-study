import { Hello, EmailInput } from '../../styles/emotion'

export default function Emotion() {

    return(
        <div>
            <Hello>안녕허세욘</Hello>
            <EmailInput type="text" placeholder="이메일을 입력하세요" />
            <button type="submit">클릭</button>
        </div>
    )
}