import { IEvent } from "./event-interface";
import { IUser } from "./user-interface";

export interface IFavorites{
    events:IEvent[];
    user:IUser;
}