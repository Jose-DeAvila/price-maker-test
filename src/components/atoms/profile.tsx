import styled from "styled-components";
import { IProfile } from "../../interfaces/atoms/profile";

const SProfile = styled.div`
    display: flex;
    border: 1px solid lightgrey;
    border-radius: 10px;
    overflow: hidden;
    column-gap: 10px;
    align-items: center;
    max-height: 150px;

    & > img {
        width: 40%;
        object-fit: cover;
    }

    & > div {
        width: 60%;
        
        hr {
            width: 90%;
            align-self: flex-start;
            margin: 8px 0
        }

        p {
            font-size: 0.8rem;

            &:first-child {
                margin: 10px 0 0 0;
            }
        }
        
        & > div {
            display: flex;
            align-items: center;
            flex-wrap: wrap;

            & > div {
                display: flex;
                align-items: center;

                p {
                    margin: 0;
                }

                img { 
                    width: 30px;
                    height: 30px;
                    border-radius: 100%;
                    margin-right: 2px;
                }
            }

            & > p:last-child {
                margin: 0;
            }
        }
    }
`;

const SDate = styled.p`
    border-left: 1px solid gray;
    border-right: 1px solid gray;
    margin: 0 5px;
    padding: 0 5px;
`;

export default function Profile({user, description, time, date}: IProfile){
    return (
        <SProfile>
            <img src={user.icon} alt={`${user.name}'s photo`} />
            <div>
                <p>{description}</p>
                <hr />
                <div>
                    <div>
                        <img src={user.icon} alt={`${user.name}'s photo`} />
                        <p>{user.name.split(' ')[0]}</p>
                    </div>
                    <SDate>
                        {date}
                    </SDate>
                    <p>
                        {time}
                    </p>
                </div>
            </div>
        </SProfile>
    )
}