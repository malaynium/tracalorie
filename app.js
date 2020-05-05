// Storage controller

// item Controller (model)
const ItemCtrl = (function(params) {
  // item constructor
  const item = function(id,name, calories){
    this.id = id;
    this.name = name;
    this.calories = calories;
  }

  // data structures / state
  const data = {
    item:[
      {id: 0, name:'Steak Dinner', calories: 1200},
      {id: 1, name:'Cookie', calories: 400},
      {id: 2, name:'Eggs', calories: 300}
    ],
    currentItem: null,
    totalCalories:0
  }

  // public methods
  return {
    logData: function(){
      return data;
    }
  }
  
})();




// Ui Controller (view)
const UICtrl = (function(params) {
  
})();



// App Controller (controller)
const App = (function(ItemCtrl, UICtrl) {
  // Public methods
  return {
    init: function(){
      console.log('Initilizing app..');
    }

  }

})(ItemCtrl, UICtrl);


// initialize app
App.init();