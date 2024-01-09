import { useState } from "react"
import { Alert, AlertHeading, Button } from "react-bootstrap";

export const AlertTest = () => {
    const [show, setShow] = useState(true);
    const alert = (
        <Alert variant="info" onClose={()=>setShow(false)} dismissible>
            <AlertHeading>hello</AlertHeading>
            <p>
                안녕, 잘 지내니?
            </p>
        </Alert>
    )
    if(show){
        return alert;
    }
    return(
        <Button onClick={()=>setShow(true)}>눌러</Button>
    )
}