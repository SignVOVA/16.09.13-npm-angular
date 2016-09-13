var app = angular.module('myapp', []);
app.controller('DemoCtrl', function($scope, Game) {   // , game) {
  var lives

  Game.get().then(function(levels){
    $scope.level = levels[0]
    lives = $scope.level.wordToGuess.length
  })

  $scope.guessed=[]


  $scope.addWord = function(word) {



    //console.log("here", word)
    var isCorrect = $scope.level.wordToGuess.filter(solution=>word==solution.name)
    if (isCorrect.length) {
      $scope.guessed.push(isCorrect[0])
    } else {
      if ($scope.level.lives > 0) {
        $scope.level.lives -= 1
        console.log($scope.level.lives);
        //alert("You have " + $scope.level.lives + " lives remaining!")
      } else {
        //alert("You lost, try agin")
        //lives = $scope.level.wordToGuess.length
      }


    }
}

  $scope.myData = {
  // Chart.js data structure goes here
  // e.g. Pie Chart Data Structure http://www.chartjs.org/docs/#doughnut-pie-chart-data-structure
  labels: [
    "Red",
    "Blue",
    "Yellow"
  ],
  datasets: [
    {
      data: [300, 50, 100],
      backgroundColor: [
        "#FF6384",
        "#36A2EB",
        "#FFCE56"
      ],
      hoverBackgroundColor: [
        "#FF6384",
        "#36A2EB",
        "#FFCE56"
      ]
    }
  ]
  };

  $scope.myOptions =  {
  // Chart.js options go here
  // e.g. Pie Chart Options http://www.chartjs.org/docs/#doughnut-pie-chart-chart-options
  };

  $scope.onChartClick = function (event) {
  console.log(event);
  };




})
