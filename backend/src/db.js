/*
Item example:
{
  name: "과제하기",
  done: false
}
*/

import TodoModel from './models/todo.js';

function getAll(callback) {
  TodoModel.find({}, (error, result) => {
    if (error) {
      console.log(error);
      callback([]);
    } else {
      callback(result);
    }
  });
}

function add(name, callback) {
  const newItem = new TodoModel({
    name
  });
  newItem.save((error, result) => {
    callback(result);
  });
}

function remove(id, callback) {
  TodoModel.deleteOne({_id: id}, (error) => {
    callback();
  });
}

function toggleDone(id, done, callback) {
  TodoModel.updateOne({_id: id}, {done: !done}, () => {
    callback();
  });
}

export default {
  getAll,
  add,
  remove,
  toggleDone
};
