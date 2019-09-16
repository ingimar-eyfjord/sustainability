// JavaScript Document
const link =
  "https://spreadsheets.google.com/feeds/list/1kbHDE_BG8qb5t72fitcdg4PbMjENz7fVTgHCjb12ScI/od6/public/values?alt=json";
window.addEventListener("load", getData);

function getData() {
  fetch(link)
    .then(res => res.json())
    .then(showData);}

function showData(data){
	const myArray = data.feed.entry;
	myArray.forEach(showName)}
//I think I need to put the filter function here after the showName.
function showName(nameData){
	const template = document.querySelector("template").content;
	const copy = template.cloneNode(true);
	copy.querySelector(".clientname").textContent=nameData.gsx$name.$t;
	copy.querySelector(".clientlocation").textContent=nameData.gsx$adress.$t;
	copy.querySelector(".clientlogo img").src = `media/clientslogos/${nameData.gsx$imgname.$t}.jpg`;
	
	function vegan() {
    if (nameData.gsx$vegan.$t === "1") {
		copy.querySelector(".vegan").style.display = "block";
		copy.querySelector(".clientcardfilter").classList.add("filtervegan");
		copy.querySelector(".clientcardfilter").classList.add("vegan");

    }
  }
  vegan()
	
	function zeroWaste() {
    if (nameData.gsx$zerowaste.$t === "1") {
		copy.querySelector(".zeroWaste").style.display = "block";
		copy.querySelector(".clientcardfilter").classList.add("filterzeroWaste");
		copy.querySelector(".clientcardfilter").classList.add("zerowaste");

    }
  }
  zeroWaste()
		function organic() {
    if (nameData.gsx$organic.$t === "1") {
		copy.querySelector(".organic").style.display = "block";
		copy.querySelector(".clientcardfilter").classList.add("filterorganic");
		copy.querySelector(".clientcardfilter").classList.add("organic");

    }
  }
  organic()
		function raw() {
    if (nameData.gsx$raw.$t === "1") {
		copy.querySelector(".raw").style.display = "block";
		copy.querySelector(".clientcardfilter").classList.add("filterraw");
		copy.querySelector(".clientcardfilter").classList.add("raw");
    }
  }
  raw()
		function NonPolluting() {
    if (nameData.gsx$nonpolluting.$t === "1") {
		copy.querySelector(".NonPolluting").style.display = "block";
		copy.querySelector(".clientcardfilter").classList.add("filterNonPolluting");
		copy.querySelector(".clientcardfilter").classList.add("NonPolluting");
    }
  }
  NonPolluting()
	
		function appendInrestaurants(){
		if(nameData.gsx$category.$t === "restaurant")
		document.querySelector("article.restaurants").appendChild(copy);
	}
	appendInrestaurants()// JavaScript Document


}
//Todo I need a toggle fucntion on the buttons. and do a sort field.

filterselection("all")

function filterselection(c){

	var x, i;
	x = document.getElementsByClassName("clientcardfilter");
	if(c == "all") c = " ";
	// Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
	for (i = 0; i < x.length; i++){
		w3Removeclass(x[i], "show");
		if (x[i].className.indexOf(c) > -1) w3Addclass(x[i], "show");
	}
}
function w3Addclass(element, name){
	console.log(element)
	var i, arr1, arr2;
	arr1 = element.className.split(", ");
	console.log(arr1)
	arr2 = name.split(" ");
	// Lasse added this I think, makes it work.
	
	element.classList.toggle(name);
	
	
	
	
	
	//console.log(arr2.length)
	
//	for (i = 0; i < arr2.lenght; i++){
//		console.log('hello' + arr1.indexOf(arr2[i]));
//		if (arr1.indexOf(arr2[i]) == -1){
//		element.className += " " + arr2[i];
//			
//		}
//	}
}

// Hide elements that are not selected
function w3Removeclass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(", ");
  arr2 = name.split(" ");
	//
	element.classList.remove(name);
	//
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current control button (highlight it)
var btnContainer = document.getElementById("categorycheckbox");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", ", ");
    this.className += "active";
  });
}

function myFunction() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    ul = document.getElementsByClassName("clientcardfilter");
console.log(ul);
    li = document.getElementsByClassName("clientcard");
		console.log(li);
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByClassName("clientname")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}