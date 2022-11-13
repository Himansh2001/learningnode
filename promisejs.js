const a=false ;
const b=false ;
 let p =new Promise((resolve,reject)=>{
     if(a||b){
        reject({
            name:'user left' ,
            message:':('
        });
     }
     else {
        resolve("thumbs up ") ;
     }
 });
 p.then((message)=>{
    console.log(message) ;
 }).catch((message)=>{
    console.log(message) ;
 });