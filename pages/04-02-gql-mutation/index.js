import { gql ,useMutation } from "@apollo/client"
import { useState } from "react";

const  CREATE_BOARD = gql`
    mutation{
        createBoard(
            writer: "김뭉개",
            title:"김뭉개의 아무 개",
            contents: "못된 장모치와와는 왜 못된 장모치와와와아아아앙~~~~!"
        ){ #받아올 데이터
            _id,
            number,
            message
        }
    }
`
export default function gqlMutatinaArgsPage() {
    // const [ createBoard ] = useMutation(CREATE_BOARD);
    const [ 나의함수 ] = useMutation(CREATE_BOARD);

    const onClickSubmit = async () => {
        // const result =  await createBoard(); 
        const result =  await 나의함수(); 
        console.log(result);
    }

    return(
        <>
            <button onClick={onClickSubmit}>GQL-API(동기Sync) 요청하기</button>
        </>
    )
}