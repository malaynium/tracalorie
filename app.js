// Storage controller

// item Controller (model)
const ItemCtrl = (function() {
  // item constructor
  const item = function(id,name, calories){
    this.id = id;
    this.name = name;
    this.calories = calories;
  }

  // data structures / state
  const data = {
    items:[
      {id: 0, name:'Steak Dinner', calories: 1200},
      {id: 1, name:'Cookie', calories: 400},
      {id: 2, name:'Eggs', calories: 300}
    ],
    currentItem: null,
    totalCalories:0
  }

  // public methods
  return {
    getItems: function(){
      return data.items;
    },

    logData: function(){
      return data;
    }
  }
  
})();




// Ui Controller (view)
const UICtrl = (function() {
  const UISelectors = {
    itemList: '#item-list'
  }
  
  // Public methods
  return {
    populateItemList: function(items) {
      let html = '';

      items.forEach(function(item){
        html += `<li class="collection-item" id="item-${item.id}">
        <strong>${item.name}: </strong> <em>${item.calories} Calories</em>
        <a href="#" class="secondary-content">
          <i class="edit-item fa fa-pencil"></i>
        </a>
      </li>`;
      });
    
      // insert the list items
      document.querySelector(UISelectors.itemList).innerHTML = html;
      

    }
  }

})();






// App Controller (controller)
const App = (function(ItemCtrl, UICtrl) {
  // Public methods
  return {
    init: function(){

      // fetch items from data structure
      const items = ItemCtrl.getItems();  
  
      // populate list with items
      UICtrl.populateItemList(items);
      
    }

  }

})(ItemCtrl, UICtrl);


// initialize app
App.init();