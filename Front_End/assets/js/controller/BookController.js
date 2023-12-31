
let baseURL="http://localhost:8080/app/";

loadAllBooks();

//Add customer to the database
$("#btnBook").click(function () {

    var formData = $("#booksForm").serialize();
    // will generate a query String including form data

    //send ajax request to the customer servlet
    $.ajax({
        url: baseURL+"book",
        method: "post",
        data: formData,
        dataType:"json",
        success: function (res) {
            alert(res.message);
            loadAllBooks();
        },
        error:function(error){
            var jsObject=JSON.parse(error.responseText);
            alert(jsObject.message);
        }
    });
});

//Get all customers from the database
$("#btnGetAll").click(function () {
    //send ajax request to the customer servlet
    loadAllBooks();
});

//Delete customer by id
$("#btnDelete").click(function () {
    let id = $("#txtBookID").val();
    $.ajax({
        url: baseURL+"book?id=" + id + "",
        method: "delete",
        dataType:"json",
        success: function (resp) {
            alert(resp.message);
            loadAllBooks();
        },
        error:function (error){
            alert(JSON.parse(error.responseText).message);
        }
    });
});

//Update customer details
$("#btnUpdate").click(function () {

    let bookID = $("#txtBookID").val();
    let bookCategory = $("#txtCategory").val();
    let bookTitle = $("#txtTitle").val();
    let bookAuthor = $("#txtAuthor").val();
    let bookPrice = $("#txtBookPrice").val();
    // let date = $("#txtDate").val();

    var book = {
        bookId: bookID,
        category: bookCategory,
        title: bookTitle,
        author: bookAuthor,
        price:bookPrice,
        // date:date
    }

    $.ajax({
        url: baseURL+'book',
        method: 'put',
        contentType:"application/json",
        data:JSON.stringify(book),
        dataType:"json",
        success: function (res) {
            alert(res.message);
            loadAllBooks();
        },
        error:function (error){
            let cause= JSON.parse(error.responseText).message;
            alert(cause);
        }

    });
});

//Load all books
function loadAllBooks() {
    $("#tblBook").empty();
    $.ajax({
        url: baseURL+"book",
        dataType: "json",
        success: function (resp) {
            console.log(resp);
            for (let book of resp.data) {
                var row = '<tr><td>' + book.bookId + '</td><td>' + book.category + '</td><td>' + book.title + '</td><td>' + book.author + '</td><td>' + book.price + '</td></tr>';
                $("#tblBook").append(row);
            }
            bindRowClickEvents();
            setTextFieldValues("","","","","");
            $("#txtBookID").focus();
        }
    });

}

//Event binding for table rows
function bindRowClickEvents() {
    $("#tblBook>tr").click(function () {
        let id = $(this).children(":eq(0)").text();
        let category = $(this).children(":eq(1)").text();
        let title = $(this).children(":eq(2)").text();
        let author = $(this).children(":eq(3)").text();
        let price = $(this).children(":eq(4)").text();

        //setting table details values to text fields
        $('#txtBookID').val(id);
        $('#txtCategory').val(category);
        $('#txtTitle').val(title);
        $('#txtAuthor').val(author);
        $('#txtBookPrice').val(price);
        // $('#txtDate').val(date);

    });
}

//set values for text fields
function setTextFieldValues(id, category, title, author, price) {
    $('#txtBookID').val(id);
    $('#txtCategory').val(category);
    $('#txtTitle').val(title);
    $('#txtAuthor').val(author);
    $('#txtBookPrice').val(price);
    // $('#txtDate').val(date);
}
//
// $("#btnSearch").click(function () {
//     let titleS = $("#txtSearch").val();
//     $("#tblBook").empty();
//     $.ajax({
//         url: baseURL+"book?title" + titleS,
//         dataType:"json",
//         async:false,
//         success: function (resp) {
//             alert(resp.message);
//             // resp.data.image_1;
//             let book=resp.data;
//                 var row = '<tr><td>' + book.bookId + '</td><td>' + book.category + '</td><td>' + book.title + '</td><td>' + book.author + '</td><td>' + book.price + '</td></tr>';
//                 $("#tblBook").append(row);
//             }
//             // loadAllCars();
//
//     });
// });
$("#btnSearch").click(function () {
    let titleOrAuthor = $("#txtSearch").val();
    $("#tblBook").empty();
    console.log(titleOrAuthor);
    $.ajax({
        url: baseURL + "book?title="+titleOrAuthor,
        dataType: "json",
        async: false,
        success: function (resp) {
            let book=resp.data;
            console.log(resp.data);
            var row = '<tr><td>' + book.bookId + '</td><td>' + book.category + '</td><td>' + book.title + '</td><td>' + book.author + '</td><td>' + book.price + '</td></tr>';
            $("#tblBook").append(row);
            // console.log(book);
        }
    });
});

