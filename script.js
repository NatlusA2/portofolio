// Ambil elemen tombol dan overlay
var button = document.getElementById("myButton");
var overlay = document.getElementById("overlay");

// Saat tombol dihover, atur event listener untuk menampilkan overlay saat di klik
button.addEventListener("click", function() {
  overlay.style.display = "block";
});

// Saat close button pada overlay diklik, sembunyikan overlay
document.getElementById("close").addEventListener("click", function() {
  overlay.style.display = "none";
});
