$(".panel-heading").on("click", function () {
	start();
});

var correct, incorrect, count;




function start () {
	correct = 0;
	incorrect = 0; 
	console.log("right: " + correct);
	console.log("wrong: " + incorrect);
	$(".answer").css("opacity", "1");
	$(".score").css("opacity", "1");
	$("#right").html("Number Correct: " + correct);
	$("#wrong").html("Number incorrect: " + incorrect);
	$(".question").empty();
	question1();


};

function question1() {
	$(".question").html("This is the first question");
	$("#1").text("correct answer").on("click", function () {
		right();
		question2();
	})
	$("#2").text("incorrect answer").on("click", function () {
		wrong();
		question2();
	})
	$("#3").text("incorrect answer").on("click", function () {
		wrong();
		question2();
	})
	$("#4").text("incorrect answer").on("click", function () {
		wrong();
		question2();
	})

}

function question2() {
	$(".question").text("This is the second question");
	$("#1").text("incorrect answer").on("click", function () {
		wrong();
		question3();
	})
	$("#2").text("incorrect answer").on("click", function () {
		wrong();
		question3();
	})
	$("#3").text("correct answer").on("click", function () {
		right();
		question3();
	})
	$("#4").text("incorrect answer").on("click", function () {
		wrong();
		question3();
	})

}

function question3() {
	$(".question").text("This is the third question");
	$("#1").text("incorrect answer").on("click", function () {
		wrong();
		question4();
	})
	$("#2").text("incorrect answer").on("click", function () {
		wrong();
		question4();
	})
	$("#3").text("incorrect answer").on("click", function () {
		wrong();
		question4();
	})
	$("#4").text("correct answer").on("click", function () {
		right();
		question4();
	})
}

function question4() {
	$(".question").text("This is the final question");
	$("#1").text("incorrect answer").on("click", function () {
		wrong();
		done();
	})
	$("#2").text("correct answer").on("click", function () {
		right();
		done();
	})
	$("#3").text("incorrect answer").on("click", function () {
		wrong();
		done();
	})
	$("#4").text("incorrect answer").on("click", function () {
		wrong();
		done();
	})
}


function right () {
	//alert("correct")
	correct++
	console.log("right: " + correct);
	console.log("wrong: " + incorrect);
	$("#right").html("Number Correct: " + correct);
	$(".answer").off("click");
}

function wrong () {
	//alert("incorrect")
	incorrect++;
	console.log("right: " + correct);
	console.log("wrong: " + incorrect);
	$("#wrong").html("Number incorrect: " + incorrect);
	$(".answer").off("click");


}

function done () {
	$(".question").text("Number Correct: " + correct + " Number Incorrect: " + incorrect);
	$(".answer").css("opacity", "0");
	$(".answer").off("click");
	$(".score").css("opacity", "0");
	correct = 0;
	incorrect = 0; 
	$(".panel-heading").on("click", function () {
	start();
	});
}
