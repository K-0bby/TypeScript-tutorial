import { Invoices } from "./classes/invoice.js";
import { ListTemplate } from "./classes/ListTemplate.js";
import { Payment } from "./classes/payment.js";
import { HasFormatter } from "./interfaces/HasFormatter.js";

// let docOne: HasFormatter;
// let docTwo: HasFormatter;

// docOne = new Invoices('yoshi', 'web work', 250);
// docTwo = new Payment('mario', 'plumbing', 200);

// let docs: HasFormatter[] = [];
// docs.push(docOne);
// docs.push(docTwo);

const form = document.querySelector(".new-item-form") as HTMLFormElement;
console.log(form.children);

// inputs
const type = document.querySelector("#type") as HTMLInputElement;
const tofrom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

// list template instance
const ul = document.querySelector("ul")!;

const list = new ListTemplate(ul);

form.addEventListener("submit", (e: Event) => {
  e.preventDefault();

  let values: [string, string, number ]
  values = [tofrom.value, details.value, amount.valueAsNumber]

  let doc: HasFormatter;
  if (type.value === "invoice") {
    doc = new Invoices(...values);
  } else {
    doc = new Payment(...values);
  }
  list.render(doc, type.value, "end");
});

// Generics

// const addUID = <T extends object>(obj:T) => {
//   let uid = Math.floor(Math.random() * 100)
//   return {...obj, uid};
// }

// let docOne = addUID({name: 'Daniel', age: 50});

// console.log(docOne.age)

// Generics with interfaces
// interface Resource <T>{
//   uid: number;
//   resourceName: string;
//   data: T;
// }

// const docThree: Resource<object> = {
//   uid: 45,
//   resourceName: 'person',
//   data: {
//     name: 'Micheal'
//   }
// }

// const docFour: Resource<string[]> = {
//   uid: 10,
//   resourceName: 'shopping List',
//   data: ['mango','corn', 'grape']
// }

// Enums
// enum ResourceType {Book, Author, Film, Director, Person}

// interface Resource<T> {
//   uid: number;
//   resourceType: ResourceType;
//   data: T;
// }

// const docThree: Resource<object> = {
//   uid: 45,
//   resourceType: ResourceType.Author,
//   data: {
//     title: 'Micheal'
//   }
// }
// const docFour: Resource<object> = {
//   uid: 45,
//   resourceType: ResourceType.Book,
//   data: {
//     title: 'Yoshi'
//   }
// }

// console.log(docFour, docThree)

// Tuples
// let arr = ['ryu', 25, true];
// arr[0] = false
// arr[1] = 'yoshi'
// arr= [30, 'yoshi', false]

// let tup: [string, number, boolean] = ['ryu', 25, true]
// tup[0] = 'ken'
// tup[1] = 40
// tup[2] = true