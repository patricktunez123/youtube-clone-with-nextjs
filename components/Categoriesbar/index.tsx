import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const Categoriesbar = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 15
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 10
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 10
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 2
        }
    };

    return (
        <div className='categoriesbar app_padding_tb'>
            <Carousel
                className='aka_yt_slide'
                swipeable={true}
                draggable={true}
                keyBoardControl={true}
                containerClass='c_container_style'
                responsive={responsive}>
                {[...Array(20)].map((_, index) => <div key={index} >Item 1</div>)}
            </Carousel>
        </div>
    )
}

export default Categoriesbar
