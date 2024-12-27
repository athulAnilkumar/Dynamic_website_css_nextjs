import Carousel from "react-bootstrap/Carousel";

import Image from "next/image";

import img1 from "../../../public/assets/images/img1.jpg";
import img2 from "../../../public/assets/images/img2.jpg";
import img3 from "../../../public/assets/images/img3.jpg";

const HomeCarousel = () => {
  return (
    <Carousel className="carousel">
      <Carousel.Item>
        <Image src={img1} alt="test" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image src={img2} alt="test" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image src={img3} alt="test" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default HomeCarousel;
