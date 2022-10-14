'use strict'

let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
// (length is 14)

let table = document.getElementById('salesTable');

// hourlyCookies is the array holding how many cookies for each hour per location
// cookiesThisHr is the actual number that gets returned per hour per location
// thisHourCell: one cell per hour for a same location
// totalPerHour is the total of all locations for each hour

function CookieStand(locationName, minCust, maxCust, avgSale) {
  this.locationName = locationName;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgSale = avgSale;
  this.dailyTotal = 0;
  this.hourlyCookies = [];//[10,11,8]
  this.randomCust = function() {
        return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
      };
  allCookieStores.push(this);
  
}


// calculate hourly / daily total for each location
CookieStand.prototype.generateCookieSale = function() {
  for (let i = 0; i < hours.length; i++) {
    let cookiesThisHr = Math.ceil(this.randomCust() * this.avgSale);
    this.hourlyCookies.push(cookiesThisHr);
    this.dailyTotal = this.dailyTotal + cookiesThisHr;
  }
};



CookieStand.prototype.makeRow = function() {
  let makeRow = document.createElement('tr');
  let locationCell = document.createElement('th');
  locationCell.textContent = this.locationName;
  makeRow.appendChild(locationCell);
  for (let i = 0; i < this.hourlyCookies.length; i++) {
    let thisHourCell = document.createElement('td');
    thisHourCell.textContent = this.hourlyCookies[i];
    makeRow.appendChild(thisHourCell);
  }
  let dailyTotalCell = document.createElement('td');
  dailyTotalCell.textContent = this.dailyTotal;
  makeRow.appendChild(dailyTotalCell);
  table.appendChild(makeRow);
};



function makeHeader(hours) {
  // create table header row
  let headerRow = document.createElement('tr');
  let emptyCell = document.createElement('td');
  headerRow.appendChild(emptyCell)
  table.appendChild(headerRow);
  for (let i = 0; i < hours.length; i++) {
      let hourCell = document.createElement('th');
      hourCell.textContent = hours[i];
      headerRow.appendChild(hourCell);
  }
  let dailyTotalCell = document.createElement('th');
  dailyTotalCell.textContent = 'Daily Location Total';
  headerRow.appendChild(dailyTotalCell);
};

function makeFooter() {
// hourly totals for all stores
// loop through each hour,
//within that hour, loop through all the stores to get hourlyCookies
// calculate hourly sale and store it to totalPerHour for all stores and create a cell for it
let totalPerHourArray = []
let footerRow = document.createElement('tr');
let footerName = document.createElement('th');
footerName.textContent = 'Totals';
table.appendChild(footerRow);
footerRow.appendChild(footerName);
  for (let i = 0; i < hours.length; i++) {
    let hourlyTotalCell = document.createElement('td');
    let totalPerHour = 0;
      for (let j = 0; j < allCookieStores.length; j++) {
        totalPerHour = totalPerHour + allCookieStores[j].hourlyCookies[i]
        //let totalPerHour += allCookieStores[j].hourlyCookies[i]
      }
    hourlyTotalCell.textContent = totalPerHour;
    totalPerHourArray.push(totalPerHour);
    footerRow.appendChild(hourlyTotalCell);
  }
  let allCitiesTotalCell = document.createElement('th');
  let allCitiesTotal = 0;
    for (let i = 0; i < totalPerHourArray.length; i++) {
      allCitiesTotal += totalPerHourArray[i];
    }
  allCitiesTotalCell.textContent = allCitiesTotal;
  footerRow.appendChild(allCitiesTotalCell);
};

let allCookieStores = []

//[{name: seattle, minCus: 23, maxCus: 65, AvgSale: 6.3},
//{name: seattle, minCus: 23, maxCus: 65, AvgSale: 6.3}]
let seattle = new CookieStand ('Seattle', 23, 65, 6.3);
let tokyo = new CookieStand ('Tokyo', 3, 24, 1.2);
let dubai = new CookieStand ('Dubai', 11, 38, 3.7);
let paris = new CookieStand ('Paris', 20, 38, 2.3);
let lima = new CookieStand ('Lima', 3, 24, 1.2);



function renderRows() {
  makeHeader(hours);
  for (let i = 0; i < allCookieStores.length; i++) {
    allCookieStores[i].makeRow();
  }
  makeFooter();
};


seattle.generateCookieSale();
console.log(seattle.dailyTotal);

tokyo.generateCookieSale();
console.log(tokyo.dailyTotal);

dubai.generateCookieSale();
console.log(dubai.dailyTotal);

paris.generateCookieSale();
console.log(paris.dailyTotal);

lima.generateCookieSale();
console.log(lima.dailyTotal);


renderRows();

// FORM

// window into the DOM
let form = document.querySelector('form');
console.log('form');

// declare event handler (function)
let handleSubmit = function(event) {
  event.preventDefault();
  console.log('the form submitted');
  let newStoreLocation = event.target.newStoreLocation.value;
  console.log(event.target.newStoreLocation.value);
  let newStoreMinCust = parseInt(parseInt(event.target.newStoreMinCust.value));
  console.log(parseInt(event.target.newStoreMinCust.value));
  let newStoreMaxCust = parseInt(event.target.newStoreMaxCust.value);
  console.log(parseInt(event.target.newStoreMaxCust.value));
  let newStoreAvgSale = parseInt(event.target.newStoreAvgSale.value);
  console.log(parseInt(event.target.newStoreAvgSale.value));

  // function to create a new store
  console.log('table row count', document.querySelectorAll('#salesTable tr').length)
  console.log('store count', allCookieStores.length)
  document.querySelector('table').deleteRow((allCookieStores.length)+1);
  
  let newStore = new CookieStand(newStoreLocation, newStoreMinCust, newStoreMaxCust, newStoreAvgSale); 
  console.log(newStore);
  newStore.generateCookieSale();

  newStore.makeRow();
  allCookieStores.push(newStore);
  makeFooter();

}
  

// add event listener - what type of event? -> submit
form.addEventListener('submit', handleSubmit)



