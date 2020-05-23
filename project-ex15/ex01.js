import fs from 'fs';

let state;
state = {
    order: JSON.parse(fs.readFileSync('./data.json').toString())
}

let updateProducts = state.order.products
updateProducts.push({
    "no": "s001-001",
    "name": "블루양말",
    "price": 4000,
    "amount": 4
});
// console.log(state.order.products, updateProducts, state.order.products === updateProducts);

////////////////////

state = {
    order: JSON.parse(fs.readFileSync('./data.json').toString())
}
let updateProducts2 = state.order.products.concat({
    "no": "s001-001",
    "name": "블루양말",
    "price": 4000,
    "amount": 4
})
// console.log(state.order.products, updateProducts, state.order.products === updateProducts);

state = {
    order: JSON.parse(fs.readFileSync('./data.json').toString())
}
let updateProducts3 = [...state.order.products, {
    "no": "s001-001",
    "name": "블루양말",
    "price": 4000,
    "amount": 4
}];
// console.log(state.order.products, updateProducts3, state.order.products === updateProducts3);