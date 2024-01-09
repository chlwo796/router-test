import { useParams } from "react-router-dom"

export const Home = ()=>{
    let params = useParams();
    console.log(params);
    return(
        <div>
            <h2>Home</h2>
            우리집
        </div>
    )
}