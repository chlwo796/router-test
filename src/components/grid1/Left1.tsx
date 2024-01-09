import { Left2 } from "./Left2"
import { Props } from "../Props"
export const Left1 = (props:Props) => {
    return (
        <div>
            <h1>Left1 : {props.num}</h1>
            <Left2 num={props.num}></Left2>
        </div>
    )
}