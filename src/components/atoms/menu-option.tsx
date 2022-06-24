import styled from "styled-components";
import { IMenuOption } from "../../interfaces/atoms/menu-option";

const SMenuOption = styled.li`
    border-bottom: 1px solid ${({theme}) => theme.lightGray};

    &:last-child {
        border-bottom: none;
    }

    a {
        text-decoration: none;
        color: ${({theme}) => theme.darkBlue};
    }
`;

export default function MenuOption({text, url}: IMenuOption){
    return (
        <SMenuOption>
            <a href={url}>{text}</a>
        </SMenuOption>
    )
}