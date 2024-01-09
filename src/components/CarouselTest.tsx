import { Carousel, CarouselCaption, CarouselItem } from "react-bootstrap"

export const CarouselTest = () => {
    return(
        <Carousel data-bs-theme="dark">
            <CarouselItem interval={1000}>
                <img src={`${process.env.PUBLIC_URL}/assets/imgs/1.jpg`} className="App-logo" alt="React" width="400px"></img>
                <Carousel.Caption>
                    <h3>첫번째 이미지</h3>
                    <p>안녕 난 첫번째 이미지야</p>
                </Carousel.Caption>
            </CarouselItem>
            <CarouselItem interval={1000}>
                <img src={`${process.env.PUBLIC_URL}/assets/imgs/2.jpg`} className="App-logo" alt="React" width="400px"></img>
                <Carousel.Caption>
                    <h3>두번째 이미지</h3>
                    <p>안녕 난 두번째 이미지야</p>
                </Carousel.Caption>
            </CarouselItem>
            <CarouselItem interval={1000}>
                <img src={`${process.env.PUBLIC_URL}/assets/imgs/3.jpg`} className="App-logo" alt="React" width="400px"></img>
                <Carousel.Caption>
                    <h3>세번째 이미지</h3>
                    <p>안녕 난 세번째 이미지야</p>
                </Carousel.Caption>
            </CarouselItem>
        </Carousel>
    )
}