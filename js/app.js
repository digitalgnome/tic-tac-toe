/*********************
* Tic-Tac-Toe Game   *
* code by Tariq Khan *
**********************/

(function ($) {

  var bool = true,
      tdLoc = '',
      turn = 'player',
      tdId = '#inner-table td',
      value = 'X',
      locArr = ["one", "two", "three",
                "four", "five", "six",
                "seven", "eight", "nine"],
      keyArr = [],
      locObj = {};

  // logic for computer to block two in a row to go in compChoice
  function hasValue(obj, key, val) {
    return obj.hasOwnProperty(key) && obj[key] === val;
  }

  // check for two Xs in a row to allow computer to block with an O
  function twoXRow() {
    // Row 1
    if ($('#one').hasClass('not-active') === false && (locObj.hasOwnProperty('#two') && locObj['#two'] === 'X') && (locObj.hasOwnProperty('#three') && locObj['#three'] === 'X')) {
      $('#one').text('O').animate({"opacity": 1}, 'slow');
      locObj['#one'] = 'O';
      $('#one').addClass('not-active');
      return true;
    }
    if ($('#two').hasClass('not-active') === false && (locObj.hasOwnProperty('#one') && locObj['#one'] === 'X') && (locObj.hasOwnProperty('#three') && locObj['#three'] === 'X')) {
      $('#two').text('O').animate({"opacity": 1}, 'slow');
      locObj['#two'] = 'O';
      $('#two').addClass('not-active');
      return true;
    }
    if ($('#three').hasClass('not-active') === false && (locObj.hasOwnProperty('#one') && locObj['#one'] === 'X') && (locObj.hasOwnProperty('#two') && locObj['#two'] === 'X')) {
      $('#three').text('O').animate({"opacity": 1}, 'slow');
      locObj['#three'] = 'O';
      $('#three').addClass('not-active');
      return true;
    }

    // Column 1
    if ($('#one').hasClass('not-active') === false && (locObj.hasOwnProperty('#four') && locObj['#four'] === 'X') && (locObj.hasOwnProperty('#seven') && locObj['#seven'] === 'X')) {
      $('#one').text('O').animate({"opacity": 1}, 'slow');
      locObj['#one'] = 'O';
      $('#one').addClass('not-active');
      return true;
    }
    if ($('#four').hasClass('not-active') === false && (locObj.hasOwnProperty('#one') && locObj['#one'] === 'X') && (locObj.hasOwnProperty('#seven') && locObj['#seven'] === 'X')) {
      $('#four').text('O').animate({"opacity": 1}, 'slow');
      locObj['#four'] = 'O';
      $('#four').addClass('not-active');
      return true;
    }
    if ($('#seven').hasClass('not-active') === false && (locObj.hasOwnProperty('#one') && locObj['#one'] === 'X') && (locObj.hasOwnProperty('#four') && locObj['#four'] === 'X')) {
      $('#seven').text('O').animate({"opacity": 1}, 'slow');
      locObj['#seven'] = 'O';
      $('#seven').addClass('not-active');
      return true;
    }

    // Row 2
    if ($('#four').hasClass('not-active') === false && (locObj.hasOwnProperty('#five') && locObj['#five'] === 'X') && (locObj.hasOwnProperty('#six') && locObj['#six'] === 'X')) {
      $('#four').text('O').animate({"opacity": 1}, 'slow');
      locObj['#four'] = 'O';
      $('#four').addClass('not-active');
      return true;
    }
    if ($('#five').hasClass('not-active') === false && (locObj.hasOwnProperty('#four') && locObj['#four'] === 'X') && (locObj.hasOwnProperty('#six') && locObj['#six'] === 'X')) {
      $('#five').text('O').animate({"opacity": 1}, 'slow');
      locObj['#five'] = 'O';
      $('#five').addClass('not-active');
      return true;
    }
    if ($('#six').hasClass('not-active') === false && (locObj.hasOwnProperty('#four') && locObj['#four'] === 'X') && (locObj.hasOwnProperty('#five') && locObj['#five'] === 'X')) {
      $('#six').text('O').animate({"opacity": 1}, 'slow');
      locObj['#six'] = 'O';
      $('#six').addClass('not-active');
      return true;
    }

    // Column 2
    if ($('#two').hasClass('not-active') === false && (locObj.hasOwnProperty('#five') && locObj['#five'] === 'X') && (locObj.hasOwnProperty('#eight') && locObj['#eight'] === 'X')) {
      $('#two').text('O').animate({"opacity": 1}, 'slow');
      locObj['#two'] = 'O';
      $('#two').addClass('not-active');
      return true;
    }
    if ($('#five').hasClass('not-active') === false && (locObj.hasOwnProperty('#two') && locObj['#two'] === 'X') && (locObj.hasOwnProperty('#eight') && locObj['#eight'] === 'X')) {
      $('#five').text('O').animate({"opacity": 1}, 'slow');
      locObj['#five'] = 'O';
      $('#five').addClass('not-active');
      return true;
    }
    if ($('#eight').hasClass('not-active') === false && (locObj.hasOwnProperty('#two') && locObj['#two'] === 'X') && (locObj.hasOwnProperty('#five') && locObj['#five'] === 'X')) {
      $('#eight').text('O').animate({"opacity": 1}, 'slow');
      locObj['#eight'] = 'O';
      $('#eight').addClass('not-active');
      return true;
    }

    // Row 3
    if ($('#seven').hasClass('not-active') === false && (locObj.hasOwnProperty('#eight') && locObj['#eight'] === 'X') && (locObj.hasOwnProperty('#nine') && locObj['#nine'] === 'X')) {
      $('#seven').text('O').animate({"opacity": 1}, 'slow');
      locObj['#seven'] = 'O';
      $('#seven').addClass('not-active');
      return true;
    }
    if ($('#eight').hasClass('not-active') === false && (locObj.hasOwnProperty('#seven') && locObj['#seven'] === 'X') && (locObj.hasOwnProperty('#nine') && locObj['#nine'] === 'X')) {
      $('#eight').text('O').animate({"opacity": 1}, 'slow');
      locObj['#eight'] = 'O';
      $('#eight').addClass('not-active');
      return true;
    }
    if ($('#nine').hasClass('not-active') === false && (locObj.hasOwnProperty('#seven') && locObj['#seven'] === 'X') && (locObj.hasOwnProperty('#eight') && locObj['#eight'] === 'X')) {
      $('#nine').text('O').animate({"opacity": 1}, 'slow');
      locObj['#nine'] = 'O';
      $('#nine').addClass('not-active');
      return true;
    }

    // Column 3
    if ($('#three').hasClass('not-active') === false && (locObj.hasOwnProperty('#six') && locObj['#six'] === 'X') && (locObj.hasOwnProperty('#nine') && locObj['#nine'] === 'X')) {
      $('#three').text('O').animate({"opacity": 1}, 'slow');
      locObj['#three'] = 'O';
      $('#three').addClass('not-active');
      return true;
    }
    if ($('#six').hasClass('not-active') === false && (locObj.hasOwnProperty('#three') && locObj['#three'] === 'X') && (locObj.hasOwnProperty('#nine') && locObj['#nine'] === 'X')) {
      $('#six').text('O').animate({"opacity": 1}, 'slow');
      locObj['#six'] = 'O';
      $('#six').addClass('not-active');
      return true;
    }
    if ($('#nine').hasClass('not-active') === false && (locObj.hasOwnProperty('#three') && locObj['#three'] === 'X') && (locObj.hasOwnProperty('#six') && locObj['#six'] === 'X')) {
      $('#nine').text('O').animate({"opacity": 1}, 'slow');
      locObj['#nine'] = 'O';
      $('#nine').addClass('not-active');
      return true;
    }

    // Diagonal Row from square 1 to square 9
    if ($('#one').hasClass('not-active') === false && (locObj.hasOwnProperty('#five') && locObj['#five'] === 'X') && (locObj.hasOwnProperty('#nine') && locObj['#nine'] === 'X')) {
      $('#one').text('O').animate({"opacity": 1}, 'slow');
      locObj['#one'] = 'O';
      $('#one').addClass('not-active');
      return true;
    }
    if ($('#five').hasClass('not-active') === false && (locObj.hasOwnProperty('#one') && locObj['#one'] === 'X') && (locObj.hasOwnProperty('#nine') && locObj['#nine'] === 'X')) {
      $('#five').text('O').animate({"opacity": 1}, 'slow');
      locObj['#five'] = 'O';
      $('#five').addClass('not-active');
      return true;
    }
    if ($('#nine').hasClass('not-active') === false && (locObj.hasOwnProperty('#one') && locObj['#one'] === 'X') && (locObj.hasOwnProperty('#five') && locObj['#five'] === 'X')) {
      $('#nine').text('O').animate({"opacity": 1}, 'slow');
      locObj['#nine'] = 'O';
      $('#nine').addClass('not-active');
      return true;
    }

    // Diagonal Row from square 3 to square 7
    if ($('#three').hasClass('not-active') === false && (locObj.hasOwnProperty('#five') && locObj['#five'] === 'X') && (locObj.hasOwnProperty('#seven') && locObj['#seven'] === 'X')) {
      $('#three').text('O').animate({"opacity": 1}, 'slow');
      locObj['#three'] = 'O';
      $('#three').addClass('not-active');
      return true;
    }
    if ($('#five').hasClass('not-active') === false && (locObj.hasOwnProperty('#three') && locObj['#three'] === 'X') && (locObj.hasOwnProperty('#seven') && locObj['#seven'] === 'X')) {
      $('#five').text('O').animate({"opacity": 1}, 'slow');
      locObj['#five'] = 'O';
      $('#five').addClass('not-active');
      return true;
    }
    if ($('#seven').hasClass('not-active') === false && (locObj.hasOwnProperty('#three') && locObj['#three'] === 'X') && (locObj.hasOwnProperty('#five') && locObj['#five'] === 'X')) {
      $('#seven').text('O').animate({"opacity": 1}, 'slow');
      locObj['#seven'] = 'O';
      $('#seven').addClass('not-active');
      return true;
    }
    return false;
  }

  function checkWin() {
    // Row 1
    if (locObj['#one'] === 'X' && locObj['#two'] === 'X' && locObj['#three'] === 'X') {
      $('#modal').text('You win! Congratulations!');
      $('#modal').animate({"top": "6%"}, 'slow');
      $(this).addClass('not-active');
    }
    if (locObj['#one'] === 'O' && locObj['#two'] === 'O' && locObj['#three'] === 'O') {
      $('#modal').text('Computer wins! Sorry!');
      $('#modal').animate({"top": "6%"}, 'slow');
      $(this).addClass('not-active');
    }

    // Row 2
    if (locObj['#four'] === 'X' && locObj['#five'] === 'X' && locObj['#six'] === 'X') {
      $('#modal').text('You win! Congratulations!');
      $('#modal').animate({"top": "6%"}, 'slow');
      $(this).addClass('not-active');
    }
    if (locObj['#four'] === 'O' && locObj['#five'] === 'O' && locObj['#six'] === 'O') {
      $('#modal').text('Computer wins! Sorry!');
      $('#modal').animate({"top": "6%"}, 'slow');
      $(this).addClass('not-active');
    }

    // Row 3
    if (locObj['#seven'] === 'X' && locObj['#eight'] === 'X' && locObj['#nine'] === 'X') {
      $('#modal').text('You win! Congratulations!');
      $('#modal').animate({"top": "6%"}, 'slow');
      $(this).addClass('not-active');
    }
    if (locObj['#seven'] === 'O' && locObj['#eight'] === 'O' && locObj['#nine'] === 'O') {
      $('#modal').text('Computer wins! Sorry!');
      $('#modal').animate({"top": "6%"}, 'slow');
      $(this).addClass('not-active');
    }

    // Column 1
    if (locObj['#one'] === 'X' && locObj['#four'] === 'X' && locObj['#seven'] === 'X') {
      $('#modal').text('You win! Congratulations!');
      $('#modal').animate({"top": "6%"}, 'slow');
      $(this).addClass('not-active');
    }
    if (locObj['#one'] === 'O' && locObj['#four'] === 'O' && locObj['#seven'] === 'O') {
      $('#modal').text('Computer wins! Sorry!');
      $('#modal').animate({"top": "6%"}, 'slow');
      $(this).addClass('not-active');
    }

    // Column 2
    if (locObj['#two'] === 'X' && locObj['#five'] === 'X' && locObj['#eight'] === 'X') {
      $('#modal').text('You win! Congratulations!');
      $('#modal').animate({"top": "6%"}, 'slow');
      $(this).addClass('not-active');
    }
    if (locObj['#two'] === 'O' && locObj['#five'] === 'O' && locObj['#eight'] === 'O') {
      $('#modal').text('Computer wins! Sorry!');
      $('#modal').animate({"top": "6%"}, 'slow');
      $(this).addClass('not-active');
    }

    // Column 3
    if (locObj['#three'] === 'X' && locObj['#six'] === 'X' && locObj['#nine'] === 'X') {
      $('#modal').text('You win! Congratulations!');
      $('#modal').animate({"top": "6%"}, 'slow');
      $(this).addClass('not-active');
    }
    if (locObj['#three'] === 'O' && locObj['#six'] === 'O' && locObj['#nine'] === 'O') {
      $('#modal').text('Computer wins! Sorry!');
      $('#modal').animate({"top": "6%"}, 'slow');
      $(this).addClass('not-active');
    }

    // Diagonal Row square 1 to square 9
    if (locObj['#one'] === 'X' && locObj['#five'] === 'X' && locObj['#nine'] === 'X') {
      $('#modal').text('You win! Congratulations!');
      $('#modal').animate({"top": "6%"}, 'slow');
      $(this).addClass('not-active');
    }
    if (locObj['#one'] === 'O' && locObj['#five'] === 'O' && locObj['#nine'] === 'O') {
      $('#modal').text('Computer wins! Sorry!');
      $('#modal').animate({"top": "6%"}, 'slow');
      $(this).addClass('not-active');
    }

    // Diagonal Row square 3 to square 7
    if (locObj['#three'] === 'X' && locObj['#five'] === 'X' && locObj['#seven'] === 'X') {
      $('#modal').text('You win! Congratulations!');
      $('#modal').animate({"top": "6%"}, 'slow');
      $(this).addClass('not-active');
    }
    if (locObj['#three'] === 'O' && locObj['#five'] === 'O' && locObj['#seven'] === 'O') {
      $('#modal').text('Computer wins! Sorry!');
      $('#modal').animate({"top": "6%"}, 'slow');
      $(this).addClass('not-active');
    }
  }

  function convertNumToString(num) {
    var strNum = "";
    switch (num) {
      case 1:
        strNum = "one";
        break;
      case 2:
        strNum = "two";
        break;
      case 3:
        strNum = "three";
        break;
      case 4:
        strNum = "four";
        break;
      case 5:
        strNum = "five";
        break;
      case 6:
        strNum = "six";
        break;
      case 7:
        strNum = "seven";
        break;
      case 8:
        strNum = "eight";
        break;
      case 9:
        strNum = "nine";
        break;
    }
    return strNum;
  }

  function compChoice() {
    keyArr = Object.keys(locObj);

    if (keyArr.length < locArr.length) {
      if (twoXRow()) {
        return true;
      } else {
        var choice ="#" + locArr[Math.floor((Math.random() * 9))];
        // loop through locObj to determine free locations
        while ($.inArray(choice, keyArr) !== -1) {
          choice ="#" + locArr[Math.floor((Math.random() * 9))];
        }
        console.log("choice = ", choice);
        $(choice).text('O').animate({"opacity": 1}, 'slow');
        locObj[choice] = 'O';
        $(choice).addClass('not-active');
      }
    }
    return checkWin();
  }

  // Detect which square has been clicked
  $(tdId).click(function(event) {
    $(this).addClass('not-active');
    // get td id that has been clicked and concatenate a # to use as a jQuery selector
    tdLoc = '#' + $(this).attr('id');
    // store both td id as key and the value variable as the value
    locObj[tdLoc] = 'X';
    // set the td text to value variable
    if (keyArr.length < locArr.length-1) {
      $(tdLoc).text('X').animate({"opacity": 1}, 'slow', function() {
        compChoice();
      });
    } else if (keyArr.length === 8) {
      $(tdLoc).text('X').animate({"opacity": 1}, 'slow');
    }
    checkWin();
    console.log('locObj =', locObj);
    console.log('keyArr =', Object.keys(locObj));
  });

$(tdId).hover(
  function() {
    $(this).css({"opacity": 1});
  },
  function() {
    $(this).css({"opacity": 0});
  }
);

// Button controls
$('input[name="reset"]').click(function(event) {
  event.preventDefault();
  $(tdId).html('&nbsp;');
  $(tdId).removeClass('not-active');
  value = 'X';
  keyArr = [];
  locObj = {};
  $('#modal').animate({"top": "-1000px"}, 'slow');
});

$('input[name="code"]').click(function() {
  window.open("https://github.com/digitalgnome/tic-tac-toe", "_blank");
});

})(jQuery);
