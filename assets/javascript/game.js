$(document).ready(function() {
    var computerPick = Math.floor(Math.random() * 26) + 1;
    var lockGame = false;
    console.log("Computer Pick: " + computerPick);

  $(".btn-choice").on("click", function() {
      if (lockGame !== true) {
        var yourPick = $(this).val();
        console.log("Your Pick: " + yourPick);

  $("#computer-pick").text(computerPick);

  if (parseInt(yourPick) === computerPick) {
  $("#result").text("Daaaaang you're smart! Wanna play again? Refresh the page");
          lockGame = true;
        }
  else {
  $("#result").text("Nope. You'll never win. Refresh and lose again");
  lockGame = true;
        }
      }

    });
  });

