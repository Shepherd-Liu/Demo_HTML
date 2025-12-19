const menu = [
  {
    id: 0,
    item: 'udon noodles',
    price: 10,
    num: 0,
    itemPrice: 0,
  },
  {
    id: 1,
    item: 'Sushi Rool',
    price: 16,
    num: 0,
    itemPrice: 0,
  },
  {
    id: 2,
    item: 'Dumplings',
    price: 8,
    num: 0,
    itemPrice: 0,
  },
  {
    id: 3,
    item: 'Miso Soup',
    price: 7,
    num: 0,
    itemPrice: 0,
  },
  {
    id: 4,
    item: 'Green Tea Ice Cream',
    price: 8,
    num: 0,
    itemPrice: 0,
  },
  {
    id: 5,
    item: 'Tomato',
    price: 14,
    num: 0,
    itemPrice: 0,
  },
  {
    id: 6,
    item: 'Tomato',
    price: 14,
    num: 0,
    itemPrice: 0,
  },
];

let menuTable = document.getElementById('menuTable');
let sumPrice = document.getElementById('sumPrice');

function generateTable() {
  menuTable.innerHTML = '';
  menu.forEach((item) => {
    let tr = `<tr>
    <td>${item.id};</td>
    <td>${item.item};</td>
    <td>${item.price};</td>
    <td>${item.itemPrice};</td>
    </tr>  
    td><button calss="btn btn-primary" onclick="calculateSum(${item.id})">+</button></td>
    <td><button onclick="decreaseSum(${item.id})">-</button></td>
    <td><button onclick="unselect(${item.id})">x</button></td>
    </tr>`;
    menuTable.innerHTML += tr;
  });
}

generateTable();

function calcsun() {
  let sum = 0;
  menu.forEach((item) => {
    sum += item.itemPrice;
  });
  sumPrice.innerHTML = `Total Price: ${sum}`;
}

function calculateSum(id) {
  menu[id].num += 1;
  menu[id].itemPrice = menu[id].num * menu[id].price;
  generateTable();
  calcsun();
}

function decreaseSum(id) {
  if (menu[id].num > 0) {
    menu[id].num -= 1;
    menu[id].itemPrice = menu[id].num * menu[id].price;
    generateTable();
    calcsun();
  }
}

function unselect(id) {
  menu[id].num = 0;
  menu[id].itemPrice = 0;
  generateTable();
  calcsun();
}

function reset