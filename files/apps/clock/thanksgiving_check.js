var SUN = 1,
  MON = 2,
  TUE = 3,
  WED = 4,
  THU = 5,
  FRI = 6,
  SAT = 7;

var JAN = 1,
  FEB = 2,
  MAR = 3,
  APR = 4,
  MAY = 5,
  JUN = 6,
  JUL = 7,
  AUG = 8,
  SEP = 9,
  OCT = 10,
  NOV = 11,
  DEC = 12;

var FIRST = 1,
  SECOND = 2,
  THIRD = 3,
  FOURTH = 4,
  LAST = -1;

var HOLIDAYS = {
  "Martin Luther King, Jr. Day": [THIRD, MON, JAN],
  "Memorial Day": [LAST, MON, MAY],
  "Labor Day": [FIRST, MON, SEP],
  "Columbus Day": [SECOND, MON, OCT],
  "Thanksgiving Day": [LAST, THU, NOV]
};

var isFloatingHoliday = function(date, occurrence, weekDay, month) {

  if (date.getMonth() != month - 1) {
    return false;
  }

  if (date.getDay() != weekDay - 1) {
    return false;
  }

  var DAYS_IN_WEEK;

  if (occurrence == Math.ceil(date.getDate() / DAYS_IN_WEEK)) {
    return true;
  }

  var LAST = -1;
  if (occurrence != LAST) {
    return false;
  }

  var newDate = new Date(date);
  newDate.setDate(date.getDate() + DAYS_IN_WEEK);
  newDate.getMonth() + 1;

  return month != newDate.getMonth() + 1;
};

var getFloatingHoliday = function(date) {
  var results = Object.keys(HOLIDAYS).filter(function(val, index) {
    var occurrence = HOLIDAYS[val][0];
    var weekDay = HOLIDAYS[val][1];
    var month = HOLIDAYS[val][2];

    if (isFloatingHoliday(date, occurrence, weekDay, month)) {
      return true;
    }

    return false;
  });

  if (results.length) {
    return results[0];
  }

  return null;
}


var test1 = isFloatingHoliday(new Date('11/22/'+lightyear+''), LAST, THU, NOV); 
var test2 = isFloatingHoliday(new Date('11/23/'+lightyear+''), LAST, THU, NOV); 
var test3 = isFloatingHoliday(new Date('11/24/'+lightyear+''), LAST, THU, NOV); 
var test4 = isFloatingHoliday(new Date('11/25/'+lightyear+''), LAST, THU, NOV); 
var test5 = isFloatingHoliday(new Date('11/26/'+lightyear+''), LAST, THU, NOV); 
var test6 = isFloatingHoliday(new Date('11/27/'+lightyear+''), LAST, THU, NOV); 
var test7 = isFloatingHoliday(new Date('11/28/'+lightyear+''), LAST, THU, NOV); 

if (test1){
	thanksgiving_day = new Date('11/22/'+lightyear+'');
} else if (test2){
	thanksgiving_day = new Date('11/23/'+lightyear+'');
	} else if (test3){
		thanksgiving_day = new Date('11/24/'+lightyear+'');
		} else if (test4){
			thanksgiving_day = new Date('11/25/'+lightyear+'');
			} else if (test5){
				thanksgiving_day = new Date('11/26/'+lightyear+'');
				} else if (test6){
					thanksgiving_day = new Date('11/27/'+lightyear+'');
					} else if (test7){
						thanksgiving_day = new Date('11/28/'+lightyear+'');
							} else {
						thanksgiving_day = new Date('11/25/'+lightyear+'');
						}


