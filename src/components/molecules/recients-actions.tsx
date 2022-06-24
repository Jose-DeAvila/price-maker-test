import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { IRecientsActions } from "../../interfaces/molecules/recients-actions";
import Action from "../atoms/action";
import Button from "../atoms/button";

const SRecientsActions = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-radius: 10px;
    padding: 10px;
    border: 1px solid lightgrey;
`;

const SActionsHeader = styled.div`
    display: flex;
    justify-content: space-between;
    column-gap: 5px;
    margin-bottom: 1rem;

    hr {
        margin-right: 1rem;
        border-color: ${({theme}) => theme.darkBlue};
    }

    img {
        max-width: 55px;
        object-fit: contain;
    }

    small {
        font-size: 0.6rem;
        color: gray;
    }

    h3 {
        margin: 0;
        font-size: 1rem;
    }
`;

const SActionsContainer = styled.ul`
    padding-left: 0;
`;

const SActionsFooter = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    column-gap: 2rem;

    p {
        color: ${({theme}) => theme.darkBlue};
        text-decoration: underline;
        cursor: pointer;
    }
`;

export default function RecientsActions({title, subtitle, imageUrl, actions, catalogueUrl}: IRecientsActions){
    return (
        <SRecientsActions>
            <SActionsHeader>
                <div>                
                    <small>{subtitle}</small>
                    <h3>{title}</h3>
                </div>
                <hr />
                <img src={imageUrl} alt={title} />
            </SActionsHeader>
            <SActionsContainer>
                {
                    actions.map(({action, number, user}, index) => {
                        return (
                            <Action action={action} number={number} user={user} key={index} />
                        )
                    })
                }
            </SActionsContainer>
            <SActionsFooter>
                <p>Ver más</p>
                <Button onClick={() => console.log('a')} text="Ver catálogo"></Button>
            </SActionsFooter>
        </SRecientsActions>
    )
}