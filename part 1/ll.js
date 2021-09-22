var likes = 0;
console.log("I found the js file!")
function changeLikes() {
 likes += 1;
 document.querySelector("#add").innerText = likes;
 console.log("clicked");
}