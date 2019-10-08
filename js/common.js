$(function() {

    var dates = [
      {date:new Date(2020, 9, 10), label:"October 10<sup>th</sup>"},
      {date:new Date(2020, 6, 18), label:"July 18<sup>th</sup>"},
      {date:new Date(2020, 3, 18), label:"April 18<sup>th</sup>"},
      {date:new Date(2020, 0, 25), label:"January 25<sup>th</sup>"},
      {date:new Date(2019, 9, 12), label:"October 12<sup>th</sup>"}
    ]

    var label = "";
    var now = new Date();
    now.setHours(0,0,0,0);
    var element = $("#NextSwapShopDate");

    for(i=0; i<dates.length; i++){
      if(dates[i].date > now){
        label = dates[i].label;
      }
      if(dates[i].date.getTime() === now.getTime()){
        label = 'Today!'
      }
    }

    if(element && label){
      element.html("The next swap shop - " + label);
    }

});
