angular.module("yservice",[])
 .service("youtubeservice",function($http){
    this.search=function(search){
    	return $http.get("https://www.googleapis.com/youtube/v3/search",{
			   params:{
				   part:'snippet',
				   q:search,
				   key:''
			   }
           });
    }; 
 }).service("dataservice",function(){
    var datas=[];  
    this.setResponseDatas=function(data){
    	this.datas=data;
    };
    this.getResponseDatas=function(){
    	return this.datas;
    }  
 });
