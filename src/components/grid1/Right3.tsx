import { Props } from "../Props"

export const Right3 = (props:Props) => {
    return(
        <div>
            <h1>Right3 : {props.num}</h1>
            <button onClick={()=>{
                if(props.onAdd){
                    props.onAdd();
                }
            }}>+</button>
        </div>
    )
}