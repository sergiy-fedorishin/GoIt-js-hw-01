function makeTransaction(quantity, pricePerDroid) {
  const totalPrice = quantity * pricePerDroid;
  return `You ordered ${quantity} droids worth ${totalPrice} credits!`;
}

console.log(makeTransaction(5, 3000));
console.log(makeTransaction(3, 1000));
console.log(makeTransaction(10, 500));

// дз 2 завдання 1

// function makeTransaction(quantity, pricePerDroid, customerCredits) {

  //  Складає та повертає повідомлення про купівлю ремонтних дроїдів

//   Args: quantity: Кількість замовлених дроїдів.
//     pricePerDroid: Ціна одного дроїда.
//     customerCredits: Сума коштів на рахунку клієнта.

//   Returns:
    //  Повідомлення про купівлю або повідомлення про недостатньо коштів.

//   // Розрахунок загальної суми замовлення
//   const total_price = quantity * pricePerDroid;

  //  Перевірка наявності коштів
//   if (customerCredits < total_price) {
//     return "Недостатньо коштів!";
//   } else {
//     return `Ви замовили ${quantity} дроїдів на суму ${total_price} кредитів!`;
//   }
// }



// const quantity = 5;
// const pricePerDroid = 100;
// const customerCredits = 550;

// const message = makeTransaction(quantity, pricePerDroid, customerCredits);

// console.log(message);
