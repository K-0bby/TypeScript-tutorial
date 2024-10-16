import { HasFormatter } from '../interfaces/HasFormatter.js'

// Classes
export class Invoices implements HasFormatter {
    constructor (
        readonly client: string,
        private details: string,
        public amount: number,
    ){} //a constructor is used created to assign types and variables to the class objects 


    format() {
        return `${this.client} owes ${this.amount} for ${this.details}` //generates a formatted string describing the invoice
    }

}