import { gql ,useMutation } from "@apollo/client"

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
    // const [ createBoard ] = useMutation(CREATE_BOARD);
    const [ 나의함수 ] = useMutation(CREATE_BOARD);

    const onClickSubmit = async () => {
        const result =  await 나의함수({
            variables: { // variables = $, 같은 역할을 한다
                writer: "마무개" , 
                title: "집가고싶다" , 
                contents: "저는 집에갈겁니다"
            }
        }); 
        console.log(result);
        alert(result.data.createBoard.message);
    }

    return(
        <>
            <button onClick={onClickSubmit}>GQL-API(동기Sync) 요청하기</button>
            
        </>
    )
}