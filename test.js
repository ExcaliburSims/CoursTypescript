console.log("merci");
let array = ["chien", "chat", "chevre"];
array[1] = "malewa";
array[0] = 25;
console.log(array);

////////////////// LES OBJETS /////////////////////////////////

let player = {
  id: 0,
  name: "Zidane",
};

console.log(player);

const sayName = () => {
  console.log(player.surname);
};
sayName();
