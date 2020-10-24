'use strict';

//open hours array

var openHours = ['6:00AM', '7:00AM', '8:00AM', '9:00AM', '10:00AM', '11:00AM', '12:00PM', '1:00PM', '2:00PM', '3:00PM', '4:00PM', '5:00PM', '6:00PM', '7:00PM'];

//this is an array of objects
var allCookieStores = [];
console.log(allCookieStores);

var tableParent = document.getElementById('store-data-table');
var storeForm = document.getElementById('store-form');
var tfoot = document.createElement ('tfoot');


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

CookieStore.prototype.renderTableData = function () {
  // for(var i = 0; i <allCookieStores.length; i++){
  var tableDataRow = document.createElement('tr');
  var locationName = document.createElement('td');
  locationName.textContent = this.location;
  tableDataRow.appendChild(locationName);

  for(var j = 0; j<openHours.length; j++){
    var salesData = document.createElement('td');
    salesData.textContent = this.cookieSalesPerHour[j];
    tableDataRow.appendChild(salesData);
  }
  var dailyTotalsData = document.createElement('td');
  dailyTotalsData.textContent = this.dailyTotal;
  tableDataRow.appendChild(dailyTotalsData);
  tableParent.appendChild(tableDataRow);
  // }
};


function renderPrototypes(){
  for(var i =0; i < allCookieStores.length; i++){
    allCookieStores[i].customersPerHour();
    allCookieStores[i].getCookieSalesPerHour();
    allCookieStores[i].renderTableData();
  }
}

new CookieStore('Seattle', 23, 65, 6.3);
new CookieStore('Tokyo', 3, 24, 1.2);
new CookieStore('Dubai', 11, 38, 3.7);
new CookieStore('Paris', 20, 38, 2.3);
new CookieStore('Lima', 2, 16, 4.6);

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

renderPrototypes();

function renderFooterData () {
  //appends foot to the row
  tableParent.appendChild(tfoot);
  var footerRow = document.createElement('tr');
  var footerTotalText = document.createElement('th');
  footerTotalText.textContent = 'Total:';
  footerRow.appendChild(footerTotalText);
  tfoot.appendChild(footerRow);

  var totalTotals = 0;

  for(var i = 0; i < openHours.length; i++){
    var hourlyTotals = 0;
    var hourlyTotalsData = document.createElement('th');
    for(var j = 0; j < allCookieStores.length; j++ ){
      hourlyTotals += allCookieStores[j].cookieSalesPerHour[i];
      totalTotals += allCookieStores[j].cookieSalesPerHour[i];

    }
    hourlyTotalsData.textContent = hourlyTotals;
    footerRow.appendChild(hourlyTotalsData);
    tfoot.appendChild(footerRow);
  }
  var grandTotal = document.createElement('th');
  grandTotal.textContent = totalTotals;
  footerRow.appendChild(grandTotal);
  tfoot.appendChild(footerRow);
}
renderFooterData();

function handleSubmit(event){
  event.preventDefault();
  var location = event.target.storename.value;
  // console.log(`store name: ${storeName}`);

  var minCustomer = parseInt(event.target.mincustomer.value);
  // console.log(`minCust: ${minCust}`);

  var maxCustomer = parseInt(event.target.maxcustomer.value);
  // console.log(`maxCust: ${maxCust}`);

  var avgCookieSale = parseInt(event.target.averagesale.value);
  // console.log(`avgCookie: ${avgCookie}`);

  var newStore = new CookieStore(location, minCustomer, maxCustomer, avgCookieSale);

  //clear the footer
  tfoot.innerHTML = '';
  newStore.customersPerHour();
  newStore.getCookieSalesPerHour();
  newStore.renderTableData();
  renderFooterData();
}


storeForm.addEventListener('submit', handleSubmit);


