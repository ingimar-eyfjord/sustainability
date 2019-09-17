// JavaScript Document

function showmore(event){
	var target = event.target;
  	var parent = target.parentElement.classList.add("clientcardShowmore");//parent of "target"
//	document.querySelector.parentElement.className.add(".clientcardShowmore");
}


function  initMap(){
	var location = {lat: -25.363, lng: 131.044};
	var map = new google.maps.Map(document.getElementById("map"),{
		zoom: 4,
		center: location
	});
	var marker = new google.maps.Marker({
		position: location, 
		map: map
	});
}

var allCheckboxes = document.querySelectorAll('input[type=checkbox]');
var allPlayers = Array.from(document.querySelectorAll('.clientcardfilter'));
var checked = {};

getChecked('vegan');
getChecked('Raw');
getChecked('Organic');
getChecked('NonPolluting');

Array.prototype.forEach.call(allCheckboxes, function (el) {
  el.addEventListener('change', toggleCheckbox);
});

function toggleCheckbox(e) {
  getChecked(e.target.name);
  setVisibility();
}

function getChecked(name) {
  checked[name] = Array.from(document.querySelectorAll('input[name=' + name + ']:checked')).map(function (el) {
    return el.value;
  });
}

function setVisibility() {
  allPlayers.map(function (el) {
    var vegan = checked.vegan.length ? _.intersection(Array.from(el.classList), checked.vegan).length : true;
    var organic = checked.organic.length ? _.intersection(Array.from(el.classList), checked.organic).length : true;
    var raw = checked.raw.length ? _.intersection(Array.from(el.classList), checked.raw).length : true;
    var NonPolluting = checked.NonPolluting.length ? _.intersection(Array.from(el.classList), checked.NonPolluting).length : true;
    if (vegan && organic && raw && NonPolluting) {
      el.style.display = 'block';
    } else {
      el.style.display = 'none';
    }
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