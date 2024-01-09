import { Left3 } from "./Left3"
import { useSelector } from "react-redux"

export const Left2 = () => {
    const num = useSelector((state:any)=>state.counter.num)
    return(
        <div>
            <h1>Left2 : {num}</h1>
            <Left3></Left3>
        </div>
    )
}