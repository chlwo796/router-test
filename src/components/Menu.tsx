import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom"

export const Menu = ()=>{
    let name = '최재환'
    return(
        <div>
            <Nav variant="pills" defaultActiveKey="/">
                <Nav.Item>
                    <Nav.Link href="/">Home</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/buttons">버튼</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/topics">주제</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/grid1">그리드1</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/grid2">그리드2</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/boot">부트스트랩</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/state">스테이트</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/contact">연락</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/alert">Alert</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/carousel">슬라이드</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/arcodian">아코디언</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/badge">뱃지</Nav.Link>
                </Nav.Item>
            </Nav>
            <h3>A</h3>
            <a href="/">홈</a> &nbsp;
            <a href="/buttons">버튼</a> &nbsp;
            <a href={`/topics?name=${name}`}>주제</a> &nbsp;
            <a href="/contact">연락</a>
            <h3>Link</h3>
            <Link to="/">홈</Link> &nbsp; 
            <Link to="/buttons">스타일드</Link> &nbsp; 
            <Link to="/topics">주제</Link> &nbsp;
            <Link to="/grid1">그리드1</Link> &nbsp;
            <Link to="/grid2">그리드2</Link> &nbsp;
            <Link to="/boot">부트스트랩</Link> &nbsp;
            <Link to="/state">스테이트</Link> &nbsp;
            <Link to="/contact">연락</Link> &nbsp;
            <Link to="/arcodian">아코디언</Link> &nbsp;
            <Link to="/badge">뱃지</Link>
        </div>
    )
}