const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

var id = '6b7178710140d826c05750e211';

// Todo.remove({})
// Todo.remove({}).then((result) => {
//     console.log(result);
// }).catch((e) => console.log(e));


Todo.findByIdAndRemove('5b718cbd2c5b553c20372b9f').then((todo) => {
    console.log(todo);
});