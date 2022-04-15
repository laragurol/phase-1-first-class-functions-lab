const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

const returnFirstTwoDrivers = (drivers) => drivers.slice(0,2); 

const returnLastTwoDrivers = (drivers) => drivers.slice(-2);

const selectingDrivers = ([returnFirstTwoDrivers, returnLastTwoDrivers]);

function createFareMultiplier(num) {
    return function(fare) {
        return fare * num;
    }
}

const fareDoubler = (createFareMultiplier(2));

const fareTripler = (createFareMultiplier(3));

function selectDifferentDrivers(drivers, returnFirstTwoDrivers) {
    return returnFirstTwoDrivers(drivers);
}

console.log(returnLastTwoDrivers(drivers));



// Code your solution in this file!
