import { Right2 } from "./Right2"
import { Props } from "../Props"

export const Right1 = (props:Props) => {
    return (
        <div>
            <h1>Right1 : {props.num}</h1>
            <Right2 num={props.num} onAdd={props.onAdd}></Right2>
        </div>
    )
}