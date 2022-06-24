import styled from "styled-components";
import { IProductImage } from "../../interfaces/atoms/product-image";

const SProductImage = styled.img`
    width: 100%;
    max-width: 55px;
`;

export default function ProductImage({src, productName}: IProductImage){
    return (
        <SProductImage src={src} alt={`${productName}'s photo`} />
    )
}