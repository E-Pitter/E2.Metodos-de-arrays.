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

// 🔥 Utilizando métodos de array e iterando sobre el array de pizzas, realizar las siguientes actividades, imprimiendo en consola:

// a)  Las pizzas que tengan un id impar.
// pizzas.forEach((pizza)=> {
//   if (pizza.id % 2 !== 0) {
//     console.log(pizza)
//   }
// })

// b) Responder: ¿Hay alguna pizza que valga menos de $600?
//  const barata = pizzas.find((pizza) => {
//   return pizza.precio <= 600;
// })

// console.log(`la pizza de ${barata.nombre}, vale ${barata.precio}`);


// c) El nombre de cada pizza con su respectivo precio.
// const names = pizzas.filter((elem) => {
//   return elem;
// } )
// names.forEach(element => {
  
// });

// console.log(names)

// for (const pizza of pizzas) {
//   console.log(`La pizza ${pizza.nombre} cuesta ${pizza.precio} pesos.`);
// }

// pizzas.forEach((pizza) => {
//   console.log(`La pizza ${pizza.nombre} cuesta ${pizza.precio} pesos.`);
// });


// d) Todos los ingredientes de cada pizza (En cada iteración imprimir los ingredientes de la pizza que se esta recorriendo). Ayuda: van a tener que realizar dos recorridos, ya que cada pizza del array de pizzas tiene una propiedad "ingredientes" cuyo valor es un array con ingredientes.

// pizzas.forEach((pizza) => {
//   console.log(pizza.nombre, pizza.ingredientes);
// })


// pizzas.forEach((pizza) => {
//   console.log(`la ${pizza.nombre}, contiene:`);
//   pizza.ingredientes.forEach((ingrediente) =>{
//     console.log(ingrediente);
//   })
//   console.log(" ");
// })

// for (const pizza of pizzas) {
//   console.log(`La pizza ${pizza.nombre} cuesta ${pizza.precio} pesos y sus ingredientes son:`);
//   for (const ingrediente of pizza.ingredientes) {
//     console.log(ingrediente);
//   }
//   console.log(" ");
// }