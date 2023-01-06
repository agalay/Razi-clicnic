import React from 'react';
import Slider from "react-slick";

import Doctor, {IDoctor} from "../../Cards/Doctor";

export const CarouselDoctors: React.FC = () => {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    const slides: IDoctor[] = [
        {
            id: 1,
            image: 'https://i.picsum.photos/id/679/900/900.jpg?hmac=djA16Fqy3klscx2S9SF3OjgTL5j4XpK4Dw3Nf143T8k',
            name: 'Муэз Хадиджа',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, vero? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, vero? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, vero?',
            link: 'test',
            position: 'ЛОР-врач',
        },
        {
            id: 2,
            image: 'https://i.picsum.photos/id/244/900/900.jpg?hmac=w8yBVcv0Y6YdCBm6fe8t21vc_7AnQx4IDszS4vs7Ft8',
            name: 'Эбреолидзе Ираклий',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, vero?',
            position: 'Невролог',
            link: 'test1',
        },
        {
            id: 3,
            image: 'https://i.picsum.photos/id/925/900/900.jpg?hmac=ciWUHxcnQsbjkMmo2PfConEljKNJFt_0fT8SHUBA7Gc',
            name: 'Хачукаева Заира',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, vero?',
            position: 'Кардиолог',
            link: 'test2',
        }
    ]
    return (
        <Slider {...settings}>
            {slides.map(slide => (
                <Doctor key={slide.id} {...slide} />
            ))}
        </Slider>
    );
}

