import { THello } from "./types";


export function sayHelloMessage({ firstName, lastName, age }: THello) {


    let greeting = `Hello, ${firstName}!`;

    if (lastName) {
        greeting += ` ${lastName}`;
    }
    if (age) {
        greeting += `, you are ${age} years old.`;
    }
    console.log(greeting)
}