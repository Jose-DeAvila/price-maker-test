import styled from "styled-components";
import { IProduct } from "../../interfaces/molecules/product";
import ProductImage from "../atoms/product-image";

const SProduct = styled.div`
max-height: 60px;
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
    transition: .3s ease all;
    
    &:hover {
        background-color: ${({theme}) => theme.lightBlue};
    }
}
`; 

const SProductInfo = styled.div`
    display: flex;
    column-gap: 10px;

    p {
        color: ${({theme}) => theme.darkBlue};
    }
`;

export default function Product({imageUrl, name, url}: IProduct){
    return (
        <SProduct>
            <SProductInfo>
                <ProductImage productName={name} src={imageUrl} />
                <p>{name}</p>
            </SProductInfo>
            <a href={url} target="_blank">Ver</a>
        </SProduct>
    )
}