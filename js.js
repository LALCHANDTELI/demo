//global variables for check results and counting user's trying
var chance = 0;
var wonCount = 0;


//spinner onclick function
function checkNum() {
    //generating random number and get user's pick number
    var randomNum = Math.round(Math.random() * 19) + 1;
    var num = document.getElementById("myNum");
    var myNum = num.options[num.selectedIndex].value;

    //checking user pick number or not
    if (myNum != "") {
        spinWithSound();
        //displaying result box after .5 seconds
        setTimeout(() => {
            document.getElementById("luckConter").style.display = "block";
            //if random number is less then 10 then add 0 ,for good looking on result box
            if (randomNum < 10) {
                randomNum = "0" + randomNum;
            }
            //displaying random number on span 1
            document.getElementById("1").innerHTML = randomNum;
            //comparing user's pick number and random number
            if (myNum == randomNum) {
                //increase global variable won by 1 on random number and user's pick number both are same
                wonCount++;
                //change background color of span 1 on won
                document.getElementById("1").style.backgroundColor = "green";
                reSet();
            } else {
                //change background color of span 1 on lose
                document.getElementById("1").style.backgroundColor = "red";
                reSet();
            }
        }, 500);

    } else {
        //displaying alert box if user click on spinner without pick number
        alert("Please Pick Your Lucky Number")
    }

}
//spin spinner with sound for 0.5 seconds
function spinWithSound() {
    document.getElementById("spinerImg").style.animation = "spin 0.4s linear infinite";
    setTimeout(() => { document.getElementById("spinerImg").style.animation = ""; }, 500);
    var myAudio = document.getElementById("myAudio5");
    myAudio.play();
}

//reset dropdown numbers and span id
function reSet() {
    //count user's trying by increasing global variable chance
    chance++;
    //change result box's span 1 and span 2 id on after user's first try
    if (chance == 1) {
        document.getElementById("1").removeAttribute("id");
        document.getElementById("2").setAttribute("id", "1");
        document.getElementById("myNum").selectedIndex = 1;
        document.getElementById("resultBord").innerHTML = "2";
    }
    //change result box's span 2 and span 3 id on after user's second try
    if (chance == 2) {
        document.getElementById("1").removeAttribute("id");
        document.getElementById("3").setAttribute("id", "1");
        document.getElementById("myNum").selectedIndex = 1;
        document.getElementById("resultBord").innerHTML = "1";
    }

    //calling result function after user's third try
    if (chance == 3) {
        result();
    }
}


//checking user's results that won or not by checking global variable's value and calling won and lose functions on conditions if global variable won>=2 then call won function else call lose function
function result() {
    if (wonCount >= 2) {
        won();
    } else {
        lose();
    }

    //calling changeOnResultPage and countdown functions after user's 3 trying
    changeOnResultPage();
    countdown();
}

//for block unwanted contains like spinner dropdown luck_title etc and displaying wanted contains like luck_result_box
function changeOnResultPage() {
    document.getElementById("luck_result").style.display = "block";
    document.getElementById("luck_title").style.display = "none";
    document.getElementById("luck-num").style.display = "none";
    document.getElementById("spiner2").style.display = "none";
    document.getElementById("luck-footer").style.display = "none";
    document.getElementById("luck-heading").style.backgroundColor = "black";
    document.getElementById("luck-heading").style.color = "white";
    document.getElementById("seconds").innerHTML = " Seconds";
    document.getElementById("refreshPage").style.marginTop = "90px";
}

//lose function
function lose() {
    loseSound();
    loseChange();
}


//changing on lose like image border result_board
function loseChange() {
    document.getElementById("changeImg").setAttribute("src", "sad.png");
    document.getElementById("changeImg").style.border = "9px solid red";
    document.getElementById("ResultBord").innerHTML = "Better Luck for Next Time!!!";
}

//lose sound function
function loseSound() {
    var myAudio = document.getElementById("myAudio4");
    myAudio.play();
}

//won function
function won() {
    wonSound();
    wonChange();
}

//won sound function
function wonSound() {
    var myAudio = document.getElementById("myAudio");
    myAudio.play();
    var myAudio2 = document.getElementById("myAudio2");
    myAudio2.play();
    var myAudio3 = document.getElementById("myAudio3");
    myAudio3.play();
}

//changing on won like image result_board
function wonChange() {
    document.getElementById("changeImg").setAttribute("src", "happy.jpg");
    document.getElementById("changeImg").style.border = "9px solid green";
    document.getElementById("ResultBord").innerHTML = "Wow Your Luck is With You!!!";
}

//countdown function for 20 seconds and refresh page after 20 seconds
function countdown() {
    document.getElementById("refresh").innerHTML = "Page Will be Automatically Refresh in";
    setTimeout(() => { document.getElementById("timer").innerHTML = "20"; }, 1000);
    setTimeout(() => { document.getElementById("timer").innerHTML = "19"; }, 2000);
    setTimeout(() => { document.getElementById("timer").innerHTML = "18"; }, 3000);
    setTimeout(() => { document.getElementById("timer").innerHTML = "17"; }, 4000);
    setTimeout(() => { document.getElementById("timer").innerHTML = "16"; }, 5000);
    setTimeout(() => { document.getElementById("timer").innerHTML = "15"; }, 6000);
    setTimeout(() => { document.getElementById("timer").innerHTML = "14"; }, 7000);
    setTimeout(() => { document.getElementById("timer").innerHTML = "13"; }, 8000);
    setTimeout(() => { document.getElementById("timer").innerHTML = "12"; }, 9000);
    setTimeout(() => { document.getElementById("timer").innerHTML = "11"; }, 10000);
    setTimeout(() => { document.getElementById("timer").innerHTML = "10"; }, 11000);
    setTimeout(() => { document.getElementById("timer").innerHTML = "9"; }, 12000);
    setTimeout(() => { document.getElementById("timer").innerHTML = "8"; }, 13000);
    setTimeout(() => { document.getElementById("timer").innerHTML = "7"; }, 14000);
    setTimeout(() => { document.getElementById("timer").innerHTML = "6"; }, 15000);
    setTimeout(() => { document.getElementById("timer").innerHTML = "5"; }, 16000);
    setTimeout(() => { document.getElementById("timer").innerHTML = "4"; }, 17000);
    setTimeout(() => { document.getElementById("timer").innerHTML = "3"; }, 18000);
    setTimeout(() => { document.getElementById("timer").innerHTML = "2"; }, 19000);
    setTimeout(() => { document.getElementById("timer").innerHTML = "1"; }, 20000);
    setTimeout(() => { document.getElementById("timer").innerHTML = "0"; }, 21000);
    setTimeout(() => { location.reload(); }, 21000);
}