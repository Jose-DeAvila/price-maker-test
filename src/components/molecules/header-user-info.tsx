import styled from "styled-components";
import { IHeaderUserInfo } from "../../interfaces/molecules/header-user-info";
import UserIcon from "../atoms/user-icon";

const SHeaderUserInfo = styled.div`
    display: flex;
    align-items: center;
    column-gap: 10px;
    margin-right: 1rem;
`;

const SHeaderUserName = styled.p`
    margin: 0;
    font-weight: bold;
    color: ${({theme}) => theme.darkBlue};
`;

const SHeaderUserInfoArrow = styled.div`
    width: 10px;
    height: 10px;
    background-color: transparent;
    transform: rotate(45deg);
    border-bottom: 1px solid black;
    border-right: 1px solid black;
    cursor: pointer;
`;

export default function SHeaderUSerInfo({name, icon}: IHeaderUserInfo){
    return (
        <SHeaderUserInfo>
            <UserIcon name={name} icon={icon} />
            <SHeaderUserName>{name}</SHeaderUserName>
            <SHeaderUserInfoArrow />
        </SHeaderUserInfo>
    )
}