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

////////////////// LES OBJETS /////////////////////////////////

/* let players = {
  id: 0,
  name: "Zidane",
};

console.log(players);

const sayName = () => {
  console.log(players.surname);
};
sayName(); */

//create interface pour la declaration dans un objet

interface Player {
  id: number;
  name: string;
  jersey: number;
}

let zidane: Player = {
  id: 1,
  name: "zidane",
  jersey: 10,
};
//if it not required with use a question mark(?)

interface Nom {
  nom: string;
  prenom: string;
  sexe?: string;
}

const simeon: Nom = {
  nom: "zilu",
  prenom: "simeon",
};

////////////////// LES FONCTIONS /////////////////////////////////

const sayMyName = (name: string) => {
  console.log(`Bonjour ${name}`);
};

sayMyName("sims");

const ageDuCapitaine = (age: number, size?: number | string) => {
  if (size) {
    console.log(`le capitaine mesure ${size}cm et a ${age} ans`);
  } else {
    console.log(`le capitaine a ${age} ans`);
  }
};
