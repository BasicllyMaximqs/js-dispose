document.addEventListener('contextmenu', function(e) {
  e.preventDefault();
});

while(document.getElementById("hide-obj")){
        var elem = document.getElementById("hide-obj");
        elem.parentNode.removeChild(elem);
    }
