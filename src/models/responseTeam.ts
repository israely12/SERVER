import {Player} from "./playerModel"
export interface Response{
    Message:string,
    Team: {
        players:Player[]
    }
}