import { HasFormatter } from "../Interfaces/HasFormatter";

export class invoice implements HasFormatter{
    constructor(
        readonly client:string,
        private details:string,
        public amount:number
    ){}

    format(){
        return `${this.client} owes $ ${this.amount} for ${this.details}`;
    }
}