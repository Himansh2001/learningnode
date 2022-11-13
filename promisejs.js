const makerequest= (location)=>{
  return new Promise((resolve,reject)=>{
     console.log(`processing request for ${location} `) ;
     if(location=="google")resolve("google says hi") ;
     else reject("we can only talk to google") ;
  });
}
const processrequest=(response)=>{
    return new Promise((resolve,reject)=>{
      console.log("processing response")  ;
      if(response)
   resolve(`extra information + ${response}`) ; 
    })
}

makerequest("google").then((expression)=>{
   console.log("response recieved") ;
   processrequest(expression).then((res)=>{
      console.log(res) ;
   })
}).catch((err)=>{
   console.log(err) ;
})