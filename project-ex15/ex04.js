import fs from 'fs';
import update from 'react-addons-update';

let state;

state = {
    order: JSON.parse(fs.readFileSync('./data.json').toString())
}

let updateOrder = update(state.order, {
    receive: {
        $set: '서울시 강남구 논현동'
    },
    payment: {
        method: {
            $set: 'Mobile'
        }
    },
    products: {
        0: {
            amount: {
                $set: 5
            }
        },
        $push: [{
            "no": "123123",
            "name": "박관우",
            "price": 70000,
            "amount": 5
        }]
    }
});