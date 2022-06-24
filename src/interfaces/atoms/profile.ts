import { IHeaderUserInfo } from "../molecules/header-user-info";

export interface IProfile {
    description: string;
    user: IHeaderUserInfo;
    date: string;
    time: string;
}