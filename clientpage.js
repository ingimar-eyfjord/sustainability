// JavaScript Document

const link =
  "https://spreadsheets.google.com/feeds/list/1kbHDE_BG8qb5t72fitcdg4PbMjENz7fVTgHCjb12ScI/od6/public/values?alt=json";
window.addEventListener("load", getData);



function getData() {
  fetch(link)
    .then(res => res.json())
    .then(showData);}


	
function  initMap(){
	var location = {lat: 55.676, lng: 12.568};
	var map = new google.maps.Map(document.getElementById("map"),{
		zoom: 12,
		center: location
	});
	var marker = new google.maps.Marker({
		position: location, 
		map: map
	});
}


function showData(data){
	const myArray = data.feed.entry;
	myArray.forEach(showName)}

function showName(nameData){
	const template = document.querySelector("template").content;
	const copy = template.cloneNode(true);	
	copy.querySelector(".clientnamefullpage").textContent=nameData.gsx$name.$t;
	
	copy.querySelector(".clientshortdescription p").textContent=nameData.gsx$type.$t;
	copy.querySelector(".clientfullLongdescription").textContent=nameData.gsx$longdescription.$t;
	copy.querySelector(".clientbannarimage img").src = `media/clientlandingpageimage/${nameData.gsx$clientbanners.$t}.png`;
	copy.querySelector(".adresses p").textContent=nameData.gsx$adress.$t;
	
	

	
		function vegan() {
    if (nameData.gsx$vegan.$t === "1") {
		copy.querySelector(".vegan").style.display = "block";

    }
  }
  vegan()
	
	function zeroWaste() {
    if (nameData.gsx$zerowaste.$t === "1") {
		copy.querySelector(".zeroWaste").style.display = "block";

    }
  }
  zeroWaste()
		function organic() {
    if (nameData.gsx$organic.$t === "1") {
		copy.querySelector(".organic").style.display = "block";

    }
  }
  organic()
		function raw() {
    if (nameData.gsx$raw.$t === "1") {
		copy.querySelector(".raw").style.display = "block";
    }
  }
  raw()
		function NonPolluting() {
    if (nameData.gsx$nonpolluting.$t === "1") {
		copy.querySelector(".NonPolluting").style.display = "block";
    }
  }
  NonPolluting()
	
	
	
//	window.onload = function() {
//			try {
				var url_string = (window.location.href).toLowerCase();
				var url = new URL(url_string);
        		var id = url.searchParams.get("id");
				console.log(id);


	function appendInrestaurants(){
		if(nameData.gsx$id.$t === id)
		document.querySelector(".pagelayout").appendChild(copy);
	}
	appendInrestaurants()}



// JavaScript Document