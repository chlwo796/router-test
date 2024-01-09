import { Right3 } from "./Right3"
import { Props } from "../Props"

export const Right2 = (props:Props) => {
    return(
        <div>
            <h1>Right2 : {props.num}</h1>
            <Right3 num={props.num} onAdd={props.onAdd}></Right3>
        </div>
    )
}