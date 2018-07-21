$(function() {
    var dates = [
      {date:new Date(2018, 10, 13), label:"October 13<sup>th</sup>"},
      {date:new Date(2018, 6, 21), label:"July 21<sup>st</sup>"},
      {date:new Date(2018, 3, 21), label:"April 21<sup>st</sup>"},
      {date:new Date(2018, 0, 27), label:"January 27<sup>th</sup>"}
    ]
    var label = "";
    var now = Date.now();
    var element = $("#NextSwapShopDate");

    for(i=0; i<dates.length; i++){
      if(dates[i].date >= now){
        label = dates[i].label;
      }
    }

    if(element && label){
      element.html("The next swap shop - " + label);
    }

});
