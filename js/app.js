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
  let dailyTotalCell = document.createElement('td');
  dailyTotalCell.textContent = 'Daily Location Total';
  headerRow.appendChild(dailyTotalCell);
};

function makeFooter() {
// hourly totals for all stores
// loop through each hour,
//within that hour, loop through all the stores to get hourlyCookies
// calculate hourly sale and store it to totalPerHour for all stores and create a cell for it
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
    footerRow.appendChild(hourlyTotalCell);
  }
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






// let seattleList = document.getElementById('seattleList');

// let seattle = {
//   minCust: 23,
//   maxCust: 65,
//   avgSale: 6.3,
//   dailyTotal: 0,
//   hourlyCookies: [],
//   randomCust: function () {
//     return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
//   },
//   generateCookieSale: function () {
//     for (let i = 0; i < hours.length; i++) {
//       let cookiesThisHr = Math.ceil(this.randomCust() * this.avgSale);
//       this.hourlyCookies.push(cookiesThisHr);
//       console.log(cookiesThisHr);
//       this.dailyTotal = this.dailyTotal + cookiesThisHr;
//     }
//   }
// };

// seattle.generateCookieSale();
// console.log(seattle);

// for (let i = 0; i < hours.length; i++) {
//   let li = document.createElement('li');
//   // li.textContent = hours[i] + ': ' + seattle.hourlyCookies[i] + ' cookies';
//   li.textContent = `${hours[i]}: ${seattle.hourlyCookies[i]} cookies`;
//   seattleList.appendChild(li);
// }

// let liSeattle = document.createElement('li');
// //liSeattle.textContent = 'Total: ' + seattle.dailyTotal + ' cookies';
// liSeattle.textContent = `Total: ${seattle.dailyTotal} cookies`;
// seattleList.appendChild(liSeattle);
// //console.log('Total: ' + seattle.dailyTotal + ' cookies');


// TOKYO

// let tokyoList = document.getElementById('tokyoList');

// let tokyo = {
//   minCust: 3,
//   maxCust: 24,
//   avgSale: 1.2,
//   dailyTotal: 0,
//   hourlyCookies: [],
//   randomCust: function () {
//     return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
//   },
//   generateCookieSale: function () {
//     for (let i = 0; i < hours.length; i++) {
//       let cookiesThisHr = Math.ceil(this.randomCust() * this.avgSale);
//       this.hourlyCookies.push(cookiesThisHr);
//       console.log(cookiesThisHr);
//       this.dailyTotal = this.dailyTotal + cookiesThisHr;
//     }
//   }
// };

// tokyo.generateCookieSale();
// console.log(tokyo);

// for (let i = 0; i < hours.length; i++) {
//   let li = document.createElement('li');
//   // li.textContent = hours[i] + ': ' + tokyo.hourlyCookies[i] + ' cookies';
//   li.textContent = `${hours[i]}: ${tokyo.hourlyCookies[i]} cookies`;
//   tokyoList.appendChild(li);
// }

// let liTokyo = document.createElement('li');
// //liTokyo.textContent = 'Total: ' + tokyo.dailyTotal + ' cookies';
// liTokyo.textContent = `Total: ${tokyo.dailyTotal} cookies`;
// tokyoList.appendChild(liTokyo);

// // DUBAI 

// let dubaiList = document.getElementById('dubaiList');

// let dubai = {
//   minCust: 11,
//   maxCust: 38,
//   avgSale: 3.7,
//   dailyTotal: 0,
//   hourlyCookies: [],
//   randomCust: function () {
//     return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
//   },
//   generateCookieSale: function () {
//     for (let i = 0; i < hours.length; i++) {
//       let cookiesThisHr = Math.ceil(this.randomCust() * this.avgSale);
//       this.hourlyCookies.push(cookiesThisHr);
//       console.log(cookiesThisHr);
//       this.dailyTotal = this.dailyTotal + cookiesThisHr;
//     }
//   }
// };

// dubai.generateCookieSale();
// console.log(dubai);

// for (let i = 0; i < hours.length; i++) {
//   let li = document.createElement('li');
//   //li.textContent = hours[i] + ': ' + dubai.hourlyCookies[i] + ' cookies';
//   li.textContent = `${hours[i]}: ${dubai.hourlyCookies[i]} cookies`;
//   dubaiList.appendChild(li);
// }

// let liDubai = document.createElement('li');
// // liDubai.textContent = 'Total: ' + dubai.dailyTotal + ' cookies';
// liDubai.textContent = `Total: ${dubai.dailyTotal} cookies`;
// dubaiList.appendChild(liDubai);

// // PARIS

// let parisList = document.getElementById('parisList');

// let paris = {
//   minCust: 20,
//   maxCust: 38,
//   avgSale: 2.3,
//   dailyTotal: 0,
//   hourlyCookies: [],
//   randomCust: function () {
//     return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
//   },
//   generateCookieSale: function () {
//     for (let i = 0; i < hours.length; i++) {
//       let cookiesThisHr = Math.ceil(this.randomCust() * this.avgSale);
//       this.hourlyCookies.push(cookiesThisHr);
//       console.log(cookiesThisHr);
//       this.dailyTotal = this.dailyTotal + cookiesThisHr;
//     }
//   }
// };

// paris.generateCookieSale();
// console.log(paris);

// for (let i = 0; i < hours.length; i++) {
//   let li = document.createElement('li');
//   // li.textContent = hours[i] + ': ' + paris.hourlyCookies[i] + ' cookies';
//   li.textContent = `${hours[i]}: ${paris.hourlyCookies[i]} cookies`;
//   parisList.appendChild(li);
// }

// let liParis = document.createElement('li');
// // liParis.textContent = 'Total: ' + paris.dailyTotal + ' cookies';
// liParis.textContent = `Total: ${paris.dailyTotal} cookies`;
// parisList.appendChild(liParis);

// // LIMA

// let limaList = document.getElementById('limaList');

// let lima = {
//   minCust: 3,
//   maxCust: 24,
//   avgSale: 1.2,
//   dailyTotal: 0,
//   hourlyCookies: [],
//   randomCust: function () {
//     return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
//   },
//   generateCookieSale: function () {
//     for (let i = 0; i < hours.length; i++) {
//       let cookiesThisHr = Math.ceil(this.randomCust() * this.avgSale);
//       this.hourlyCookies.push(cookiesThisHr);
//       console.log(cookiesThisHr);
//       this.dailyTotal = this.dailyTotal + cookiesThisHr;
//     }
//   }
// };

// lima.generateCookieSale();
// console.log(lima);

// for (let i = 0; i < hours.length; i++) {
//   let li = document.createElement('li');
//   // li.textContent = hours[i] + ': ' + lima.hourlyCookies[i] + ' cookies';
//   li.textContent = `${hours[i]}: ${lima.hourlyCookies[i]} cookies`;
//   limaList.appendChild(li);
// }

// let liLima = document.createElement('li');
// // liLima.textContent = 'Total: ' + lima.dailyTotal + ' cookies';
// liLima.textContent = `Total: ${lima.dailyTotal} cookies`;
// limaList.appendChild(liLima);