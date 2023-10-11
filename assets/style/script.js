// Menggunakan JavaScript untuk memuat dan menampilkan sidebar
document.addEventListener("DOMContentLoaded", function () {
    fetch("sidebar.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("side_nav-placeholder").innerHTML = data;
        });
});



$(".sidebar ul li").on("click", function () {
    $(".sidebar ul li.active").removeClass("active");
    $(this).addClass("active");
});

$(".open-btn").on("click", function () {
    $(".sidebar").addClass("active");
});

$(".close-btn").on("click", function () {
    $(".sidebar").removeClass("active");
});