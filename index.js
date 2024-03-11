const pizzas = [
  {
    id: 1,
    nombre: "pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
  },

  {
    id: 2,
    nombre: "pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
  },

  {
    id: 3,
    nombre: "pizza Napolitana",
    precio: 1350,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas"],
  },

  {
    id: 4,
    nombre: "pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
  },

  {
    id: 5,
    nombre: "pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas", "Cebolla"],
  },

  {
    id: 6,
    nombre: "pizza con Anana",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
  },
];


// ###################  --A--  ########################
let idImpar=pizzas.filter(pizza=>pizza.id%2!==0);
let imparfiltro =  idImpar.map((pizza) => pizza.nombre).join(", ");

console.log("Las pizzas con id impar son: "+imparfiltro);


// ###################  --B--  ######################## 
let menor600 = pizzas.filter((pizza)=>pizza.precio<600);
let Barato = menor600.map((pizza)=>pizza.nombre).join(", ");

console.log("Las pizzas con valor menor a $600 son: " + Barato)


// ###################  --C--  ########################
let valorPizzas = (pizza) => {
  for (i = 0; i < pizza.length; i++) {
    console.log( "La " + pizza[i].nombre + " tiene un valor de: $" + (pizza[i].precio));
  } 
}

valorPizzas(pizzas)


// ###################  --D--  ########################
let ingredientesPizza = (pizza) => {
for(i = 0; i < pizza.length; i++){
  console.log(`Los ingredientes de la ${pizza[i].nombre} son: ${pizza[i].ingredientes.join(', ')}`);
}
}

ingredientesPizza(pizzas)



