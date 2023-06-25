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

const bookIDRegEx = /^(B00-)[0-9]{1,3}$/;
const categoryRegEx = /^[A-z ]{3,20}$/;
const titleRegEx =/^[A-z ]{3,30}$/;
const authorRegEx = /^[A-z ]{3,30}$/;
const priceRegEx = /^[0-9]{1,}$/;

let bookValidations = [];
bookValidations.push({reg: bookIDRegEx, field: $('#txtBookID'),error:'Book ID Pattern is Wrong : B00-001'});
bookValidations.push({reg: categoryRegEx, field: $('#txtCategory'),error:'Book Category Pattern is Wrong : A-z 3-20'});
bookValidations.push({reg: titleRegEx, field: $('#txtTitle'),error:'Book Title Pattern is Wrong : A-z 3-20'});
bookValidations.push({reg: authorRegEx, field: $('#txtAuthor'),error:'Book Author Pattern is Wrong : A-z 3-30'});
bookValidations.push({reg: priceRegEx, field: $('#txtBookPrice'),error:'Book Price Pattern is Wrong : 0-9 1'});

//disable tab key of all four text fields using grouping selector in CSS
$("#txtBookID,#txtCategory,#txtTitle,#txtAuthor,#txtBookPrice").on('keydown', function (event) {
    if (event.key == "Tab") {
        event.preventDefault();
    }
});


$("#txtBookID,#txtCategory,#txtTitle,#txtAuthor,#txtBookPrice").on('keyup', function (event) {
    checkValidity();
});

$("#txtBookID,#txtCategory,#txtTitle,#txtAuthor,#txtBookPrice").on('blur', function (event) {
    checkValidity();
});


$("#txtBookID").on('keydown', function (event) {
    if (event.key == "Enter" && check(bookIDRegEx, $("#txtBookID"))) {
        $("#txtCategory").focus();
    } else {
        focusText($("#txtBookID"));
    }
});


$("#txtCategory").on('keydown', function (event) {
    if (event.key == "Enter" && check(categoryRegEx, $("#txtCategory"))) {
        focusText($("#txtTitle"));
    }
});


$("#txtTitle").on('keydown', function (event) {
    if (event.key == "Enter" && check(titleRegEx, $("#txtTitle"))) {
        focusText($("#txtAuthor"));
    }
});

$("#txtAuthor").on('keydown', function (event) {
    if (event.key == "Enter" && check(authorRegEx, $("#txtAuthor"))) {
        focusText($("#txtBookPrice"));
    }
});


$("#txtBookPrice").on('keydown', function (event) {
    if (event.key == "Enter" && check(priceRegEx, $("#txtBookPrice"))) {
        let res = confirm("Do you want to create.?");
        if (res) {
            clearAllTexts();
        }
    }


});


function checkValidity() {
    let errorCount=0;
    for (let validation of bookValidations) {
        if (check(validation.reg,validation.field)) {
            textSuccess(validation.field,"");
        } else {
            errorCount=errorCount+1;
            setTextError(validation.field,validation.error);
        }
    }
    setButtonState(errorCount);
}

function check(regex, txtField) {
    let inputValue = txtField.val();
    return regex.test(inputValue) ? true : false;
}

function setTextError(txtField,error) {
    if (txtField.val().length <= 0) {
        defaultText(txtField,"");
    } else {
        txtField.css('border', '2px solid red');
        txtField.parent().children('span').text(error);
    }
}

function textSuccess(txtField,error) {
    if (txtField.val().length <= 0) {
        defaultText(txtField,"");
    } else {
        txtField.css('border', '2px solid green');
        txtField.parent().children('span').text(error);
    }
}

function defaultText(txtField,error) {
    txtField.css("border", "1px solid #ced4da");
    txtField.parent().children('span').text(error);
}

function focusText(txtField) {
    txtField.focus();
}

function setButtonState(value){
    if (value>0){
        $("#btnBook").attr('disabled',true);
    }else{
        $("#btnBook").attr('disabled',false);
    }
}

function clearAllTexts() {
    $("#txtBookID").focus();
    $("#txtBookID,#txtCategory,#txtTitle,#txtAuthor,#txtBookPrice").val("");
    checkValidity();
}

$("#btn-clear1").click(function (){
    $("#txtBookID").focus();
    $("#txtBookID,#txtCategory,#txtTitle,#txtAuthor,#txtBookPrice").val("");
    checkValidity();
});