import { useState } from "react"
import { Left1 } from "./Left1";
import { Right1 } from "./Right1";

export const Grid1 = () => {
    const [num, setNum] = useState(0);
    return(
        <div id="container">
            <h1>Grid : {num}</h1>
            <div id="grid">
            <Left1 num={num}></Left1>
            <Right1 num={num} onAdd={()=>{setNum(num+1)}}></Right1>
            </div>
        </div>
    )
}