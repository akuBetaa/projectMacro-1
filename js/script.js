//Side Bar
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

// Menggunakan JavaScript untuk memuat dan menampilkan sidebar user
document.addEventListener("DOMContentLoaded", function () {
    fetch("/dashboard-user/sidebar.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("sidebar-user").innerHTML = data;
        });
});


// Menggunakan JavaScript untuk memuat dan menampilkan sidebar admin
document.addEventListener("DOMContentLoaded", function () {
    fetch("/admin/sidebar-admin.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("sidebar-admin").innerHTML = data;
        });
});


//LOgin


