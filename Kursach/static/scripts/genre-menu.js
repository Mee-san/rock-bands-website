function toggleGenreMenu(event) {
    event.preventDefault();
    var genreMenu = document.getElementById("genreMenu");
    if (genreMenu.style.display === "block") {
        genreMenu.style.display = "none";
    } else {
        genreMenu.style.display = "block";
    }
  }
  
  var button = document.getElementById("yourButtonId");
    button.addEventListener("click", function(event) {
    var genreMenu = document.getElementById("genreMenu");
    if (!genreMenu.contains(event.target)) {
      genreMenu.style.display = "block";
    }
  }); 