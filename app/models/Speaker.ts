import { Session } from './Session'

export interface Speaker{
    name:string,
    designation:string,
    company:string,
    bio:string,
    pic:string,
    sessions:Session[]
}