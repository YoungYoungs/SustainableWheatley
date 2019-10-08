$(function() {
    var dates = [
      {date:new Date(2019, 9, 12), label:"October 12<sup>th</sup>"},
      {date:new Date(2019, 6, 20), label:"July 20<sup>th</sup>"},
      {date:new Date(2019, 3, 27), label:"April 27<sup>th</sup>"},
      {date:new Date(2019, 0, 26), label:"January 26<sup>th</sup>"}
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
