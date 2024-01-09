import { useSelector } from "react-redux"

export const Left3 = () => {
    const num = useSelector((state:any)=>state.counter.num) // reduxtoolkit사용하며 변경
    return(
        <div>
            <h1>Left3 : {num}</h1>
        </div>
    )
}