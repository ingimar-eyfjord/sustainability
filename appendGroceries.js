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

function showName(nameData){
	const template = document.querySelector("template").content;
	const copy = template.cloneNode(true);
	copy.querySelector(".clientname").textContent=nameData.gsx$name.$t;
	copy.querySelector(".clientlocation").textContent=nameData.gsx$adress.$t;
//	copy.querySelector(".clientlocation").textContent=nameData.gsx$adress.$t;
	copy.querySelector(".clientlogo img").src = `media/clientslogos/${nameData.gsx$imgname.$t}.jpg`;
	copy.querySelector(".clientshortinfo").textContent=nameData.gsx$type.$t;
	
	var a = copy.querySelector(".showmore a"); 
	a.href = `showProduct.html?id=${nameData.gsx$id.$t}&lat=${nameData.gsx$lat.$t}&lng=${nameData.gsx$lng.$t}`;
	
	function vegan() {
    if (nameData.gsx$vegan.$t === "1") {
		copy.querySelector(".vegan").style.display = "block";
//      copy.querySelector(".vegan img").src = `media/icons/vegan.png`;
    }
  }
  vegan()
	
	function zeroWaste() {
    if (nameData.gsx$zerowaste.$t === "1") {
		copy.querySelector(".zeroWaste").style.display = "block";
//      copy.querySelector(".vegan img").src = `media/icons/vegan.png`;
    }
  }
  zeroWaste()
		function organic() {
    if (nameData.gsx$organic.$t === "1") {
		copy.querySelector(".organic").style.display = "block";
//      copy.querySelector(".vegan img").src = `media/icons/vegan.png`;
    }
  }
  organic()
		function raw() {
    if (nameData.gsx$raw.$t === "1") {
		copy.querySelector(".raw").style.display = "block";
//      copy.querySelector(".vegan img").src = `media/icons/vegan.png`;
    }
  }
  raw()
		function NonPolluting() {
    if (nameData.gsx$nonpolluting.$t === "1") {
		copy.querySelector(".NonPolluting").style.display = "block";
//      copy.querySelector(".vegan img").src = `media/icons/vegan.png`;
    }
  }
  NonPolluting()
	
		function appendIngroceries(){
		if(nameData.gsx$category.$t === "groceries")
		document.querySelector("article.groceries").appendChild(copy);
	}
	appendIngroceries()// JavaScript Document
}