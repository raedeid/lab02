'use strict'
var score = 0 ;
var user_name = prompt('whats your name ?');
alert(' welcome to my website ' + '' + user_name);
var question = ["Do you think i love sport ?", 'Do you think i am work hard ?', 'Do you think i hate summer ?', 'do you think i like music ?', 'do you think i love movies'];
var answer_yes = ['right,specialy basketball', 'work make me better', 'i love winter', 'all time listen to music', 'specially crime type' + user_name];
var answer_no = ['wrong answer', 'life needed it wrong answer', 'i hate summer', 'i like music with all type', 'who dont like movies' + user_name];
for (var i = 0; i < question.length; i++) {
    var response = prompt(question[i]).toLowerCase();
    while (response != 'yes' && response != 'no' && response != 'y' && response != 'n') {
        console.log(prompt(question[i]));
        response = prompt(question[i]).toLowerCase();
    }
    if (response == 'yes' || response == 'y') {
        // console.log(answer_yes[i]);
        score ++
        alert('correct answer ' + answer_yes[i] + ' '+' your score is' + score.toString() );
    } else if (response == 'no' || response == 'n') {
        // console.log(answer_no[i]);
        alert('wrong answer ' + answer_no[i] +' '+ ' your score is ' + score.toString());
    }
}
var guess = prompt('guess my lucky number')
var r = 0
while (guess != '9' && r < 3) {
    if (parseInt(guess)> 9){
        alert('your answer is higher , try again');
        guess = prompt('guess my lucky number');
    }else if (parseInt(guess)< 9){
        alert('your answer is lower , try again');
        guess = prompt('guess my lucky number');
    }
    r++ ;
}
if (r == 3) {
    alert('the right answer is 9');
} else if (guess == '9') {
    score++ ;
    alert('congratulation you guess my lucky number is 9 the number your score is ' + ' ' +score.toString() );
}
var w = 0
var wrong_answer = true ;
var prime = [11, 13, 17, 19, 23, 29];
var answer_prime = prompt('give me prime number upper 10 and under 30');
while (w < 6 && wrong_answer) {
    for (var G = 0; G < 6; G++) {
        if (prime[G] == answer_prime) {
            score++ ;
            alert('right answer your score is ' + ' ' + score.toString() + ' the full answer is ' + prime.join(',') );
            wrong_answer = false ;
        }
    }    
    if (wrong_answer && w < 5) {
        alert('wrong answer , try again');
        answer_prime = prompt('give me prime number upper 10');
    }else if (w > 5 && wrong_answer) {
        alert('you loose all apportunity , sorry the right answer is ' + prime.join(','));
    }
    w++;
}
alert('your score is ' + score.toString() + ' from 7');