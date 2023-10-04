//Async-video-7

// const fs = require("fs");

// // fs.writeFile("read.txt", "today is awesome day :)");
// //when working in async mode use callbacks
// fs.writeFile("read.txt", "today is awesome day :)", (err) => {
//   console.log("files is created");
//   console.log(err);
// });
// //callback func k kaam yhi hai ki ek baar func complete hojaye ya no paaye wo func ko btado kya karna hai ...yahan par jaise error dega



// //asynchronous meaning
// //we pass them a func as an argument-a callback
// //tht gets called when that task completes.
// //The callback has an argument that tells u whether
// //the operation completed successfully
// //Now we need to say what to do when fs.writeFile
// //has complted(even if its nothing),and start
// //checking for errors.


// //ye hai write file async m
// fs.appendFile("read.txt","plz like and share and subs my channel",(err)=>{
//     console.log("task completed");
// });

// //read a file
// fs.readFile("read.txt","UTF-8",(err,data) => {
//     console.log(data); 
//     //data mei sara content ajata hai file k
//     //aur utf-8 islye likhe hai coz buffer data na mile
// });



