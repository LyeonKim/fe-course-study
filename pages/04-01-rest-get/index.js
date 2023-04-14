import axios from "axios"
import { useState } from "react";

export default function restGetPage () {
    
    const [ title, setTitle ] = useState('');
    const [ content, setContent ] = useState('');
    
    // async function onClickSync() { 
    const onClickSync = async () => {  // Sync 동기(기다림)
        const post = await axios.get('https://koreanjson.com/posts/2');
        console.log('Sync 동기 데이터 :',post); 
            /* = Sync 동기 데이터 : {data: {…}, status: 200, statusText: 'OK', headers: AxiosHeaders, config: {…}, …} */
        setTitle(post.data.title);
        setContent(post.data.content);
    }

    // function onClickAsync() { 
    const onClickAsync = () => {       // Async 비동기(안기다림)
        const post = axios.get('https://koreanjson.com/posts/2');
        console.log('Async 비동기 데이터 :', post); 
            /* = Async 비동기 데이터 : Promise {<pending>} */
        setTitle(post.data.title);
        setContent(post.data.content);
    }

    return(
        <>
            <button onClick={onClickSync}>REST-API(동기Sync) 요청하기</button>
            <button onClick={onClickAsync}>REST-API(비동기Async) 요청하기</button>
            <br />
            <div>
                <h2 className="title">{title}</h2>
                <p className="content">{content}</p>
            </div>
        </>
    )
}