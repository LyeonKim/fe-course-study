import { useState } from "react";

export default function CounterStatePage() {
    const [ count, setCount ] = useState(0);

    function onClickCountUp () {
        setCount(count + 1);
    }
    
    function onClickCountDown () {
        setCount(count - 1);
    }

    return (
        <>
            <h1>{count}</h1>
            <button onClick={onClickCountUp}>Click to UP</button>
            <button onClick={onClickCountDown}>Click to Down</button>

            <br /><br />
        
            <button onClick={() => setCount(count + 1) }>Click to UP</button>
            <button onClick={() => setCount(count - 1) }>Click to Down</button>
        </>
    );
}