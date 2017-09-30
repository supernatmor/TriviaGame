var correct, incorrect, time, timeLeft;
var intervalId;
//timeout 1 second to run another function to decrease time by 1
function timer() {
    timeLeft = 10;
    intervalID = setInterval(countdown, 1000)
}
//function to reduce timeLeft and display in header
function countdown() {
    console.log(timeLeft);
    timeLeft--;
    $(".panel-heading").html(timeLeft);
    if (timeLeft <= 0) {
        time = false; //sets check var to false, triggers wrong answer function
        wrong();
    }
}

//starts the game
$(".panel-heading").on("click", function() {
    start();
});

//start function, sets vars, updates display
function start() {
    correct = 0;
    incorrect = 0;
    timeLeft = 10;
    $(".panel-heading").html(timeLeft);
    console.log("right: " + correct);
    console.log("wrong: " + incorrect);
    $(".panel-heading").off("click");
    $(".answer").css("opacity", "1");
    $(".score").css("opacity", "1");
    $("#right").html("Number Correct: " + correct);
    $("#wrong").html("Number incorrect: " + incorrect);
    question1();
};
//function to set question and blocks for first question
function question1() {
    time = true;
    timeLeft = 10;
    $(".panel-heading").html(timeLeft);
    timer();
    $(".question").html("This is the first question");
    while (time == true) {
        $("#1").text("correct answer").on("click", function() {
            right();
            $(".question").html("Correct answer is A")
            setTimeout(question2, 3000);
        })
        $("#2").text("incorrect answer").on("click", function() {
            wrong();
            $(".question").html("Correct answer is A")
            setTimeout(question2, 3000);
        })
        $("#3").text("incorrect answer").on("click", function() {
            wrong();
            $(".question").html("Correct answer is A")
            setTimeout(question2, 3000);
        })
        $("#4").text("incorrect answer").on("click", function() {
            wrong();
            $(".question").html("Correct answer is A")
            setTimeout(question2, 3000);
        })
    }
    if (time === false) {
        wrong();
        $(".question").html("Correct answer is A")
        setTimeout(question2, 3000);
    }


}
//function to set question and blocks for second question

function question2() {
    time = true;
    timeLeft = 10;
    $(".panel-heading").html(timeLeft);
    timer();
    $(".question").text("This is the second question");
    while (time == true) {
        $("#1").text("incorrect answer").on("click", function() {
            wrong();
            $(".question").html("Correct answer is C")
            setTimeout(question3, 3000);
        })
        $("#2").text("incorrect answer").on("click", function() {
            wrong();
            $(".question").html("Correct answer is C")
            setTimeout(question3, 3000);
        })
        $("#3").text("correct answer").on("click", function() {
            right();
            $(".question").html("Correct answer is C")
            setTimeout(question3, 3000);
        })
        $("#4").text("incorrect answer").on("click", function() {
            wrong();
            $(".question").html("Correct answer is C")
            setTimeout(question3, 3000);
        })
    }
    if (time === false) {
        wrong();
        $(".question").html("Correct anser is C");
        setTimeout(question3, 3000);
    }



}
//function to set question and blocks for third question

function question3() {
    time = true;
    timeLeft = 10;
    $(".panel-heading").html(timeLeft);
    timer();
    $(".question").text("This is the third question");
    while (time == true) {
        $("#1").text("incorrect answer").on("click", function() {
            wrong();
            $(".question").html("Correct answer is D")
            setTimeout(question4, 3000);
        })
        $("#2").text("incorrect answer").on("click", function() {
            wrong();
            $(".question").html("Correct answer is D")
            setTimeout(question4, 3000);
        })
        $("#3").text("incorrect answer").on("click", function() {
            wrong();
            $(".question").html("Correct answer is D")
            setTimeout(question4, 3000);
        })
        $("#4").text("correct answer").on("click", function() {
            right();
            $(".question").html("Correct answer is D")
            setTimeout(question4, 3000);
        })
    }
    if (time === false) {
        wrong();
        $(".question").html("Correct anser is D");
        setTimeout(question4, 3000);
    }
}
//function to set question and blocks for fourth question

function question4() {
    time = true;
    timeLeft = 10;
    $(".panel-heading").html(timeLeft);
    timer();
    $(".question").text("This is the final question");
    while (time == true) {
        $("#1").text("incorrect answer").on("click", function() {
            wrong();
            $(".question").html("Correct answer is B")
            setTimeout(done, 3000);
        })
        $("#2").text("correct answer").on("click", function() {
            right();
            $(".question").html("Correct answer is B")
            setTimeout(done, 3000);
        })
        $("#3").text("incorrect answer").on("click", function() {
            wrong();
            $(".question").html("Correct answer is B")
            setTimeout(done, 3000);
        })
        $("#4").text("incorrect answer").on("click", function() {
            wrong();
            $(".question").html("Correct answer is B")
            setTimeout(done, 3000);
        })
    }
    if (time === false) {
        wrong();
        $(".question").html("Correct anser is B");
        setTimeout(done, 3000);
    }
}




function right() {
    //alert("correct")
    correct++
    console.log("right: " + correct);
    console.log("wrong: " + incorrect);
    $("#right").html("Number Correct: " + correct);
    $(".answer").off("click");
    clearInterval(intervalID);
}

function wrong() {
    //alert("incorrect")
    incorrect++;
    console.log("right: " + correct);
    console.log("wrong: " + incorrect);
    $("#wrong").html("Number incorrect: " + incorrect);
    $(".answer").off("click");
    clearInterval(intervalID);

}

function done() {
    $(".question").text("Number Correct: " + correct + " Number Incorrect: " + incorrect);
    $(".answer").css("opacity", "0");
    $(".answer").off("click");
    $(".score").css("opacity", "0");
    correct = 0;
    incorrect = 0;
    $(".panel-heading").html("Play Again").on("click", function() {
        start();
    });
}