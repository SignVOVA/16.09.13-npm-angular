app.factory('Game', function ($q) {
      var LEVELS = [{
        word:'Vegetables',
        wordToGuess:[
            {
                percentage:40,
                name:"potato"
            },
            {
                percentage:15,
                name:"leek"
            },
            {
                percentage:12,
                name:"cabbage"
            },
            {
                percentage:23,
                name:"cabbage"
            },
            {
                percentage:35,
                name:"carrot"
            }
        ],
        lives: 3
      }]

      return {
        get: function(){
          return $q(function(resolve, reject){
            //Simulate async behaviour using $q
            resolve(LEVELS)
          })
} }
})
