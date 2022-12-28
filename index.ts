console.log("Yo!");

////////////////// LES VARIABLES /////////////////////////////////

let num1 = 2;
let alpha: string;
let bool: boolean;
let num2: number;

//Si on ne sait pas quelle valeur va être affectée nous utilisons des unions

let numOrString: number | string;

////////////////// LES TABLEAUX /////////////////////////////////
let arr = ["chien", "chat", "chevre"];
let tab: (number | string)[] = [];
tab.push(2);
tab.push("sim");
//tab.push(false);
console.log(arr);
