$(document).ready(function(){ 
  
  var answer = Math.floor((Math.random()* 100) +1); 
  var input = $("#guess");
  var button = $("#submit");  
  var guess = input.val();
  var reset = $("#reset"); 
  var reset_game = Math.floor((Math.random()* 100) +1); 
  var counter = 0;
  var body = $("body");
  var result = $("#result");



  //Main Game Check 
  input.keyup(function(event) {
    if (event.keyCode === 13) {
      button.click();
    }
  })
  button.on('click', function(){ 
    var guess = input.val();
    if (!valid(guess)) {
      return; 
    } 
    if (guess < answer) {
    body.removeClass("hot-background").addClass("cold-background");
    result.empty().append("<p>Sorry Too Low</p>");
    counter ++;
    input.select();
    
  } else if (guess > answer) {
    body.removeClass("cold-background").addClass("hot-background");
    result.empty().append("<p>Sorry Too High</p>");
    counter ++;
    input.select();
    
  } else {
    body.removeClass("cold-background").removeClass("hot-background");
    result.empty().append("<p>Congrats you got it!</p>"); 
    counter ++;
    input.select();
    };
  }); 

    button.on("click", function(){
      $("#counter").empty();
      $("#counter").append(counter);
    })

  //Valid input check 
  function valid(guess) {
    if (!guess.match(/^[0-9]*$/)) {
      alert("Invalid: Please Select a Number"); 
      return false;
    } else if (guess > 100 || guess < 1) {
      alert("Invalid: Please Select a Number between 1 - 100"); 
      return false;
    } else {
      return true; 
    }
  };

 //Game Reset  
  reset.on('click', function(){ 
    counter.empty();

  }); 

});



