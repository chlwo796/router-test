import { useSelector } from "react-redux"
import { Left2 } from "./Left2"

export const Left1 = () => {
    const num = useSelector((state:any)=>state.counter.num) // reduxtoolkit사용하며 변경
    return (
        <div>
            <h1>Left1 : {num}</h1>
            <Left2></Left2>
        </div>
    )
}