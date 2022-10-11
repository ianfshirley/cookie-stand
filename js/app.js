'use strict'

let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm']; 
// (length is 14)


// SEATTLE

function CookieStand(location, minCust, maxCust, avgSale) {
  this.location = location;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgSale = avgSale;
  this.dailyTotal = 0;
  this.hourlyCookies = [];
  this.randomCust = function() {
        return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
      };
}

// CookieStand.prototype.cookiesThisHr = function() {
//   return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
// }

CookieStand.prototype.generateCookieSale = function() {
  for (let i = 0; i < hours.length; i++) {
    let cookiesThisHr = Math.ceil(this.randomCust() * this.avgSale);
    this.hourlyCookies.push(cookiesThisHr);
    console.log(cookiesThisHr);
    this.dailyTotal = this.dailyTotal + cookiesThisHr;

  }
  
};

let seattle = new CookieStand ('Seattle', 23, 65, 6.3);
let tokyo = new CookieStand ('Tokyo', 3, 24, 1.2);
let dubai = new CookieStand ('Dubai', 11, 38, 3.7);
let paris = new CookieStand ('Paris', 20, 38, 2.3);
let lima = new CookieStand ('Lima', 3, 24, 1.2);

// console.log(seattle.generateCookieSale());
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