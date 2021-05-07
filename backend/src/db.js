/*
Item example:
{
  name: "과제하기",
  done: false
}
*/
let ITEMS = [];
let ID_COUNTER = 1;

function getAll() {
  return ITEMS;
}

function add(name) {
  const newItem = {
    id: (ID_COUNTER++).toString(),
    name,
    done: false
  };
  ITEMS.push(newItem);
  return newItem;
}

function remove(id) {
  ITEMS = ITEMS.filter(v => v.id !== id);
}

function setDone(id) {
  ITEMS = ITEMS.map(v => {
    if (v.id === id) {
      v.done = true;
    }
    return v;
  });
}

module.exports = {
  getAll,
  add,
  remove,
  setDone
};
