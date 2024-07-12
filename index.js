/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */
 const employeeInfo = ["Gray", "Worm", "Security", 1]

 let twoRows = [
     ["moe", "sizlak", "barkeep", 2],
     ["bartholomew", "simpson", "scamp", 3]
   ]
 
 
 function createEmployeeRecord(infoArr) {
     return {
         firstName: infoArr[0],
         familyName: infoArr[1],
         title: infoArr[2],
         payPerHour: infoArr[3],
         timeInEvents: [],
         timeOutEvents: []
     };
 }
 // console.log(createEmployeeRecord(employeeInfo))
 
 function createEmployeeRecords(recordsArr){
     return recordsArr.map(createEmployeeRecord);
 }
 
 
 // console.log(createEmployeeRecords(twoRows))
 
 
 function createTimeInEvent(dateTime){
     const [date, hour] = dateTime.split(' ');
 
     const timeInEvent = {
         type: "TimeIn",
         hour: parseInt(hour, 10),
         date: date
     };
 
     this.timeInEvents.push(timeInEvent);
 
     return this
 }
 
 
 function createTimeOutEvent(dateTime){
     const [date, hour] = dateTime.split(' ');
 
     const timeOutEvent = {
         type: "TimeOut",
         hour: parseInt(hour, 10),
         date: date
     };
 
     this.timeOutEvents.push(timeOutEvent);
 
     return this;
 }
 
 
 function hoursWorkedOnDate(date){
    const timeInEvent = this.timeInEvents.find(event => event.date === date);
    const timeOutEvent = this.timeOutEvents.find(event => event.date === date);
 
    if (timeInEvent && timeOutEvent){
     const hoursWorked= (timeOutEvent.hour - timeInEvent.hour)/100;
     return hoursWorked;
    }else{
     return 0;
    }
 }
 
 function wagesEarnedOnDate(date){
     const hoursWorked = hoursWorkedOnDate.call(this, date);
     return hoursWorked * this.payPerHour;
 }
 
function allWagesFor() {
    const eligibleDates = this.timeInEvents.map(e => e.date)

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

function calculatePayroll(empRecWork) {
    const totalPayroll = empRecWork.reduce((total, record) => {
        return total + allWagesFor.call(record);
    }, 0);

    return totalPayroll;
}

function findEmployeeByFirstName(srcArray, firstName){
           return srcArray.find(person => person.firstName === firstName);
}