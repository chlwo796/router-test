import { useDispatch } from "react-redux"

export const Right3 = () => {
    const dispatch = useDispatch();
    return(
        <div>
            <h1>Right3</h1>
            <button onClick={()=>{
                dispatch({type:'numSlice/up', step:2}); // reduxtoolkit사용하며 변경
            }}>+</button>
            <button onClick={()=>{
                dispatch({type:'numSlice/down', step:2}); // reduxtoolkit사용하며 변경
            }}>-</button>
        </div>
    )
}