// const name = require("./name.js");
// const sayhi = require("./fun.js");

//  sayhi("susan");
//  sayhi(name.john);
//  sayhi(name.peter);
//  console.log(name.arr);
//  require('./add.js') ;
//  const sum = require("./add.js");
//  sum.add() ;

//build in os module
// const os = require('os') ;
//  //info about current user
//  const user = os.userInfo() ;
//  console.log(user) ;

//file sync module
// const { readFileSync, writeFileSync } = require("fs");
// const f1 = readFileSync("./content/first.txt", "utf-8");
// const f2 = readFileSync("./content/second.txt", "utf-8");
// console.log(f1,f2);
// //if you use  flag it will append it with the previous file else thhe file will be completely overwritten
// writeFileSync("./content/added.txt",`append file: ${f1},${f2}`,{flag:'a'}) ;

//creating server
// const http = require("http");

// const server = http.createServer((req, res) => {
//   if (req.url === "/") {
//     res.end("this is home page");
//   } 
//   else if (req.url === "/about") {
//     res.end("this is about");
//   } 
//   else {
//     res.end(`<h1>OOps</h1>
//   <p1>page not found</p1>
//   <a href="/">back to home</a>
//   `);
//   }
// });

// server.listen(5000,()=>{
//   console.log("server starting on port 5000") ;
// });


//using promise is async fs
// const {readFile} = require("fs") ;
// const gettext = (path)=>{
//        return new Promise((resolve,reject)=>{
//        readFile(path,'utf8',(err,result)=>{
//           if(err){
//              reject(err)
//           }
//           else{
//             resolve(result) ;
//           }
//        })
//        })
// }
// gettext('./content/first.txt').then((result)=>{
//   console.log(result) ;
// }).catch((err)=>{console.log(err)}) ;


// //  event driven programming in node js
// const EventEmitter = require("events") ;
// const customEmitter = new EventEmitter() ;
// customEmitter.on('response',()=>{
//   console.log('data recieved') ;
// })
// customEmitter.emit('response') ;

//streams 

