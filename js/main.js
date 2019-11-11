'use strict'
var user_name = prompt('whats your name ?');
alert(' welcome to my website ' +''+ user_name)
var question = ["Do you think i love sport ?", 'Do you think i am work hard ?', 'Do you think i hate summer ?', 'do you think i like music ?', 'do you think i love movies'];
var answer_yes = ['right,specialy basketball', 'work make me better', 'i love winter', 'all time listen to music', 'specially crime type'+user_name];
var answer_no = ['wrong answer', 'life needed it wrong answer', 'i hate summer', 'i like music with all type', 'who dont like movies'+user_name];
for (var i = 0; i < question.length; i++) {
    var response = prompt(question[i]).toLowerCase();
    while (response != 'yes' && response != 'no' && response !='y'&& response != 'n') {
        // console.log(prompt(question[i]));
        response = prompt(question[i]).toLowerCase();
    }
    if (response == 'yes' || response == 'y') {
        // console.log(answer_yes[i]);
        alert(answer_yes[i]);
    } else if (response == 'no' || response == 'n') {
        // console.log(answer_no[i]);
        alert(answer_no[i]);
    }
}
