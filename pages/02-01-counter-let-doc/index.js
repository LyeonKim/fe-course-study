export default function CounterLetDocumentPage() {

    function onClickCountUp () {
        const count = Number(document.querySelector(".num").innerText) + 1;
        document.querySelector(".num").innerText = count;
    }
    
    function onClickCountDown () {
        const count = Number(document.querySelector(".num").innerText) - 1;
        document.querySelector(".num").innerText = count;
    }


    return (
        <div>
            <h1 className="num">0</h1>
            <button onClick={onClickCountUp}>Click to UP</button>
            <button onClick={onClickCountDown}>Click to Down</button>
        </div>
    );
}