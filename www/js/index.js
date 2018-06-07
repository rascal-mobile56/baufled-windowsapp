

$("#page1").click(function () {

    $("#view-5").css({"display":"block"});
    $("#view-6").css({"display":"none"});
    $("#gobb").css({ "display": "none" });

    $(".tabbar-demo-icon1").addClass("tabbar_op");
    $(".tabbar-demo-icon2").removeClass("tabbar_op");
    $(".tabbar-demo-icon3").removeClass("tabbar_op");
    $(".tabbar-demo-icon4").removeClass("tabbar_op");

});

$("#page2").click(function () {
    $("#gobb").css({ "display": "none" });
    $(".tabbar-demo-icon1").removeClass("tabbar_op");
    $(".tabbar-demo-icon2").addClass("tabbar_op");
    $(".tabbar-demo-icon3").removeClass("tabbar_op");
    $(".tabbar-demo-icon4").removeClass("tabbar_op");
});

$("#page3").click(function () {
    $("#gobb").css({ "display": "none" });
    $(".tabbar-demo-icon1").removeClass("tabbar_op");
    $(".tabbar-demo-icon2").removeClass("tabbar_op");
    $(".tabbar-demo-icon3").addClass("tabbar_op");
    $(".tabbar-demo-icon4").removeClass("tabbar_op");
});

$("#page4").click(function () {
    $("#gobb").css({ "display": "block" });
    $(".tabbar-demo-icon1").removeClass("tabbar_op");
    $(".tabbar-demo-icon2").removeClass("tabbar_op");
    $(".tabbar-demo-icon3").removeClass("tabbar_op");
    $(".tabbar-demo-icon4").addClass("tabbar_op");
});

//window.open('tel: +498002283353', '_system')
$("#page5").click(function () {

    $("#view-5").css({"display":"none"});
    $("#view-6").css({"display":"block"});
});


//Telephone

$("#tel").click(function()
{

   window.open('tel:+498002283353', '_system');

});
$("#tel1").click(function()
{
    //window.location.href = "tel;" + "4989354880";
    window.open('tel:+4989354880', '_system');
});

$("#tel2").click(function()
{
    window.open('tel:+49203449070', '_system');
//     window.location.href = "tel;" + "+49203449070";
 });
$("#tel3").click(function()
{
    window.open('tel:+4937126260', '_system');
    // window.location.href = "tel;" + "+4937126260";
});
$("#tel4").click(function()
{
    window.open('tel:+493327573606', '_system');
    // window.location.href = "tel;" + "+493327573606";
});
$("#tel5").click(function()
{
    //window.location.href = "tel;" + "4989354880";
    window.open('tel:+4989354880', '_system');
});


//Send Email

$("#msg1").click(function(){
    cordova.plugins.email.open({
        to:      'baufeld.muenchen@baufeld.de',
        subject: 'Greetings',
        body:    '<h1>Nice greetings from Leipzig</h1>',
        isHtml:  true
    });
});

$("#msg2").click(function(){
    cordova.plugins.email.open({
        to:      'baufeld.duisburg@baufeld.de',
        subject: 'Greetings',
        body:    '<h1>Nice greetings from Leipzig</h1>',
        isHtml:  true
    });
    //cordova.plugins.email.open({to: "baufeld.duisburg@baufeld.de" ,cc:null,subject:null,body:null,isHtml:true});
});
$("#msg3").click(function(){

    cordova.plugins.email.open({
        to:      'baufeld.duisburg@baufeld.de',
        subject: 'Greetings',
        body:    '<h1>Nice greetings from Leipzig</h1>',
        isHtml:  true
    });
   // cordova.plugins.email.open({to: "baufeld.chemnitz@baufeld.de" ,cc:null,subject:null,body:null,isHtml:true});
});
$("#msg4").click(function(){

    cordova.plugins.email.open({
        to:      'baufeld.berlin@baufeld.de',
        subject: 'Greetings',
        body:    '<h1>Nice greetings from Leipzig</h1>',
        isHtml:  true
    });
    //cordova.plugins.email.open({to: "baufeld.berlin@baufeld.de" ,cc:null,subject:null,body:null,isHtml:true});
});

//Googel Map

$("#map1").click(function(){
    var ref = cordova.InAppBrowser.open('https://www.google.de/maps/place/Motorstra%C3%9Fe+56,+80809+M%C3%BCnchen/@48.18774,11.5586513,17z/data=!3m1!4b1!4m5!3m4!1s0x479e769b3e22b2b3:0x7f34d9be9716af2e!8m2!3d48.18774!4d11.56084', '_blank', 'location=no');
});
$("#map2").click(function(){
    var ref = cordova.InAppBrowser.open('https://www.google.de/maps/place/Krabbenkamp+11,+47138+Duisburg/@51.4561535,6.7834646,17z/data=!3m1!4b1!4m5!3m4!1s0x47b8bf975a7b4297:0x3b11260eb480a8cb!8m2!3d51.4561535!4d6.7856533', '_blank', 'location=no');
});
$("#map3").click(function(){
    var ref = cordova.InAppBrowser.open('https://www.google.de/maps/place/Chemnitzer+Str.+3,+09123+Chemnitz/@50.7729634,12.8993013,17z/data=!4m5!3m4!1s0x47a748c3d5545305:0x2f71a6a3d360fe6a!8m2!3d50.77296!4d12.90149', '_blank', 'location=no');
});
$("#map4").click(function(){
    var ref = cordova.InAppBrowser.open('https://www.google.de/maps/place/Mielestra%C3%9Fe+2,+14542+Werder+%28Havel%29/@52.4051393,12.9050136,18z/data=!4m5!3m4!1s0x47a8f249d7e23913:0x38f2500bdf7d9e70!8m2!3d52.40384!4d12.90853', '_blank', 'location=no');
});
$("#map5").click(function(){
    var ref = cordova.InAppBrowser.open('https://www.google.de/maps/place/Motorstra%C3%9Fe+56,+80809+M%C3%BCnchen/@48.18774,11.5586513,17z/data=!3m1!4b1!4m5!3m4!1s0x479e769b3e22b2b3:0x7f34d9be9716af2e!8m2!3d48.18774!4d11.56084', '_blank', 'location=no');
});


//Main site

$("#anf").click(function(){
    var ref = cordova.InAppBrowser.open('https://myportal.baufeld.de/baufeld/de/entsorgungsanfragen/create', '_blank', 'location=no');
});
$("#auf").click(function(){
    var ref = cordova.InAppBrowser.open('https://myportal.baufeld.de/baufeld/de', '_blank', 'location=no');
});

$("#gobb").click(function () {
    cordova.InAppBrowser.open('https://baufeld.de/datenschutzerklaerung', '_blank', 'location=no');
});

// // 