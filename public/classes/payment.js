// Classes
export class Payment {
    constructor(recipient, details, amount) {
        this.recipient = recipient;
        this.details = details;
        this.amount = amount;
    } //a constructor is used created to assign types and variables to the class objects 
    format() {
        return `${this.recipient} is owed ${this.amount} for ${this.details}`; //generates a formatted string describing the invoice
    }
}
