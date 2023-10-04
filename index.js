// REPL
// 1:js Expression
// 2:use Variables
// 3:Multiline code
//4:use (_) to get the last result
//5:we can use editor mode

// const fs = require("fs"); //ye humlog core module ko call kiye
// //creating a new file
// fs.writeFileSync("read.txt", "welcome to my channel");
// //ye jo file mei jo add krenge jo chiz wo likh diye read.txt mei welcome.. add hga
// // fs.writeFileSync("read.txt","thapa technical,welcome to my channel")
// // ye data ko overwrite krr dega

// //avi bina overwrite kiye kaise add kre text
// fs.appendFileSync("read.txt", "how are you I am fine Thank you");

// //avi read krenge
// const buf_data = fs.readFileSync("read.txt");
// // console.log(buf_data);
// org_data = buf_data.toString();
// console.log(org_data);

// //Node.js includes an additional dat type called buffer
// //(not available in browser's js).
// //Buffer is mainly used to store  binary data.
// //while reading from a file or f packets over the network.

// //to rename the file

// fs.renameSync("read.txt", "readwrite.txt");

//CRUD OPERATION
// 1:Create a folder named it thapa
//2:Create a file in it named bio.txt and data into it.
// 3:Add more data into the file at the end of the existing data.
//4:Read the dat without getting the buffer data at the first.
//file encoding
//5:Rename the file name to mybio.txt
//6:now delete both the file and the folder
