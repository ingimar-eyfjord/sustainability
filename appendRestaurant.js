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
//	console.log (`showProduct.html?id=${nameData.gsx$id.$t}`);
//	copy.querySelector("a").href = `showProduct.html/?${nameData.gsx$id.$t}`;
//	copy.querySelector("a").setAttribute('href', 'showProduct.html?id=' + nameData.gsx$id.$t);
	var a = copy.querySelector(".showmore a"); 
	a.href = `showProduct.html?id=${nameData.gsx$id.$t}`;
	copy.querySelector(".clientshortinfo").textContent=nameData.gsx$type.$t;
//	copy.querySelector(".clientfullLongdescription").textContent=nameData.gsx$longdescription.$t;

//	   function change() {
//        let clientcardfilters = Array.from(copy.querySelectorAll('.clientcardfilter')),
//            all = document.querySelectorAll('.categorycheckbox input.btn:checked'),
//			btn = document.querySelectorAll('.categorycheckbox input.btn:checked'),
//        // Hide all results
//       
//			clientcardfilters.forEach(function(clientcardfilter) {
//            clientcardfilter.style.display = 'block';
//        });
//        // Filter results to only those that meet ALL requirements:        
//
//        filter(btn);
//
//        if (btn.length != 0) {
//            filter(btn);
//        }
//
//        function filter(allorbutton) {
//            clientcardfilters = Array.from(allorbutton).reduce(function(sum, input) {
//                const attrib = input.getAttribute('rel');
//                return sum.concat(clientcardfilters.filter(function(result) {
//                    return clientcardfilters.classList.contains(attrib);
//                }));
//            }, []);
//        }
//        // Show those filtered results:
//        clientcardfilters.forEach(function(result) {
//            clientcardfilters.style.display = 'block';
//        });
//    }
//    change();
//	
	
//	var allCheckboxes = document.querySelectorAll('input[type=checkbox]');
//
//var allPlayers = Array.from(copy.querySelector('.clientcardfilter'));
//console.log(document.querySelectorAll('input[type=checkbox]'));
//var checked = {};
////they are not picking up the clientcard filters.
//
//getChecked('vegan');
//getChecked('raw');
//getChecked('organic');
//getChecked('nonpolluting');
//
//Array.prototype.forEach.call(allCheckboxes, function (el) {
//  el.addEventListener("change", toggleCheckbox);
//});
//
//function toggleCheckbox(e) {
//  getChecked(e.target.name);
//  setVisibility();
//}
//console.log(toggleCheckbox())
//function getChecked(name) {
//  checked[name] = Array.from(document.querySelectorAll('input[name=' + name + ']:checked')).map(function (el) {
//    return el.value;
//  });
//}
//console.log(checked[name])
////do ithis function for the articles. on click if something is true in checkbox fin
//function setVisibility() {
//  allPlayers.map(function (el) {
//	  
//    var vegan = checked.vegan.length ? _.intersection(Array.from(el.classList), checked.vegan).length : true;
//    var organic = checked.organic.length ? _.intersection(Array.from(el.classList), checked.organic).length : true;
//    var raw = checked.raw.length ? _.intersection(Array.from(el.classList), checked.raw).length : true;
//    var nonpolluting = checked.nonpolluting.length ? _.intersection(Array.from(el.classList), checked.nonpolluting).length : true;
//    if (vegan && organic && raw && NonPolluting) {
////	   if (vegan || organic || raw || nonpolluting) {
//      el.style.display = 'block';
//    } else {
//      el.style.display = 'none';
//    }
//  });
//}

	
	
	
	
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