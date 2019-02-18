var timeRemaining='';
var outoftime='';
var answer='';
var image='';


var options = [ // set the questions into an array
    {
        question: "What city did the Lakers first start in?",
        multipleChoice: ["Minneapolis","Sacramento","Los Angeles", "Manila"],
        answer: 0,
        image: "assets/images/lakers.jpg"
    },
    {
        question:"Who is the tallest player in Lakers history?",
        multipleChoice:["Shaquille O'Neal", "Chuck Nevitt", "Kareem Abdul-Jabbar", "Wilt Chamerlain"],
        answer: 1,
        image:"assets/images/kareem.jpg"
    },
    {
        question:"How many Championships titles do the Lakers have?",
        multipleChoice: [6, 12, 16, 18],
        answer: 2,
        image:"assets/images/championships.jpg"
    },
    {
        question:"Who is the most hated Laker?",
        multipleChoice: ["Vlade Divac","LeBron James", "A.C. Green", "Dwight Howard"],
        answer: 1,
        image:"assets/images/funnyface.jpg"
    },
    {
        question:"How many awesome NBA rings does Kobe Bryant have?",
        multipleChoice: ["4","6", "5", "11"],
        answer: 2,
        image:"assets/images/kobe.jpg"
    },
    {
        question:"What Lakers player is on the NBA logo?",
        multipleChoice: ["Magic Johnson","Kobe Bryant", "Elgin Baylor", "Jerry West"],
        answer: 3,
        image:"assets/images/nbalogo.jpg"
    },
    {
        question:"How many NBA Championships does Earvin “Magic” Johnson have?",
        multipleChoice: ["6","5","4","8"],
        answer: 2,
        image:"assets/images/magic.jpg"
    }];
$(document).ready(function () {
    console.log("ready");


function pushDisplay(){
    //generate random array base on the length of "options"
    var randomNumber= Math.floor(Math.random()*options.length);
    //generate random question
    var randomQuestion= options[randomNumber];
    console.log(randomQuestion);
    $("#questionField").html("<p>" + randomQuestion + "</p>");
    
    for(var i = 0; i < randomQuestion.multipleChoice.length; i++) {
        var userChoice = $("<div>");
        console.log(userChoice);
        userChoice.addClass("answerchoice");
        userChoice.html(randomQuestion.multipleChoice[i]);
        //assign array position to it so can check answer
        userChoice.attr("data-guessvalue", i);

        $("#multipleAnswer").append(userChoice);
    };


 $("#start").on("click", function () {
		$("#start").hide();
		displayQuestion();
		runTimer();
		for(var i = 0; i < randomQuestion.length; i++) {
	holder.push(options[i]);
}
})
}; pushDisplay();
}); 
// };
// function answerTimer(){

// };
// function checkAnswer(){

// };
// function nextquestionTimer(){

// };


