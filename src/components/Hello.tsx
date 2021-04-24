import * as React from "react";
const moment = require('moment');

interface LabelledValue {
  label?: string;
}

function printLabel(labelledObj: LabelledValue): number {
  console.log(labelledObj.label);
  return 1;
}

let myObj = {colour: "red", size: 10, label: "Size 10 Object"};
printLabel(myObj);


interface SquareConfig {
  color?: string;
  width?: number;
}

function createSquare(config: SquareConfig): void {
  console.log(config.color);
  // let newSquare = {color: "white", area: 100};
  // if (config.color) {
  //   // Error: Property 'clor' does not exist on type 'SquareConfig'
  //   newSquare.color = config.color;
  // }
  // if (config.width) {
  //   newSquare.area = config.width * config.width;
  // }
  // return newSquare;
}

createSquare({ width: 100, color: "blue"});

interface StringArray {
  [index: number]: string;
}

let a = Symbol(1);

let strArr : StringArray = {
  1: "key",
  2: "123",
  [a]: 'das'
}

class Animal {
  // public name: string;
  public constructor(public name: string) { }
  public move(distanceInMeters: number) {
      console.log(`${this.name} moved ${distanceInMeters}m.`);
  }
}

class Animal1 {
  public name: string;
  public constructor(theName: string) { this.name = theName; }
  // public move(distanceInMeters: number) {
  //     console.log(`${this.name} moved ${distanceInMeters}m.`);
  // }
}

let a1 = new Animal("a1");
let a2 = new Animal1("a2");
console.log('a1...................', a1)
// console.log('a2...................', a2)
// a1 = a2
// console.log('a1...................', a1)
// console.log('a2...................', a2)

export interface HelloProps { compiler: string; framework: string; }

abstract class Department {

  constructor(public name: string) {
  }

  printName(): void {
      console.log('Department name: ' + this.name);
  }

  abstract printMeeting(): void; // 必须在派生类中实现
}

class AccountingDepartment extends Department {

  constructor() {
      super('Accounting and Auditing'); // 在派生类的构造函数中必须调用 super()
  }

  printMeeting(): void {
      console.log('The Accounting Department meets each Monday at 10am.');
  }

  generateReports(): void {
      console.log('Generating accounting reports...');
  }
}

let department: AccountingDepartment; // 允许创建一个对抽象类型的引用
// department = new Department(); // 错误: 不能创建一个抽象类的实例
department = new AccountingDepartment(); // 允许对一个抽象子类进行实例化和赋值
// console.log(department.printName());
// console.log(department.printMeeting());
// console.log(department.generateReports());

class Greeter {
  static standardGreeting = "Hello, there";
  greeting: string;
  greet() {
      if (this.greeting) {
          return "Hello, " + this.greeting;
      }
      else {
          return Greeter.standardGreeting;
      }
  }
}

let greeter1: Greeter;
greeter1 = new Greeter();
console.log(greeter1.greet());

let greeterMaker: typeof Greeter = Greeter;
greeterMaker.standardGreeting = "Hey there!";

let greeter2: Greeter = new greeterMaker();
console.log(greeter2.greet());

let suits = ["hearts", "spades", "clubs", "diamonds"];

function pickCard(x: {suit: string; card: number; }[]): number;
function pickCard(x: number): {suit: string; card: number; };
function pickCard(x: number | { suit: string; card: number; }[]): any {
    // Check to see if we're working with an object/array
    // if so, they gave us the deck and we'll pick the card
    if (typeof x == "object") {
        let pickedCard = Math.floor(Math.random() * x.length);
        return pickedCard;
    }
    // Otherwise just let them pick the card
    else if (typeof x == "number") {
        let pickedSuit = Math.floor(x / 13);
        return { suit: suits[pickedSuit], card: x % 13 };
    }
}

let myDeck = [{ suit: "diamonds", card: 2 }, { suit: "spades", card: 10 }, { suit: "hearts", card: 4 }];
let pickedCard1 = myDeck[pickCard(myDeck)];
// alert("card: " + pickedCard1.card + " of " + pickedCard1.suit);

let pickedCard2 = pickCard(15);
// alert("card: " + pickedCard2.card + " of " + pickedCard2.suit);

console.log('moment..............', moment(new Date()).valueOf())


export const Hello = (props: HelloProps) => <h1>Hello2 from {props.compiler} and {props.framework}!</h1>;