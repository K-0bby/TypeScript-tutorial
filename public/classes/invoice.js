// Classes
export class Invoices {
    constructor(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    } //a constructor is used created to assign types and variables to the class objects 
    format() {
        return `${this.client} owes ${this.amount} for ${this.details}`; //generates a formatted string describing the invoice
    }
}
