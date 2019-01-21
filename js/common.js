$(function() {
    var dates = [
      {date:new Date(2019, 8, 12), label:"October 12<sup>th</sup>"},
      {date:new Date(2019, 6, 12), label:"July 12<sup>th</sup>"},
      {date:new Date(2019, 3, 20), label:"April 20<sup>th</sup>"},
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
