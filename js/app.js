'use strict'

let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm']; 
// (length is 14)

let seattleList = document.getElementById('seattleList');

let seattle = {
  minCust: 23,
  maxCust: 65,
  avgSale: 6.3,
  dailyTotal: 0,
  hourlyCookies: [],
  randomCust: function () {
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
  },
  generateCookieSale: function () {
    for (let i = 0; i < hours.length; i++) {
      let cookiesThisHr = Math.ceil(this.randomCust() * this.avgSale);
      this.hourlyCookies.push(cookiesThisHr);
    }
  }
  
};

seattle.generateCookieSale();
console.log(seattle);

for (let i = 0; i < hours.length; i++) {
  let li = document.createElement('li');
  li.textContent = seattle.hourlyCookies[i];
  seattleList.appendChild(li);
}

