/* Allows you to listen for the event "DOMContentLoaded" to load the page entirely, then will run the function.
 */

document.addEventListener("DOMContentLoaded", function () {
  document.querySelector("button").onClick = count;
});
//define the counter as  a let variable because it will change.
let counter = 0;

//count function
function count() {
  counter++;
  document.querySelector("#counter").innerHTML = counter;
}
