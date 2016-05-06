var app = angular.module("demoTasks", []);

app.factory('taskFactory', function() {

  var tasks = [
  { task: 'Sketch comic book hero', time: 3 },
  { task: 'Sketch comic book villian', time: 2},
  { task: 'Develop Hero Backstory', time: 1 },
  { task: 'Develop Hero Super Powers', time: 2 }
  ];

  var steviTasks = [];

  var andyTasks = [];

  var factory = {};

   factory.getTasks = function() {
    return tasks;
  }


  factory.getSteviTasks = function() {
    return steviTasks;
  }


  factory.getAndyTasks = function() {
    return andyTasks;
  }


  factory.deleteTask = function(task){

    var index = tasks.indexOf(task);
    tasks.splice(index, 1);
    //sold.push(car);

  }

  factory.updateSteviTask = function(task){

    var index = steviTasks.indexOf(task);
    steviTasks.splice(index, 1);
    task.time=0;
    steviTasks.splice(index, 0, task);

  }

  factory.updateAndyTask = function(task){

    var index = andyTasks.indexOf(task);
    andyTasks.splice(index, 1);
    task.time=0;
    andyTasks.splice(index, 0, task);

  }

 
   factory.assignTask = function(task,name){

    if(name=="Stevi")
    {
      var index = tasks.indexOf(task);
      tasks.splice(index, 1);
      steviTasks.push(task);

     // return steviTasks;

    }
    else if(name=="Andy")
    {

      var index = tasks.indexOf(task);
      tasks.splice(index, 1);
      andyTasks.push(task);
      
     //  return andyTasks;

    }


  }

  return factory;

 });

app.controller("newtaskController", function($scope, taskFactory) {
  //$scope.options = ['Gas', 'Hybrid', 'Electric', 'Diesel'];

  $scope.tasks = taskFactory.getTasks();

  $scope.addTask = function() {
    console.log($scope.newtask)
    $scope.tasks.push($scope.newtask);
    $scope.newtask = {};
  }

});

app.controller("taskController", function($scope, taskFactory) {

   $scope.options =  [ 'Stevi','Andy'  ];

   $scope.tasks = taskFactory.getTasks(); 

   $scope.delete = function(task) {

      taskFactory.deleteTask(task);
    }

  
  $scope.assign = function(task) {
   
    taskFactory.assignTask(task,task.empName);  
      
  }

});

app.controller("steviController", function($scope, taskFactory) {

  $scope.steviTasks = taskFactory.getSteviTasks(); 

  $scope.updateTaskS =function(st) {
    
    
    taskFactory.updateSteviTask(st);   

    //$scope.valClickS=false;

  }

   $scope.getTotalHrsS = function() {

    var total = 0;
    $scope.steviTasks.forEach(function(task) {
      total += task.time
    });
    return total;
  };
  

   
  
  
});

app.controller("andyController", function($scope, taskFactory) {

  $scope.andyTasks = taskFactory.getAndyTasks();
  //$scope.valClickA=true;

  //$scope.totalHrs=0;

  $scope.updateTaskA =function(at) {
    
    
    taskFactory.updateAndyTask(at);   

    //$scope.valClickA=false;

  }

   $scope.getTotalHrsA = function() {

    var total = 0;
    $scope.andyTasks.forEach(function(task) {
      total += task.time
    });
    return total;
  };
  
});
