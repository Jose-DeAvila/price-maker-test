import styled from "styled-components";
import { IButton } from "../../interfaces/atoms/button";

const SButton = styled.button`
    text-decoration: none;
    color: ${({theme}) => theme.mainColor};
    background-color: ${({theme}) => theme.darkBlue};
    padding: 5px 20px;
    border-radius: 10px;
    transition: .3s ease all;
    border: none; 
    outline: none;
    cursor: pointer;

    &:hover {
        background-color: ${({theme}) => theme.lightBlue};
    }
`;

export default function Button({onClick, text}: IButton){
    return (
        <SButton onClick={onClick}>
            {text}
        </SButton>
    )
}