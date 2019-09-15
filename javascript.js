// JavaScript Document

const link =
  "https://spreadsheets.google.com/feeds/list/1Mzu8QJEyMlb9hzuLTv77sH8TOYEChrdNEPS5FyDAo3Q/od6/public/values?alt=json";
window.addEventListener("load", getData);

function getData() {
  fetch(link)
    .then(res => res.json())
    .then(showData);
}

function showData(data) {
 const template = document.querySelector("template").content;const template = document.querySelector("template").content;
  const copy = template.cloneNode(true);.feed.entry.)
const template = document.querySelector("template").content;ee copy.querySelector(".menuitemheader h2").textContent = dish.name;;}= dish.name;= dish.name;plate.clplate.clee