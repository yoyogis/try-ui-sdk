import { User } from "./User";

export class UserManager{
    constructor(public list:Array<User>=[], public selected:User){
        
    }
}