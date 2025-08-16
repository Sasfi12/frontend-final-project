import { Book } from "../apiTypes"

export type PanierState = {
    toggle : boolean, 
    content : recuperatedBook[]
}
export type recuperatedBook = {
                title: string,
                id: number,
                image: string,
                rating: number,
                format: string, 
}
export type DarkmodeState =  {
    toggle : boolean
}
export type panierTypes = {
    toggle: boolean, 
    content: recuperatedBook[]
}