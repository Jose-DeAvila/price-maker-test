import styled from "styled-components";
import { IMenu } from "../../interfaces/molecules/menu";
import MenuOption from "../atoms/menu-option";

const SMenu = styled.ul`
    list-style: none;
    padding: 0;
`;

export default function Menu({menuOptions}: IMenu){
    console.log(menuOptions);
    return (
        <SMenu>
            {
                menuOptions.map((option, index) => {
                    return (
                        <MenuOption {...option} key={index}></MenuOption>
                    )
                })
            }
        </SMenu>
    )
}