const request = require('request');



const fetchBreedDescription = function(breedName, callback) {



request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
  
 

  const data = JSON.parse(body);
  
 if(data[0]){
console.log("description",data[0].description)

 }else{

  console.log('faild to find it ')
 }

});

};

module.exports = { fetchBreedDescription };
