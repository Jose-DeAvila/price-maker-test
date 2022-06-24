import { IHeaderUserInfo } from "../molecules/header-user-info";

export interface IAction {
    action: string;
    user: IHeaderUserInfo;
    number: number;
}