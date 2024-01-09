import { useLocation, useSearchParams } from "react-router-dom"

export const Topics = ()=>{
    const[params, setParams] = useSearchParams();
    console.log(params);
    return(
        <div>
            <h2>Topics</h2>
            {params.get('name')}
        </div>
    )
}