const request = require('request');
const input =  process.argv[2]


request(`https://api.thecatapi.com/v1/breeds/search?q=${input}`, (error, response, body) => {
  
  // console.log(" this this type of body",typeof body)

  const data = JSON.parse(body);
  // console.log("data",data);
  // console.log("typeof data",typeof data);

//  let descriptionOfCat = data[0].description

//  console.log("description",descriptionOfCat)
 if(data[0]){
console.log("description",data[0].description)

 }else{

  console.log('faild to find it ')
 }

});



