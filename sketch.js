
//link to the giphy website
var api = "http://api.giphy.com/v1/gifs/search?";

//an access key for the open beta
var apiKey = "&api_key=i3qnidpr3fwYaJxLzkU6uG30l3nX3OX2";

//this is to specify the search
var query = "&q=rainbow";


function setup() {
  //no canvas is created
  noCanvas();
  //this a call function to all the variables above
  var url = api + apiKey + query;
  //this is P5.js function where I give a url from an api 
  loadJSON(url, gotData); 
}

function gotData(giphy){
  //this is a series of steps that allows to get to the source of the gif
  //also, by creating "i" it is possible to select multiple gifs from the array instead of just one 
  for (var i = 0; i < giphy.data.length; i++){
    createImg(giphy.data[i].images.original.url);   
  }

}
