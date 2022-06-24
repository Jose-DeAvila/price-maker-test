import { IAction } from "../atoms/action";

export interface IRecientsActions {
    title: string;
    subtitle: string;
    imageUrl: string;
    actions: IAction[];
    catalogueUrl: string;
}