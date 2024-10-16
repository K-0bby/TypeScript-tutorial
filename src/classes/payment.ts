import { HasFormatter } from '../interfaces/HasFormatter.js'

// Classes
export class Payment implements HasFormatter {
    constructor (
        readonly recipient: string,
        private details: string,
        public amount: number,
    ){} //a constructor is used created to assign types and variables to the class objects 


    format() {
        return `${this.recipient} is owed ${this.amount} for ${this.details}` //generates a formatted string describing the invoice
    }

}