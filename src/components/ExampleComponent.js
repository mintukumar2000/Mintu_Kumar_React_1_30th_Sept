import React, {useState, useEffect} from "react";

function ExampleComponent() {
    const[count, setCount] = useState(0);
    useEffect(() =>{
        document.title = `Count: ${count}`;
        console.log({count});
        let val = document.getElementById('zero');
        if(count>10) {
            val.classList.add('visible');
        }
        else {
            val.classList.remove('visible');
        }
    },[count]);

    return (
        <div className="count-div">
        <div className="incre">
            <h1 className="heading">Counter using React</h1>
            <p className="count-para">Your count is : {count}</p>
            <p id="error">Error: Cannot be below 0</p>
            <button onClick={()=> 
            {
            setCount(count + 1)
            document.getElementById('error').classList.remove('show');
            }
            }>Increment</button>
            <button onClick={()=> 
            {
            if(count>0){
                setCount(count - 1)
                document.getElementById('error').classList.remove('show');
            }
            else {
                document.getElementById('error').classList.add('show');
            }
            }}>Decrement</button>
            <button id='zero' className='go-back-zero' onClick={()=>{
                if(count>10) {
                    setCount(0)
                }
            }}>Go Back To 0</button>
        </div>
        </div>
    )
}
export default ExampleComponent;