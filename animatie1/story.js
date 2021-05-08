var hero = docucument.querySelector("#hero");
var villain = docucument.querySelector("#villain");
var lightning = document.querySelector("#lightning");

var lightningStart = { "left": "290px" };
var lightningEnd = { "left": "900px" };
var options = { "duration": 1000 ms };

lightning.animate([lightningEnd, lightningStart], options);