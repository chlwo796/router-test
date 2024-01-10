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
            <div className="alert alert-primary" role="alert">
            A simple primary alert with <a href="#" className="alert-link">an example link</a>. Give it a click if you like.
            </div>
            <div className="alert alert-secondary" role="alert">
            A simple secondary alert with <a href="#" className="alert-link">an example link</a>. Give it a click if you like.
            </div>
            <div className="alert alert-success" role="alert">
            A simple success alert with <a href="#" className="alert-link">an example link</a>. Give it a click if you like.
            </div>
            <div className="alert alert-danger" role="alert">
            A simple danger alert with <a href="#" className="alert-link">an example link</a>. Give it a click if you like.
            </div>
            <div className="alert alert-warning" role="alert">
            A simple warning alert with <a href="#" className="alert-link">an example link</a>. Give it a click if you like.
            </div>
            <div className="alert alert-info" role="alert">
            A simple info alert with <a href="#" className="alert-link">an example link</a>. Give it a click if you like.
            </div>
            <div className="alert alert-light" role="alert">
            A simple light alert with <a href="#" className="alert-link">an example link</a>. Give it a click if you like.
            </div>
            <div className="alert alert-dark" role="alert">
            A simple dark alert with <a href="#" className="alert-link">an example link</a>. Give it a click if you like.
            </div>
            <div className="alert alert-success" role="alert">
            <h4 className="alert-heading">Well done!</h4>
            <p>Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</p>
            <hr/>
            <p className="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" style={{display: 'none'}}>
            <symbol id="check-circle-fill" fill="currentColor" viewBox="0 0 16 16">
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
            </symbol>
            <symbol id="info-fill" fill="currentColor" viewBox="0 0 16 16">
                <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/>
            </symbol>
            <symbol id="exclamation-triangle-fill" fill="currentColor" viewBox="0 0 16 16">
                <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
            </symbol>
            </svg>

            <div className="alert alert-primary d-flex align-items-center" role="alert">
            <svg className="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Info:"><use xlinkHref="#info-fill"/></svg>
            <div>
                An example alert with an icon
            </div>
            </div>
            <div className="alert alert-success d-flex align-items-center" role="alert">
            <svg className="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Success:"><use xlinkHref="#check-circle-fill"/></svg>
            <div>
                An example success alert with an icon
            </div>
            </div>
            <div className="alert alert-warning d-flex align-items-center" role="alert">
            <svg className="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Warning:"><use xlinkHref="#exclamation-triangle-fill"/></svg>
            <div>
                An example warning alert with an icon
            </div>
            </div>
            <div className="alert alert-danger d-flex align-items-center" role="alert">
            <svg className="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Danger:"><use xlinkHref="#exclamation-triangle-fill"/></svg>
            <div>
                An example danger alert with an icon
            </div>
            </div>
            <div className="alert alert-warning alert-dismissible fade show" role="alert">
            <strong>Holy guacamole!</strong> You should check in on some of those fields below.
            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
        </Alert>
        
    )
    if(show){
        return alert;
    }
    return(
        <Button onClick={()=>setShow(true)}>눌러</Button>
    )
}