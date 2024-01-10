export const Card = () => {
    return(
        <div>
        <div className="card text-center" style={{width: '18rem'}}>
        <img src={`${process.env.PUBLIC_URL}/assets/imgs/1.jpg`} className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" className="card-link">Card link</a>
            <a href="#" className="card-link">Another link</a>
        </div>        
        </div>
        <div className="card text-center">
        <div className="card-header">
            <ul className="nav nav-tabs card-header-tabs">
            <li className="nav-item">
                <a className="nav-link active" aria-current="true" href="#">Active</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">Link</a>
            </li>
            <li className="nav-item">
                <a className="nav-link disabled" href="#" tabIndex={-1} aria-disabled="true">Disabled</a>
            </li>
            </ul>
        </div>
        <div className="card-body">
            <h5 className="card-title">Special title treatment</h5>
            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
        </div>
        </div>
    )
}