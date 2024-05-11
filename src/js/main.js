
// Arrow functions för att göra en hello utskrift till html sida.

let hello = "";

hello = () => {
  return "Hello från Najah Hawa, här används en Arrow funktion!";
}

document.getElementById("Arrow").innerHTML = hello();



//forEach 
// lägg till 12 % moms för varrje element i en array.
const numbs = [50, 100, 200, 1000]                 // Array of numbers
numbs.forEach((n, i, arr) => {              // n => element, i => index, arr => array(numbs)
 arr[i] = n * 1.12                              // add 12% to current element
})
let numberslist = document.getElementById('numberslist');
numbs.forEach((n) => {
    numberslist.innerHTML +=`<li> ${n} </li>`
   });



// map 

const names = [
    { firstName: 'Najah', lastName: 'Hawa' },
    { firstName: 'Danil', lastName: 'Svensson' },
    { firstName: 'Mattias', lastName: 'Dahlgren' },
    { firstName: 'Malin', lastName: 'larsson' },
   ]

   // create a new Array of fullNames using names Array
   const fullNames = names.map((name) => {
    const full_name = `${name.firstName} ${name?.lastName || ""}`
    return full_name.trimEnd()

   })

   const mapel = document.getElementById("map");
   fullNames.forEach((item) => {
    mapel.innerHTML +=`<li> ${item} </li>`
   });


// en eller flera arrayer
//Array.from
let myArr = Array.from("Najah");
let array_from = document.getElementById('array-from');
array_from .innerHTML = `<p> den nya arrayen är : ${myArr} </p>`; 

let prices = [100, 200, 300];
let taxedPrices = Array.from(prices, price => price * 1.25);
let array_from2 = document.getElementById('array-from2');
array_from2 .innerHTML = `<p> TaxedPrices blir då : ${taxedPrices} </p>`; 



//Array.fill
const fruits = ["t_shirt", "skrift", "dress", "hat"];

document.getElementById("array-fill").innerHTML = fruits.fill("heels",2,4); //array.fill(value, start, end)


function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}