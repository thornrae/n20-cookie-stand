'use strict';

//open hours array 

var openHours = ['6:00AM', '7:00AM', '8:00AM', '9:00AM', '10:00AM', '11:00AM', '12:00PM', '1:00PM', '2:00PM', '3:00PM', '4:00PM', '5:00PM', '6:00PM', '7:00PM'];
var allCookieStores = [];

var tableParent = document.getElementById('store-data-table');

//create single constructor function

function CookieStore(location, minCustomer, maxCustomer, avgCookieSale){
  this.location = location;
  this.minCustomer = minCustomer;
  this.maxCustomer = maxCustomer;
  this.avgCookieSale = avgCookieSale;

  this.cookieSalesPerHour = [];

  this.dailyTotal = 0;

  allCookieStores.push(this);
}


CookieStore.prototype.getCookieSalesPerHour = function (){
  for(var i=0; i < openHours.length; i++){
    var cookiesByHour = Math.round(this.avgCookieSale * this.customersPerHour());
    this.cookieSalesPerHour.push(cookiesByHour);
    this.dailyTotal += cookiesByHour;
  }
  return cookiesByHour;
};

CookieStore.prototype.customersPerHour = function() {
  return Math.floor(Math.random() * (this.maxCustomer - this.minCustomer + 1) + this.minCustomer);
};

function renderPrototypes(){
  for(var i =0; i < allCookieStores.length; i++){
    allCookieStores[i].customersPerHour();
    allCookieStores[i].getCookieSalesPerHour();
  }
}

new CookieStore('Seattle', 23, 65, 6.3);
new CookieStore('Tokyo', 3, 24, 1.2);
new CookieStore('Dubai', 11, 38, 3.7);
new CookieStore('Paris', 20, 38, 2.3);
new CookieStore('Lima', 2, 16, 4.6);
renderPrototypes();

function renderHeader () {
  var tableHeaderRow = document.createElement('tr');
  var emptyFirstRowCell = document.createElement('th');
  emptyFirstRowCell.textContent = ' ';
  tableHeaderRow.appendChild(emptyFirstRowCell);
  for(var i=0; i < openHours.length; i++){
    var tableHeaderData = document.createElement('th');
    tableHeaderData.textContent = openHours[i];
    tableHeaderRow.appendChild(tableHeaderData);
    tableParent.appendChild(tableHeaderRow);
  }
  var dailyLocationTotal = document.createElement('th');
  dailyLocationTotal.textContent = 'Daily Location Total';
  tableHeaderRow.appendChild(dailyLocationTotal);
}
renderHeader();

function renderTableData () {
  for(var i = 0; i <allCookieStores.length; i++){
    var tableDataRow = document.createElement('tr');
    var locationName = document.createElement('td');
    locationName.textContent = allCookieStores[i].location;
    tableDataRow.appendChild(locationName);
    for(var j = 0; j<allCookieStores[i].cookieSalesPerHour.length; j++){
      var salesData = document.createElement('td');
      salesData.textContent = allCookieStores[i].cookieSalesPerHour[j];
      tableDataRow.appendChild(salesData);
    }
    var dailyTotalsData = document.createElement('td');
    dailyTotalsData.textContent = allCookieStores[i].dailyTotal;
    tableDataRow.appendChild(dailyTotalsData);
    tableParent.appendChild(tableDataRow);
  }
}
renderTableData();

function renderFooterData () {
  var footerRow = document.createElement('tr');
  var footerTotalText = document.createElement('th');
  footerTotalText.textContent = 'Total:';
  footerRow.appendChild(footerTotalText);
  tableParent.appendChild(footerRow);

  var totalTotals = 0;


  for(var i = 0; i < openHours.length; i++){
    var hourlyTotals = 0; //this clears value so that hourly totals restart
    var hourlyTotalsData = document.createElement('th');

    for(var j = 0; j < allCookieStores.length; j++ ){
      hourlyTotals += allCookieStores[j].cookieSalesPerHour[i];
      totalTotals += allCookieStores[j].cookieSalesPerHour[i];

    }
    hourlyTotalsData.textContent = hourlyTotals;
    footerRow.appendChild(hourlyTotalsData);
    tableParent.appendChild(footerRow);
  }
  var grandTotal = document.createElement('th');
  grandTotal.textContent = totalTotals;
  footerRow.appendChild(grandTotal);
  tableParent.appendChild(footerRow);
}
renderFooterData();
//create instances of each store using the new keyword to eliminate use of object literals.


//replace the lists data for each store and build a single table of data instead 

//display each stores data in a table. each cookie stand location should have a separate render() method that creates and appends its row to the table

//the header and footer row are each created in their own stand-alone function - use header cell for the header row (containing store hours) and the footer row (showing hourly and grand totals across all stores)

//random number generator function


//create separate object literals for each shop location that outputs to sales.html


//   // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
//   customersPerHour: function() {
//     return Math.floor(Math.random() * (this.maxCustomer - this.minCustomer + 1) + this.minCustomer);
//   },



//   //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
//   dailyTotal: function (){
//     var total = this.cookieSalesPerHour.reduce(function (a,b){
//       return a + b;
//     }, 0);
//     return total;
//   },

