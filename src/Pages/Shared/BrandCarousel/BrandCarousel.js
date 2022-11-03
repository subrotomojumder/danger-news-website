import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Brand1 from '../../../assets/brands/item1.jpeg';
import Brand2 from '../../../assets/brands/item2.jpeg';

const BrandCarousel = () => {
    return (
        <div>
            <Carousel>

                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={Brand1}
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h3>Joy Bangla</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={Brand2}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Hare Krishna </h3>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default BrandCarousel;