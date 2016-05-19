var express = require("express");
var request = require('request');
var cheerio = require('cheerio');
var cheerioAdv = require('cheerio-advanced-selectors');
var app     = express();
var path    = require("path");  
app.use("/views", express.static(__dirname + path.sep + "views"));
app.use("/js", express.static(__dirname + path.sep + "js"));
cheerio = cheerioAdv.wrap(cheerio);


app.get("/topFilms",function(req,resp){
	   var movies=[];
       var  url = 'http://www.imdb.com/chart/top';
       request(url, function(error, response, html){
           if(!error){
              var $ = cheerio.load(html);
              $(".lister-list tr").each(function(){
              	  var img;
              	  var title;
              	  var rating;
              	  var url;
              	  var preUrl="http://www.imdb.com";
              	  var year;
              	  $(this).find("td").children().each(function(i){
              	  	 if(i==5){
              	  	 	 img=$(this).find("img").attr("src");
              	  	 }
              	  	 if(i==6){
              	  	 	 title=$(this).text();
              	  	 	 url=preUrl+$(this).attr("href");
              	  	 }
              	  	 if(i==7){
                       year=$(this).text();
              	  	 }
              	  	
              	  });
              	 movies.push({"src":img,"txt":title,"url":url,"year":year});
                 
              });
              resp.json(movies);
              resp.end();
           }else{
           	  resp.send(error);
           	  resp.end();
           }
       });  
       
       
          
  });

app.listen(8000,"0.0.0.0");