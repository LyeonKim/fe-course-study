import { gql, useMutation } from "@apollo/client"
import { useState } from "react";

const CREATE_PROPDUCT = gql`
    mutation createProduct( $seller: String, $createProductInput: CreateProductInput! ){  # 변수type을 적는 위치 # args로 값을 받아서 바로 넣을것이기 때문에, 작성하게될 변수의 타입을 꼭 적어준다
        createProduct(                                                                    # 실제로 우리가 전달할 변수 작성 위치
            seller: $seller,
            createProductInput: $createProductInput
        ){ 
            _id,
            number,
            message
        }
    }
`

export default function gqlMutatinaInputPage() {
     // const [ writer, useWriter ] = useState('');
    
    // const [ createBoard ] = useMutation(CREATE_PROPDUCT);
    const [ createProduct ] = useMutation(CREATE_PROPDUCT);

    const onClickSubmit = async () => {
        const result =  await createProduct({
            variables: {
                seller: "마무개" , 
                createProductInput: {
                    name: "마마무 강아지 옷",
                    detail: "마마무 강아지가 입는 옷",
                    price: 49900
                }
            }
        }); 
        console.log(result);
    }

    return(
        <><br /><br /><br />
            <button onClick={onClickSubmit}>GQL-API(동기Sync) 요청하기</button>
            
        </>
    )
}