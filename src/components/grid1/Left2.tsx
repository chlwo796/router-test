import { Left3 } from "./Left3"
import { Props } from "../Props"

export const Left2 = (props:Props) => {
    return(
        <div>
            <h1>Left2 : {props.num}</h1>
            <Left3 num={props.num}></Left3>
        </div>
    )
}