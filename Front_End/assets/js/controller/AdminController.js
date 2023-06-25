$("#btnLogin").click(function (){

    let email =  $("#form3Example6cg").val();
    let password = $("#form3Example5cg").val();

    $.ajax({
        url: baseURL+"admin?email="+email,
        method: "get",
        dataType:"json",
        success: function (res) {

            if (res.data.password==password){
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: "Login Successfully",
                    showConfirmButton: false,
                    timer: 1500
                });
                $("#table").css('display','block');
                $("#hero").css('display','none');
                $("#login").css('display','none');
            }else {
                Swal.fire({
                    position: 'center',
                    icon: 'error',
                    title: "Invalid email or password",
                    showConfirmButton: false,
                    timer: 1500
                });
            }
            clearUserLoginTextFields();
        },
        error:function(error){
            var jsObject=JSON.parse(error.responseText);
            Swal.fire({
                position: 'center',
                icon: 'error',
                title: "Invalid email or password",
                showConfirmButton: false,
                timer: 1500
            });
        }
    });
});

function clearUserLoginTextFields() {
    $('#form3Example6cg').val("");
    $('#form3Example5cg').val("");
}