var app = function(){
  var url = 'https://api.punkapi.com/v2/beers';
  makeRequest(url, requestComplete);
}

var makeRequest = function(url, callback){
  var request = new XMLHttpRequest();
  request.open("GET", url);
  request.addEventListener('load', callback);
  request.send();
}

var requestComplete = function(){
  if(this.status !== 200) return;
  var jsonString = this.responseText;
  var brewDog = JSON.parse(jsonString);
  getBeers(brewDog);
};

var getBeers = function(brewDog){
  for(beer of brewDog){
    console.log(beer.name);
    serveBeers(beer);
  }
}

var serveBeers = function(beer){
  // for(i of beer){
  //   console.log(ingredients);
  // }
  var ul = document.getElementById('beer-list');
  var li = document.createElement('li');
  var img = document.createElement('img');
  img.src = beer.image_url;
  li.innerText = beer.name;
  li.classList.add('beer-name-img');
  li.appendChild(img);
  ul.appendChild(li);


  // var beerIngred = beer.ingredients[''];
  // console.log(beer.ingredients.malt);

}

window.addEventListener('load', app);