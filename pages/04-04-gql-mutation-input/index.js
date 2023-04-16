import { gql, useMutation } from "@apollo/client"
import { useState } from "react";

/* apollo-client_mutation 날리기: createBoard gql변수를 통해 데이터 전달 */
// playground에서 함수 확인 하면서 작성하자. //http://practice.codebootcamp.co.kr/graphql

const CREATE_BOARD = gql`
    mutation createBoard( $writer: String, $title: String, $contents: String) {  # 변수type을 적는 위치 # args로 값을 받아서 바로 넣을것이기 때문에, 작성하게될 변수의 타입을 꼭 적어준다
    createBoard(                                                                 # 실제로 우리가 전달할 변수 작성 위치
            writer: $writer,
            title: $title,
            contents: $contents 
        ){ #받아올 값
            _id,
            number,
            message 
        } 
    }
`

// Args : 인자 (입력하는 값을 받을거라는 의미.)
export default function gqlMutatinaArgsPage() {
    const [ writer, setWriter] = useState("");
    const [ title, setTitle] = useState("");
    const [ contents, setContents ] = useState("");
    
    
    const [ createBoard ] = useMutation(CREATE_BOARD);

    const onClickSubmit = async () => {
                // 스코프란? 식별자의 유효 범위
        // const writer = "qqq" // 여기에 있으면 현재 스코프 
        const result =  await createBoard({
            variables: { // variables = $, 같은 역할을 한다
                writer: writer,
                title: title,
                contents: contents
            }
        }); 
        console.log(result);
        alert(result.data.createBoard.message);
    }

    const onChangeWriter = (e) => {
        const sendValue = e.target.value;
        setWriter(sendValue);

    };

    const onChangeTitle = (e) => {
        const sendValue = e.target.value;
        setTitle(sendValue);

    };

    const onChangeContents = (e) => {
        const sendValue = e.target.value;
        setContents(sendValue);

    };


    return(
        <>
            <br /><br /><br /><br />
            <label>작성자 : &nbsp;
                <input type="text" onChange={onChangeWriter}/>
            </label><br />
            <label>제목 &nbsp;&nbsp;&nbsp;: &nbsp;
                <input type="text" onChange={onChangeTitle}/>
            </label><br />
            <label>내용 &nbsp;&nbsp;&nbsp;: &nbsp;
                <input type="text" onChange={onChangeContents}/>
            </label><br /><br />
            <button onClick={onClickSubmit}>GQL-API(동기Sync) 요청하기</button>
            <br />
            <hr />
            <img src="/04-04-gql.png" alt="실행 결과값" />
            <p>해당 결과값이 잘 들어갔는지 query함수를 이용해 확인하고 싶으면<br /> → Playground에서 확인. </p>
            
        </>
    )
}