import React from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation, Pagination, Scrollbar, A11y, EffectCards, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import "swiper/css/scrollbar";
import "swiper/css/effect-cards";

import img1 from '../../assets/Nfts/bighead.svg'
import img2 from '../../assets/Nfts/bighead-1.svg'
import img3 from '../../assets/Nfts/bighead-2.svg'
import img4 from '../../assets/Nfts/bighead-3.svg'
import img5 from '../../assets/Nfts/bighead-4.svg'
import img6 from '../../assets/Nfts/bighead-5.svg'
import img7 from '../../assets/Nfts/bighead-6.svg'
import img8 from '../../assets/Nfts/bighead-7.svg'
import img9 from '../../assets/Nfts/bighead-8.svg'
import img10 from '../../assets/Nfts/bighead-9.svg'
import Arrow from '../../assets/Arrow.svg'

const Carousel = () => {
    return (
        <Container>
            <Swiper
                autoplay={{delay: 2000, disableOnInteraction: false}}
                modules={[Navigation, Pagination, Scrollbar, A11y, EffectCards, Autoplay]}
                navigation={true}
                pagination={{ type: 'fraction' }}
                scrollbar={{ draggable: true }}
                effect={'cards'}
            >
                <SwiperSlide>
                    <img src={img1} alt="Nft" width={500} height={400} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img2} alt="Nft" width={500} height={400} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img3} alt="Nf" width={500} height={400} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img4} alt="Nft" width={500} height={400} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img5} alt="Nft" width={500} height={400} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img6} alt="Nft" width={500} height={400} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img7} alt="Nft" width={500} height={400} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img8} alt="Nft" width={500} height={400} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img9} alt="Nft" width={500} height={400} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img10} alt="Nft" width={500} height={400} />
                </SwiperSlide>
            </Swiper>
        </Container>
    );
};

export default Carousel;


const Container = styled.div`
    width: 25vw;
    height: 70vh;

    @media (max-width: 70em){
        height: 60vh;
        padding: 15px 0;
    }

    @media (max-width: 64em){
        width: 30vw;
        height: 50vh;
    }

    @media (max-width: 48em){
        width: 40vw;
        height: 50vh;
    }

    @media (max-width: 30em){
        width: 60vw;
        height: 45vh;
    }

    .swiper{
        width: 100%;
        height: 100%;

    }

    .swiper-slide{
        background-color: ${(props)=> props.theme.carouselColor};
        border-radius: 20px;
        display: flex;
        justify-content: center;
        align-items: center;

        img{
            display: block;
            width: 100%;
            height: auto;
            object-fit: cover;
        }
    }

    .swiper-button-next{
        color: ${(props)=> props.theme.text};
        right: 0;
        width: 4rem;
        top: 60%;
        background-image: url(${Arrow});
        background-position: center;
        background-size: cover;

        &::after{
            display: none;
        }

        @media (max-width: 30em){
            width: 2rem;
        }
    }

    .swiper-button-prev{
        color: ${(props)=> props.theme.text};
        right: 0;
        width: 4rem;
        top: 60%;
        background-image: url(${Arrow});
        background-position: center;
        background-size: cover;
        transform: rotate(180deg);

        &::after{
            display: none;
        }

        @media (max-width: 30em){
            width: 2rem;
        }
    }
`
