const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

var id = '6b7178710140d826c05750e211';

// if (!ObjectID.isValid(id)) {
//     console.log('Id not valid');
// }
// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos', todos);
// });

// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//     if (!todo) {
//         return console.log('Id not found');
//     }
//     console.log('Todo by id', todo);
// }).catch((e) => console.log(e));

var id2 = '5b7151045bb53233788524bb'

User.findById(id2).then((user) => {
    if (!user) {
        return console.log('Unable to find user');
    }

    console.log(user);
}).catch((e) => console.log(e));