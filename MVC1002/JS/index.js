$(document).ready(function() {
    $("#Member").click(function() {
        $("#myModal").modal();
    });

    $("#SignUpBtn").click(function() {
        window.location.replace("/Web/sginUp.html");
    });
});