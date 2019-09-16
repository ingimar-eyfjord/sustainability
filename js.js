// JavaScript Document

function showmore(event){
	var target = event.target;
  	var parent = target.parentElement.classList.add("clientcardShowmore");//parent of "target"
//	document.querySelector.parentElement.className.add(".clientcardShowmore");
}




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
	
//	if (element ==! hasClass.name)
	
	
	
	element.classList.toggle(name);
	
	
	
	
//	console.log(arr2.length)
//	
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
	 //check if 
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