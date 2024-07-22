import React,{useState,useEffect,Component} from 'react';
class Counter extends React.Component {
function Count(){
    const [count,setCount]=useState(0);

    var timer;
    useEffect(()=>{
        timer=setInterval(()=> {
            setCount((count)=>count+1);
        },1000);
        return () => clearInterval(timer);
    });

    const stop=()=>{
        clearInterval(timer);
    };
    const start=()=>{
        timer=setInterval(()=> {
            setCount((count)=>count+1);
        },1000);
    };
    return(
        <div>
            <h2>Countdown:{count}</h2>
            <p><button onClick={stop}>Stop</button>
            <button onClick={start}>Start</button></p>
        </div>
    )
}
}
export default Count;
