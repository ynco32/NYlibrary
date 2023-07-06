var Crawler = require("crawler");
var jsonData

var c = new Crawler({
    maxConnections : 10,
    // This will be called for each crawled page
    callback : function (error, res, done) {
        if(error){
            console.log(error);
        }else{
            var $ = res.$;
            // $ is Cheerio by default
            //a lean implementation of core jQuery designed specifically for the server
            
            //console.log($("title").text());

            const $bodyList = $("div#locations-list").find('li');

            var jsonArray 	= new Array();
            var i = 0
            $bodyList.each(function(i, elem) {
                let jsonObj = new Object();
                jsonObj.id	= (i+1);
                jsonObj.title = $(this).find('div.css-1krdr49').find('a').text();
                //console.log(jsonObj.title);
                jsonObj.location = $(this).find('div.address.css-1se1pun').text();
                //console.log(jsonObj.location);
                jsonObj.number = $(this).find('div.phone.css-gbfn2m').text();
                //console.log(jsonObj.number);
                jsonObj.nonaval = $(this).find('div.css-ekwn3s').text();
                //console.log(jsonObj.nonaval);
                jsonObj.status = $(this).find('div.chakra-stack.css-ja1irr').find('div.css-1xsa88d').text();
                //console.log(jsonObj.status);
                


                jsonArray.push(jsonObj);
              });
            
            jsonData = JSON.stringify(jsonArray) ;
		
            
		    console.log(jsonData);
            
            // console.log(newsList);
        }
        done();
    }
});
 

c.queue('https://www.nypl.org/locations');