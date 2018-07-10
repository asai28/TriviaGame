//Styling code
$(document).ready(function () {
    var screenWidth = window.innerWidth;
    var screenHeight = window.innerHeight;
    $("body").css("background-image", "url(\"assets/images/The_Leaving_Feast_-_B4C37M1.png\")")
    $("body").css("width", screenWidth);
    $("body").css("height", screenHeight);
});
//Game code
var time = 30;
var intervalId;
var countdownTimer = {
    timeConverter: function (t) {
        //  Takes the current time in seconds and convert it to minutes and seconds (mm:ss).
        var minutes = Math.floor(t / 60);
        var seconds = t - (minutes * 60);

        if (seconds < 10) {
            seconds = "0" + seconds;
        }

        if (minutes === 0) {
            minutes = "00";
        }

        else if (minutes < 10) {
            minutes = "0" + minutes;
        }

        return minutes + ":" + seconds;
    },
    reset: function () {
        countdownTimer.stop();
        time = 30;
        $("#tick").text(countdownTimer.timeConverter(time));
    },
    stop: function () {
        clearInterval(intervalId);
    },
    start: function () {
        intervalId = setInterval(function () {
            if (time === 0) {
                countdownTimer.reset();
                game.timesUp();
            }
            else {
                time--;
                $("#tick").text(countdownTimer.timeConverter(time));
            }
        }, 1000);

    }
};

var game = {
    QA: [
        {
            question: "What's the name of Bellatrix' husband?",
            answer: "Rodolphus Lestrange",
            options: ["Albert Lestrange", "Rolphius Lestrange", "Adolph Lestrange", "Rodolphus Lestrange"],
            image: "<img src=\"assets/images/q1.PNG\">",
            answerImage: "<img src=" + "\"" + "assets/images/answerImage1.png" + "\"" + ">",
            fact: "Bellatrix was married to Rodolphus Lestrange, but the marriage was loveless on her part. The two met at Hogwarts, and her parents arranged a marriage of convenience. Rodolphus was a pure-blood, like their family, and it was very important to the Blacks to preserve their pure-blood heritage. Rodolphus became a Death Eater like his wife and they at least worked together in service of Lord Voldemort, but she never expresses any affection for him and barely mentions him."
        },
        {
            question: "What's the name of Percy's wife?",
            answer: "Audrey",
            options: ["Audrey", "Lucy", "Rosie", "Marjorie"],
            image: "<img src=\"assets/images/q2.PNG\">",
            answerImage: "<img src=" + "\"" + "assets/images/answerImage2.jpg" + "\"" + ">",
            fact: "It took Percy six months to admit to Audrey that he was a wizard. He would have preferred at least a year, but Mum insisted on meeting the young lady who was taking up so much of his time. Fortunately, Audrey felt this made up for the disappointment that he wasn't part of the Mafia, and charmed Dad just by being herself. Audrey, on the other hand, wouldn't allow Percy to meet her family until he offered to swear an Unbreakable Vow that he wouldn't let her mother run him off like her last three boyfriends."
        },
        {
            question: "Which of these is a type of Love Potion?",
            answer: "Amortentia",
            options: ["Felix Felicis", "Amortentia", "Polyjuice Potion", "Veritaserum"],
            image: "<img src=\"assets/images/q3.PNG\">",
            answerImage: "<img src=" + "\"" + "assets/images/answerImage3.jpg" + "\"" + ">",
            fact: "Amortentia. Amortentia is a love potion that does not create actual love, but gives the drinker a powerful obsession and infatuation with the giver of the potion. It is usually either forced upon someone or covertly given."
        },
        {
            question: "What class did Neville end up teaching at Hogwarts?",
            answer: "Herbology",
            options: ["Astronomy", "Muggle Studies", "Herbology", "Charms"],
            image: "<img src=\"assets/images/q4.PNG\">",
            answerImage: "<img src=" + "\"" + "assets/images/answerImage4.gif" + "\"" + ">",
            fact: "Neville Longbottom, as the herbology professor, kept a potrait of Luna Lovegood in his office to remind him as of the first people who believed that he could be something great."

        },
        {
            question: "Which newspaper does Rita Skeeter work for?",
            answer: "Daily Prophet",
            options: ["The Quibbler", "Daily Prophet"],
            image: "<img src=\"assets/images/q5.PNG\">",
            answerImage: "<img src=" + "\"" + "assets/images/answerImage5.gif" + "\"" + ">",
            fact: "Rita Skeeter is a reporter for the Daily Prophet who is known for her rubbishy exposés of well-known wizards. She uses a Quick-Quotes Quill to write in flowery prose filled with innuendoes and veiled accusations."
        },
        {
            question: "What's the name of Tonks and Lupin's son?",
            answer: "Edward",
            options: ["Theodore", "Lyall", "James", "Edward"],
            image: "<img src=\"assets/images/q6.PNG\">",
            answerImage: "<img src=" + "\"" + "assets/images/answerImage6.jpg" + "\"" + ">",
            fact: "Tonks didn’t care about Lupin’s condition. Inspired by Fleur Delacour’s love for Bill Weasley – who had been bitten by the same werewolf who attacked Remus as a child, Fenrir Greyback. Lupin never felt at ease about his love for Tonks, continuing to think that he was being cruel and selfish. Nonetheless, they married quietly in the north of Scotland, with witnesses taken from the local wizarding tavern."
        },
        {
            question: "Which of these are not one of Hagrid's many pets?",
            answer: "Grawp",
            options: ["Grawp", "Fluffy", "Aragog", "Norberta"],
            image: "<img src=\"assets/images/q7.PNG\">",
            answerImage: "<img src=" + "\"" + "assets/images/answerImage7.gif" + "\"" + ">",
            fact: "Hagrid managed to gain possession of numerous magical creatures, many of them dangerous, including Aragog, Fang, Fluffy, Buckbeak, and Norbert (later Norberta). Hagrid's love for animals and his talent for taming and training them won him the post of Care of Magical Creatures Professor at Hogwarts."
        },
        {
            question: "What is the name of Fleur Delacour's sister?",
            answer: "Gabrielle",
            options: ["Victoire", "Apolline", "Dominique", "Gabrielle"],
            image: "<img src=\"assets/images/q8.PNG\">",
            answerImage: "<img src=" + "\"" + "assets/images/answerImage8.jpg" + "\"" + ">",
            fact: "Fleur was chosen as Beauxbatons Academy of Magic's champion in the Triwizard Tournament. This was considered to be a great honour. Because she treasured her younger eight-year-old sister Gabrielle above all else she was taken into the Black Lake, under the influence of a magical spell during the Second Task."
        },
        {
            question: "Which class did Severus Snape always want to teach?",
            answer: "Defense against the dark arts",
            options: ["Defense against the dark arts", "Potions", "Charms", "Transfiguration"],
            image: "<img src=\"assets/images/q10.PNG\">",
            answerImage: "<img src=" + "\"" + "assets/images/answerImage9.gif" + "\"" + ">",
            fact: "The position of Defence Against the Dark Arts professor here was once rumoured to be jinxed, as no teacher could hold the post for more than a year. Tom Marvolo Riddle jinxed the position because Dumbledore did not give him the job when he applied for it. The fact that no teacher has lasted longer then year meant that the subject has had numerous Professors."
        },
        {
            question: "Which Hogwarts house did Moaning Myrtle belong in?",
            answer: "Ravenclaw",
            options: ["Gryffindor", "Slytherin", "Ravenclaw", "HufflePuff"],
            image: "<img src=\"assets/images/q12.PNG\">",
            answerImage: "<img src=" + "\"" + "assets/images/answerImage10.gif" + "\"" + ">",
            fact: "Myrtle Elizabeth Warren arrived at Hogwarts and was sorted into the house of Ravenclaw. Following her death, Myrtle returned as a ghost so she could haunt student Olive Hornby in revenge for her bullying."
        },
    ],
    currentQuestion: 0,
    correctAnswers: 0,
    wrongAnswers: 0,
    incompleteAnswers: 0,
    refreshGame: function () {
        countdownTimer.reset();
        game.currentQuestion = 0;
        game.correctAnswers = 0;
        game.wrongAnswers = 0;
        game.incompleteAnswers = 0;
        $("#display").empty();
        $("#display").append("<h1>Welcome to Harry Potter Trivia Quiz</h1>");
        $("#display").append("<h3>Want to prove that you are a die hard fan of Harry Potter? Answer these 10 questions, each within 30 seconds. Whatever option you click on will be final. Click on any key to begin the game. Good Luck!</h3>");
        $("#display").append("<img id=\"firstPage\" src=\"assets/images/openingPage.gif\">");
        $(document).on("keyup", function (e) {
            console.log("refresh game key up triggered.");
            game.loadQuestion();
            e.stopPropogation;
        });
    },
    loadQuestion: function () {
        countdownTimer.reset();
        $("#display").empty();
        $("#display").append("<h1>" + game.QA[game.currentQuestion].question + "</h1>");
        $("#display").append(game.QA[game.currentQuestion].image);
        var container = "<div id=\"answerContainer\"></div>";
        $("#display").append(container);
        game.QA[game.currentQuestion].options.forEach(function (value, index) {
            var option = $("<div class=\"row option\" id=\"" + index + "\"><p>" + game.QA[game.currentQuestion].options[index] + "</p></div>");
            $("#answerContainer").append(option);
        });
        countdownTimer.start();
        $(".option").on("click", function () {
            countdownTimer.stop();
            var givenAnswerIndex = $(this).attr("id");
            if (game.QA[game.currentQuestion].options[givenAnswerIndex] === game.QA[game.currentQuestion].answer) {
                game.correctAnswers++;
                $("#display").empty();
                $("#display").append("<h1>That's the right answer!</h1>");
                game.showAnswer();
                if (game.currentQuestion === game.QA.length) {
                    game.gameOver();
                } else {
                    $(document).on("keyup", function (e) {
                        console.log("load question true key up triggered.");
                        clearInterval(intervalId);
                        game.loadQuestion();
                        e.stopPropogation;
                    });
                }
            }
            else {
                game.wrongAnswers++;
                $("#display").empty();
                $("#display").append("<h1>Oops! Wrong answer!</h1>");
                game.showAnswer();
                if (game.currentQuestion === game.QA.length) {
                    game.gameOver();
                } else {
                    $(document).on("keyup", function (e) {
                        console.log("load question false key up triggered.");
                        game.loadQuestion();
                        e.stopPropogation;
                    });
                }
            }
        });
    },
    showAnswer: function () {
        $("#display").append(game.QA[game.currentQuestion].answerImage);
        $("#display").append("<h4>" + game.QA[game.currentQuestion].fact + "</h4>");
        $("#display").append("<h4>Click any key to continue to next question..</h4>");
        game.currentQuestion++;
    },
    gameOver: function () {
        countdownTimer.reset();
        $("#display").empty();
        switch (game.correctAnswers) {
            case 0:
            case 1:
            case 2:
                $("#display").append("<h1>Oh snap! You turned out to be a muggle<h1>");
                $("#display").append("<img src=\"assets/images/veryLowScore.gif\">");
                break;
            case 3:
            case 4:
            case 5:
                $("#display").append("<h1>Okay! You could be a squib<h1>");
                $("#display").append("<img src=\"assets/images/lowScore.gif\">");
                break;
            case 6:
            case 7:
            case 8:
                $("#display").append("<h1>Nice Try!<h1>");
                $("#display").append("<img src=\"assets/images/averageScore.gif\">");
                break;
            case 9:
            case 10: $("#display").append("<h1>Wow! You're a wizard<h1>");
                $("#display").append("<img src=\"assets/images/excellent.gif\">");
        }
        $("#display").append("<h3>Correct Answers: " + game.correctAnswers + "</h3>");
        $("#display").append("<h3>Wrong Answers: " + game.wrongAnswers + "</h3>");
        $("#display").append("<h3>Incomplete Answers: " + game.incompleteAnswers + "</h3>");
        $("#display").append("<button class=\"btn replay\">Replay</button>");
        $(".replay").on("click", function () {
            game.refreshGame();
        });
        $(document).on("keyup", function (e) {
            e.stopPropogation;
        });
    },
    timesUp: function () {
        countdownTimer.stop();
        $("#display").empty();
        $("#display").append("<h1>Time's Up</h1>");
        $("#display").append(game.QA[game.currentQuestion].answerImage);
        $("#display").append("<h4>" + game.QA[game.currentQuestion].fact + "</h4>");
        $("#display").append("<h4>Click any key to continue to next question..</h4>");
        game.currentQuestion++;
        game.incompleteAnswers++;
        if (game.currentQuestion === game.QA.length) {
            game.gameOver();
        } else {
            $(document).on("keyup", function (e) {
                console.log("time's up key up triggered.");
                clearInterval(intervalId);
                countdownTimer.reset();
                game.loadQuestion();
                e.stopPropogation;
            });
        }

    }
};

game.refreshGame();

