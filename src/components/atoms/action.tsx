import styled from "styled-components";
import { IAction } from "../../interfaces/atoms/action";

const SAction = styled.li`
    display: flex;
    justify-content: space-between;
    column-gap: 10px;
    align-items: center;
    max-width: 323px;
    margin: 0 auto;

    img {
        width: 40px;
        height: 40px;
        aspect-ratio: 1 / 1;
        object-fit: cover;
        border-radius: 100%;
    }

    p {
        font-size: 0.8rem;
    }

    a {
        text-decoration: none;
        color: ${({theme}) => theme.darkBlue};
        font-weight: bold;
    }
`;

export default function Action({action, user, number}: IAction){
    return (
        <SAction>
            <img src={user.icon} alt={`${user.name}'s photo`} />
            <p><strong>{user.name}</strong> {action} el producto <strong>{number}</strong></p>
            <a href="#">{'>'}</a>
        </SAction>
    )
}