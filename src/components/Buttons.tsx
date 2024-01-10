import { useReducer } from "react";
import { Button } from "react-bootstrap";
import styled from "styled-components"

export const Buttons = ()=>{
    const SimpleButton1 = styled.button`
    color:blue;
    background-color: gray;
    `;

    function reducer(old:number, action:string)
    :any{
        if(action==='up'){
            return old+1;
        }else if(action ==='down'){
            return old-1;
        }
    }

    const [num, dispatch] = useReducer(reducer, 0)

    function click1(){
        dispatch('up');
    }
    function click2(){
        dispatch('down');
    }
    return(
        <div>
            <p>
                <SimpleButton1 onClick={click1}>{num}</SimpleButton1>&nbsp;
                <SimpleButton1 onClick={click2}>{num}</SimpleButton1>&nbsp;
                <Button variant="primary">Primary</Button>&nbsp;
                <Button variant="secondary">Secondary</Button>&nbsp;
                <Button variant="success">Success</Button>&nbsp;
                <Button variant="warning">Warning</Button>&nbsp;
                <Button variant="danger">Danger</Button>&nbsp;
                <Button variant="info">Info</Button>&nbsp;
                <Button variant="light">Light</Button>&nbsp;
                <Button variant="dark">Dark</Button>&nbsp;
                <Button variant="link">Link</Button>
            </p>
            <p>
            <SimpleButton1 onClick={click1}>{num}</SimpleButton1>&nbsp;
            <SimpleButton1 onClick={click2}>{num}</SimpleButton1>&nbsp;
            <Button variant="outline-primary">Primary</Button>&nbsp;
            <Button variant="outline-secondary">Secondary</Button>&nbsp;
            <Button variant="outline-success">Success</Button>&nbsp;
            <Button variant="outline-warning">Warning</Button>&nbsp;
            <Button variant="outline-danger">Danger</Button>&nbsp;
            <Button variant="outline-info">Info</Button>&nbsp;
            <Button variant="outline-light">Light</Button>&nbsp;
            <Button variant="outline-dark">Dark</Button>&nbsp;
            <Button variant="outline-link">Link</Button>
            </p>
            <div className="btn-group" role="group" aria-label="Basic example">
            <button type="button" className="btn btn-danger">Left</button>
            <button type="button" className="btn btn-warning">Middle</button>
            <button id="btnGroupDrop1" type="button" className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
            </button>
            <ul className="dropdown-menu" aria-labelledby="btnGroupDrop1">
            <li><a className="dropdown-item" href="#">Dropdown link</a></li>
            <li><a className="dropdown-item" href="#">Dropdown link</a></li>
            </ul>
            </div>
        </div>
    )
}