import React, { useState } from "react";
import styled, { css } from "styled-components";
import { IBurgerButton } from "../../interfaces/atoms/burger-button";

const SBurgerButton = styled.button<{isActive: boolean}>`
    display: flex;
    justify-content: center;
    flex-direction: column;
    height: 100%;
    width: 30px;
    border: none; 
    outline: none;
    background-color: ${({theme}) => theme.darkBlue};
    box-sizing: content-box;
    row-gap: 7px;
    cursor: pointer;

    ${({isActive}) => isActive && css`
        div:nth-child(2) {
            width: 50%;
        }
    `}
`;

const SUpper = styled.div`
    width: 100%;
    height: 2px;
    background-color: ${({theme}) => theme.mainColor};
`;
const SMiddle = styled.div`
    width: 100%;
    height: 2px;
    background-color: ${({theme}) => theme.mainColor};
    transition: .3s ease all;
`;
const SBottom = styled.div`
    width: 100%;
    height: 2px;
    background-color: ${({theme}) => theme.mainColor};
`;

export default function BurgerButton({onClick}: IBurgerButton){

    const [isClicked, setIsClicked] = useState(false);

    const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        setIsClicked(!isClicked);
        onClick(e);
    }

    return (
        <SBurgerButton onClick={(e) => handleClick(e)} isActive={isClicked} type="button">
            <SUpper className="upper"></SUpper>
            <SMiddle className="middle"></SMiddle>
            <SBottom className="bottom"></SBottom>
        </SBurgerButton>
    )
}