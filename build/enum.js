"use strict";
// enum
//numeric enums
//enum Month {
//  JAN = 1,
//  FEB,
//  MAR,
//  APR,
//  MAY,
//  JUN,
//  JUL
//}
//console.log(Month.MAR);
//string enums
var Month;
(function (Month) {
    Month["JAN"] = "Januari";
    Month["FEB"] = "Februari";
    Month["MAR"] = "Maret";
    Month["APR"] = "April";
    Month["MEI"] = "Mei";
    Month["JUN"] = "Juni";
    Month["JUL"] = "Juli";
})(Month || (Month = {}));
console.log(Month.MAR);
