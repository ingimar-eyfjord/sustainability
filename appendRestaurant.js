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
//	
//	function  initMap(){
//	var location = {lat: -25.363, lng: 131.044};
//	var map = new google.maps.Map(copy.querySelector(".maps"),{
//		zoom: 4,
//		center: location
//	});
//	var marker = new google.maps.Marker({
//		position: location, 
//		map: map
//	});
//		copy.querySelector(".maps").appendChild(copy);
//}
//	
	
//	const Mapmodal = copy.querySelector(".maps");
//	Mapmodal.addEventListener("click", () => {
//		Mapmodal.classList.add("displaynone");
//});
//function showMap(map) {
//  //...
//  copy.querySelector(".clientlocationMaps").addEventListener("click", () => {nameData.gsx$lat.$t,nameData.gsx$lng.$t
//	function initMap(){
//		var location = {lat: -25.363, lng: 131.044};
//		  console.log(nameData.gsx$lat.$t)
//		var map = new google.maps.Map(copy.getElementById("map"),{
//		zoom: 4,
//		center: location
//	});
//	var marker = new google.maps.Marker({
//		position: location, 
//		map: map
//	});}
//	  Mapmodal.classList.remove("hide");
//}});

	
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
