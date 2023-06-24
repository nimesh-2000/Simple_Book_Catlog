$("#get").click(function () {
    $("#login").css('display','block');
    $("#hero").css('display','none');
    $("#table").css('display','none');
    $("#signUp").css('display','none');
});

$("#h").click(function () {
    $("#userLogin").css('display','none');
    $("#home").css('display','block');
    $("#bookContent").css('display','none');
});

$("#btnLogin").click(function () {
    $("#bookContent").css('display','block');
    $("#home").css('display','none');
    $("#userLogin").css('display','none');
});