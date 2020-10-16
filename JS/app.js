'use strict';

//open hours array 

var openHours = ['6:00AM', '7:00AM', '8:00AM', '9:00AM', '10:00AM', '11:00AM', '12:00PM', '1:00PM', '2:00PM', '3:00PM', '4:00PM', '5:00PM', '6:00PM', '7:00PM'];

//create separate object literals for each shop location that outputs to sales.html

var seattle = {
  storeLocation: 'seattle',
  minCustomer: 23,
  maxCustomer: 65,
  avgCookieSalePerCustomer: 6.3,
  cookieSalesPerHour: [],

  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
  customersPerHour: function() {
    return Math.floor(Math.random() * (this.maxCustomer - this.minCustomer + 1) + this.minCustomer);
  },

  getCookieSalesPerHour: function () {
    for(var i=0; i < openHours.length; i++){
      var cookiesByHour = Math.round(this.avgCookieSalePerCustomer * this.customersPerHour());
      this.cookieSalesPerHour.push(cookiesByHour);
    }
    return cookiesByHour;
  },

  //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
  dailyTotal: function (){
    var total = this.cookieSalesPerHour.reduce(function (a,b){
      return a + b;
    }, 0);
    return total;
  },

  displayOnPage: function (){
    var parentElement = document.getElementById('seattle-location');

    for(var i = 0; i < openHours.length; i++){
      var liEl = document.createElement('li');
      liEl.textContent = openHours[i] + ': ' + this.cookieSalesPerHour[i] + ' cookies';
      parentElement.appendChild(liEl);
    }
    var liTotal = document.createElement('li');
    liTotal.textContent = 'Total Sales: ' + this.dailyTotal() + ' cookies';
    parentElement.appendChild(liTotal);
  }
};

seattle.customersPerHour();
seattle.getCookieSalesPerHour();
seattle.getCookieSalesPerHour();
seattle.dailyTotal();
seattle.displayOnPage();

var tokyo = {
  storeLocation: 'tokyo',
  minCustomer: 3,
  maxCustomer: 24,
  avgCookieSalePerCustomer: 1.2,
  cookieSalesPerHour: [],

  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
  customersPerHour: function() {
    return Math.floor(Math.random() * (this.maxCustomer - this.minCustomer + 1) + this.minCustomer);
  },

  getCookieSalesPerHour: function () {
    for(var i=0; i < openHours.length; i++){
      var cookiesByHour = Math.round(this.avgCookieSalePerCustomer * this.customersPerHour());
      this.cookieSalesPerHour.push(cookiesByHour);
    }
    return cookiesByHour;
  },

  //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
  dailyTotal: function (){
    var total = this.cookieSalesPerHour.reduce(function (a,b){
      return a + b;
    }, 0);
    return total;
  },

  displayOnPage: function (){
    var parentElement = document.getElementById('tokyo-location');

    for(var i = 0; i < openHours.length; i++){
      var liEl = document.createElement('li');
      liEl.textContent = openHours[i] + ': ' + this.cookieSalesPerHour[i] + ' cookies';
      parentElement.appendChild(liEl);
    }
    var liTotal = document.createElement('li');
    liTotal.textContent = 'Total Sales: ' + this.dailyTotal() + ' cookies';
    parentElement.appendChild(liTotal);
  }
};

tokyo.customersPerHour();
tokyo.getCookieSalesPerHour();
tokyo.getCookieSalesPerHour();
tokyo.dailyTotal();
tokyo.displayOnPage();

var dubai = {
  storeLocation: 'dubai',
  minCustomer: 11,
  maxCustomer: 38,
  avgCookieSalePerCustomer: 3.7,
  cookieSalesPerHour: [],

  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
  customersPerHour: function() {
    return Math.floor(Math.random() * (this.maxCustomer - this.minCustomer + 1) + this.minCustomer);
  },

  getCookieSalesPerHour: function () {
    for(var i=0; i < openHours.length; i++){
      var cookiesByHour = Math.round(this.avgCookieSalePerCustomer * this.customersPerHour());
      this.cookieSalesPerHour.push(cookiesByHour);
    }
    return cookiesByHour;
  },

  //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
  dailyTotal: function (){
    var total = this.cookieSalesPerHour.reduce(function (a,b){
      return a + b;
    }, 0);
    return total;
  },

  displayOnPage: function (){
    var parentElement = document.getElementById('dubai-location');

    for(var i = 0; i < openHours.length; i++){
      var liEl = document.createElement('li');
      liEl.textContent = openHours[i] + ': ' + this.cookieSalesPerHour[i] + ' cookies';
      parentElement.appendChild(liEl);
    }
    var liTotal = document.createElement('li');
    liTotal.textContent = 'Total Sales: ' + this.dailyTotal() + ' cookies';
    parentElement.appendChild(liTotal);
  }
};

dubai.customersPerHour();
dubai.getCookieSalesPerHour();
dubai.getCookieSalesPerHour();
dubai.dailyTotal();
dubai.displayOnPage();

var paris = {
  storeLocation: 'paris',
  minCustomer: 20,
  maxCustomer: 38,
  avgCookieSalePerCustomer: 2.3,
  cookieSalesPerHour: [],

  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
  customersPerHour: function() {
    return Math.floor(Math.random() * (this.maxCustomer - this.minCustomer + 1) + this.minCustomer);
  },

  getCookieSalesPerHour: function () {
    for(var i=0; i < openHours.length; i++){
      var cookiesByHour = Math.round(this.avgCookieSalePerCustomer * this.customersPerHour());
      this.cookieSalesPerHour.push(cookiesByHour);
    }
    return cookiesByHour;
  },

  //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
  dailyTotal: function (){
    var total = this.cookieSalesPerHour.reduce(function (a,b){
      return a + b;
    }, 0);
    return total;
  },

  displayOnPage: function (){
    var parentElement = document.getElementById('paris-location');

    for(var i = 0; i < openHours.length; i++){
      var liEl = document.createElement('li');
      liEl.textContent = openHours[i] + ': ' + this.cookieSalesPerHour[i] + ' cookies';
      parentElement.appendChild(liEl);
    }
    var liTotal = document.createElement('li');
    liTotal.textContent = 'Total Sales: ' + this.dailyTotal() + ' cookies';
    parentElement.appendChild(liTotal);
  }
};

paris.customersPerHour();
paris.getCookieSalesPerHour();
paris.getCookieSalesPerHour();
paris.dailyTotal();
paris.displayOnPage();

var lima = {
  storeLocation: 'lima',
  minCustomer: 2,
  maxCustomer: 16,
  avgCookieSalePerCustomer: 4.6,
  cookieSalesPerHour: [],

  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
  customersPerHour: function() {
    return Math.floor(Math.random() * (this.maxCustomer - this.minCustomer + 1) + this.minCustomer);
  },

  getCookieSalesPerHour: function () {
    for(var i=0; i < openHours.length; i++){
      var cookiesByHour = Math.round(this.avgCookieSalePerCustomer * this.customersPerHour());
      this.cookieSalesPerHour.push(cookiesByHour);
    }
    return cookiesByHour;
  },

  //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
  dailyTotal: function (){
    var total = this.cookieSalesPerHour.reduce(function (a,b){
      return a + b;
    }, 0);
    return total;
  },

  displayOnPage: function (){
    var parentElement = document.getElementById('lima-location');

    for(var i = 0; i < openHours.length; i++){
      var liEl = document.createElement('li');
      liEl.textContent = openHours[i] + ': ' + this.cookieSalesPerHour[i] + ' cookies';
      parentElement.appendChild(liEl);
    }
    var liTotal = document.createElement('li');
    liTotal.textContent = 'Total Sales: ' + this.dailyTotal() + ' cookies';
    parentElement.appendChild(liTotal);
  }
};

lima.customersPerHour();
lima.getCookieSalesPerHour();
lima.getCookieSalesPerHour();
lima.dailyTotal();
lima.displayOnPage();





