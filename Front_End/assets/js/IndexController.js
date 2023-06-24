$("#get").click(function () {
    $("#login").css('display','block');
    $("#hero").css('display','none');
    $("#table").css('display','none');
    $("#signUp").css('display','none');
});

$("#home").click(function () {
    $("#login").css('display','none');
    $("#hero").css('display','block');
    $("#table").css('display','none');
    $("#signUp").css('display','none');
});

$("#btnLogin").click(function () {
    $("#login").css('display','none');
    $("#hero").css('display','none');
    $("#table").css('display','block');
    $("#signUp").css('display','none');
});
$("#btnSignUp").click(function () {
    $("#login").css('display','block');
    $("#hero").css('display','none');
    $("#table").css('display','none');
    $("#signUp").css('display','none');
});