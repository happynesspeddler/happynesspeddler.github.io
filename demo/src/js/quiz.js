var questions = [
    "I don’t feel particularly pleased with the way I am.",
    "I am intensely interested in other people.",
    // "I feel that life is very rewarding",
    // "I have very warm feelings towards almost everyone.",
    // "I rarely wake up feeling rested",
    // "I am not particularly optimistic about the future.",
    // "I find most things amusing.",
    // "I am always committed and involved",
    // "Life is good",
    // "I do not think that the world is a good place.",
    // "I laugh a lot",
    // "I am well satisfied about everything in my life",
    // "I don’t think I look attractive.",
    // "There is a gap between what I would like to do and what I have done.",
    // "I am very happy.",
    // "I find beauty in some things.",
    // "I always have a cheerful effect on others.",
    // "I can fit in (find time for) everything I want to",
    // "I feel that I am not especially in control of my life.",
    // "I feel able to take anything on.",
    // "I feel fully mentally alert.",
    // "I often experience joy and elation.",
    // "I don’t find it easy to make decisions.",
    // "I don’t have a particular sense of meaning and purpose in my life.",
    // "I feel I have a great deal of energy.",
    // "I usually have a good influence on events.",
    // "I don’t have fun with other people.",
    // "I don’t feel particularly healthy.",
    // "I don’t have particularly happy memories of the past."
]
var answers = []
var holder = 0
var reverse = [0, 4, 5, 9, 12, 15, 18, 22, 23, 26, 27, 28]
function getSum(total, num) {
    return total + num;
}
$(document).ready(function () {
    $('#start').click(function(){
        $('#guidelines').hide();
        $('#credits').hide();
        $('#quiz').show();
        $('#header').hide()
        $('#start').html('Next')
    })
    $('#interpretation').hide();
    $('#quiz').hide();
    $('#myForm input').on('change', function () {
        if (reverse.indexOf(holder) > -1) {
            var temp = +$('input[name=radioName]:checked', '#myForm').val()
            answers.push(6 - temp + 1)
        } else
            answers.push(+$('input[name=radioName]:checked', '#myForm').val());

        if (questions.length === answers.length) {
            $('#question').text("Your Result: "+(answers.reduce(getSum) / 29).toFixed(2))
            $('#question').addClass('complete')
            $('#myForm').hide();
            $('#header').text('Interpreting Results').show();
            $('#interpretation').show();
        } else {
            holder++
            $('#question').text(questions[holder])
            $('input[name="radioName"]').prop('checked', false);
        }
    });
});