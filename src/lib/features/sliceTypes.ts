import { Book } from "../apiTypes"

export type PanierState = {
    toggle : boolean, 
    content : Book[]
}

export type DarkmodeState =  {
    toggle : boolean
}