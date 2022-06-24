import styled from "styled-components";
import { IHeader } from "../../interfaces/organisms/header";
import BurgerButton from "../atoms/burger-button";
import UserIcon from "../atoms/user-icon";
import HeaderUserInfo from "../molecules/header-user-info";

const SHeader = styled.header`
    display: flex;
    height: 50px;
    align-items: center;
    justify-content: space-between;
    background-color: ${({theme}) => theme.mainColor};
    overflow: hidden;
    -webkit-box-shadow: 0px 12px 20px -15px rgba(0,0,0,0.1);
    -moz-box-shadow: 0px 12px 20px -15px rgba(0,0,0,0.1);
    box-shadow: 0px 12px 20px -15px rgba(0,0,0,0.1);
`;

const SHeaderMenu = styled.div`
    display: flex;
    height: 100%;
    width: 50%
`;

const SHeaderDecoration = styled.div`
    background-color: ${({theme}) => theme.mainColor};
    height: 100%;
    width: 50%;
    border-radius: 0 30px 30px 0;
    -webkit-box-shadow: 22px 12px 21px -15px rgba(0,0,0,0.1);
    -moz-box-shadow: 22px 12px 21px -15px rgba(0,0,0,0.1);
    box-shadow: 22px 12px 21px -15px rgba(0,0,0,0.1);
`;

export default function Header({name, icon}: IHeader){

    return (
        <SHeader>
            <SHeaderMenu>
                <BurgerButton onClick={() => console.log('a')}></BurgerButton>
                <SHeaderDecoration />
            </SHeaderMenu>
            <HeaderUserInfo name={name} icon={icon}></HeaderUserInfo>
        </SHeader>
    )
}