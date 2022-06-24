import { useState } from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from 'swiper/react';
import { IProductList } from "../../interfaces/organisms/product-list";
import ProductImage from "../atoms/product-image";
import Product from "../molecules/product";

const SMainProduct = styled.div`
    overflow: hidden;
    border-radius: 10px;
    padding: 10px 20px;
    background-color: ${({theme}) => theme.mainColor};
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: 1px solid transparent;
    transition: .3s ease border-color;

    &:hover {
        border-color: ${({theme}) => theme.lightBlue};
    }

    a {
        text-decoration: none;
        color: ${({theme}) => theme.mainColor};
        background-color: ${({theme}) => theme.darkBlue};
        padding: 5px 20px;
        border-radius: 10px;
        transition: .3s ease background-color;
        
        &:hover {
            background-color: ${({theme}) => theme.lightBlue};
        }
    }
`;

export default function ProductList({products}: IProductList){
    
    const [mainProduct, ] = useState(products[0]);

    return (
        <Swiper breakpoints={{
            320: {
                slidesPerView: 1.2,
                spaceBetween: 10
            },
            640: {
                slidesPerView: 2.5,
                spaceBetween: 10
            },
            1024: {
                slidesPerView: 3.5,
                spaceBetween: 10
            },
            1440: {
                slidesPerView: 4,
                spaceBetween: 10
            }
        }}>
            <SwiperSlide>
                <SMainProduct>
                    <ProductImage productName={mainProduct.name} src={mainProduct.imageUrl} />
                    <a href={mainProduct.url} target="_blank">{mainProduct.name}</a>
                </SMainProduct>
            </SwiperSlide>
            {
                products.slice(1).map(({imageUrl, name, url}, index) => 
                    <SwiperSlide key={index}>
                        <Product 
                        imageUrl={imageUrl} 
                        name={name} 
                        url={url} />
                    </SwiperSlide>
                    )
            }
        </Swiper>
    )
}