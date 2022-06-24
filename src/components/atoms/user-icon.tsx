import styled from "styled-components";
import { IUserIcon } from "../../interfaces/atoms/user-icon";

const SUserIcon = styled.div`
    height: 40px;
    width: 40px;
    display: flex;
    align-items: center;
`;
const SIcon = styled.img`
    width: 100%;
    border-radius: 100%;
    object-fit: contain;
`;

export default function UserIcon({icon, name}: IUserIcon){
    return (
        <SUserIcon>
            <SIcon src={icon} alt={`${name}'s photo`}></SIcon>
        </SUserIcon>
    )
}