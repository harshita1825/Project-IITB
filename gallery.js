let subMenu = document.getElementById("subMenu");
function dropdown(){
    subMenu.classList.toggle("open-menu");
}

function rotate90(){
  document.getElementById("greater-than").classList.toggle("rotate");
}

function experiments(){
  document.getElementById('experiments').classList.remove('hidden');
  document.getElementById('recents').classList.add('hidden');
}

function recents(){
  document.getElementById('experiments').classList.add('hidden');
  document.getElementById('recents').classList.remove('hidden');
}

function slide(){
  document.querySelector(".experiments-demo").classList.add("highlight");
}

experiments.addEventListener("click", slide);
const experiments = document.getElementsByClassName("experiments-demo");

// Get references to the elements and the button
const element1 = document.getElementsByClassName("experiments-demo");
const element2 = document.getElementsByClassName("recents-demo");

// Add click event listeners to both buttons
element1.addEventListener("click", function() {
  button1.classList.add("highlight");
  button2.classList.remove("highlight");
});

element2.addEventListener("click", function() {
  button2.classList.add("highlight");
  button1.classList.remove("highlight");
});

