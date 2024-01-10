import { useState } from "react"
import { Button } from "react-bootstrap"

export const Badge = () => {
    const [num,setNum] = useState(0);
    return(
    <div>
        <h1>Example heading <span className="badge bg-secondary">New</span></h1>
        <h2>Example heading <span className="badge bg-secondary">New</span></h2>
        <h3>Example heading <span className="badge bg-secondary">New</span></h3>
        <h4>Example heading <span className="badge bg-secondary">New</span></h4>
        <h5>Example heading <span className="badge bg-secondary">New</span></h5>
        <h6>Example heading <span className="badge bg-secondary">New</span></h6>
        <Button type="button" className="btn btn-primary" onClick={()=>{setNum(num+1)}}>
        Notifications <span className="badge bg-secondary">{num}</span>
        </Button> &nbsp;
        <button type="button" className="btn btn-primary position-relative">
        Inbox
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            99+
            <span className="visually-hidden">unread messages</span>
        </span>
        </button> &nbsp;&nbsp;&nbsp;
        <button type="button" className="btn btn-primary position-relative">
        Profile
        <span className="position-absolute top-0 start-100 translate-middle p-2 bg-danger border border-light rounded-circle">
            <span className="visually-hidden">New alerts</span>
        </span>
        </button>
    </div>
    )
}