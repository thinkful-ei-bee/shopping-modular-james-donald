"use-strict";
/* global cuid Item */

const store = (function() {
  const foo = "bar";

  const items = [
    { id: cuid(), name: "apples", checked: false },
    { id: cuid(), name: "oranges", checked: false },
    { id: cuid(), name: "milk", checked: true },
    { id: cuid(), name: "bread", checked: false }
  ];
  const hideCheckedItems = false;
  const searchTerm = "";

  const findById = function(id) {
    return items.find(item => item.id === id);
  };

  const addItem = function(name) {
    try {
      Item.validateName(name);
      this.items.push(create(name));
    } catch (error) {
      console.log("Cannot add item: {error.message}");
    }
  };

  const findAndToggleChecked = function(id) {};

  return {
    items,
    hideCheckedItems,
    searchTerm
  };
})();
