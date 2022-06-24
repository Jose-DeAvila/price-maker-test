import { useState } from "react";
import styled from "styled-components"
import { Swiper } from "swiper/react";
import { ICarrouselContainer } from "../../interfaces/organisms/carrousel-container";

const SCarrouselContainer = styled.section`
    background-color: ${({theme}) => theme.mainColor};
    padding: 20px;
    margin-top: 20px;
    box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.1);
    border-radius: 10px;
`;

const SCarrouselHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: ${({theme}) => theme.darkBlue};
    margin-bottom: 1rem;
`;

const SHeaderTitle = styled.h2`
    margin: 0;
    font-size: 1.5rem;
`;

const SCarrouselControls = styled.div`
    display: flex;
    column-gap: 20px;

    button {
        font-size: 1.5rem;
        background-color: transparent;
        border: none;
        outline: none;
        cursor: pointer;
        color: ${({theme}) => theme.darkBlue};
        font-weight: bold;
    }
`;

export default function CarrouselContainer({
    title, 
    children
}: ICarrouselContainer){

    const [swiper, setSwiper] = useState<any>();

    return(
        <SCarrouselContainer>
            <SCarrouselHeader>
                <SHeaderTitle>{title}</SHeaderTitle>
                <SCarrouselControls>
                    <button onClick={() => swiper?.slidePrev()}>{'<'}</button>
                    <button onClick={() => swiper?.slideNext()}>{'>'}</button>
                </SCarrouselControls>
            </SCarrouselHeader>
            <Swiper breakpoints={{
                320: {
                    slidesPerView: 1,
                },
                640: {
                    slidesPerView: 1.5,
                },
                1024: {
                    slidesPerView: 2.5,
                },
                1440: {
                    slidesPerView: 3,
                }
            }}
            onInit={(swiper) => {
                setSwiper(swiper);
            }} 
            spaceBetween={10}>
                {children}
            </Swiper>
        </SCarrouselContainer>
    )
}